function escapeHtml(
  value: string,
): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const exportReadinessReport =
  async () => {
    const report =
      document.querySelector<HTMLElement>(
        ".print-report",
      );

    if (!report) {
      console.error(
        "Startup Blueprint report was not found.",
      );
      return;
    }

    const startupName =
      report.dataset.startupName?.trim();

    const documentTitle =
      startupName
        ? `${startupName} - Startup Blueprint`
        : "Startup Blueprint";

    const iframe =
      document.createElement("iframe");

    iframe.setAttribute(
      "title",
      "Startup Blueprint Print Frame",
    );

    iframe.style.position = "fixed";
    iframe.style.left = "-10000px";
    iframe.style.top = "0";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.style.border = "0";

    document.body.appendChild(
      iframe,
    );

    const printWindow =
      iframe.contentWindow;

    const doc =
      printWindow?.document;

    const cleanup = () => {
      if (
        iframe.parentNode
      ) {
        iframe.parentNode.removeChild(
          iframe,
        );
      }
    };

    if (
      !printWindow ||
      !doc
    ) {
      cleanup();

      throw new Error(
        "Unable to create the Blueprint print document.",
      );
    }

    doc.open();

    doc.write(`
      <!doctype html>

      <html>
        <head>
          <meta charset="utf-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <title>
            ${escapeHtml(documentTitle)}
          </title>

          <style>
            @page {
              size: A4;
              margin: 0;
            }

            * {
              box-sizing: border-box;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background: #ffffff;
              color: #334155;
              font-family: Arial, sans-serif;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            .print-report {
              width: 210mm;
              margin: 0 auto;
              background: #ffffff;
            }

            .blueprint-page {
              width: 210mm;
              min-height: 297mm;
              margin: 0 auto;
              padding: 18mm;
              background: #ffffff;

              page-break-after: always;
              break-after: page;
            }

            .blueprint-page:last-child {
              page-break-after: auto;
              break-after: auto;
            }

            .blueprint-card {
              page-break-inside: avoid;
              break-inside: avoid;
            }

            nav,
            aside,
            header,
            button,
            .print-hide,
            .print\\:hidden {
              display: none !important;
            }

            img,
            svg {
              max-width: 100%;
            }

            p,
            h1,
            h2,
            h3,
            h4,
            span,
            div {
              overflow-wrap: anywhere;
            }

            @media screen {
              body {
                background: #e2e8f0;
              }

              .blueprint-page {
                margin: 12px auto;
                box-shadow:
                  0 10px 30px
                  rgba(15, 23, 42, 0.08);
              }
            }

            @media print {
              html,
              body {
                width: 210mm;
                background: #ffffff;
              }

              .print-report {
                width: 210mm;
              }

              .blueprint-page {
                margin: 0;
                box-shadow: none;
              }
            }
          </style>
        </head>

        <body>
          ${report.outerHTML}
        </body>
      </html>
    `);

    doc.close();

    await new Promise<void>(
      (resolve) => {
        window.setTimeout(
          resolve,
          300,
        );
      },
    );

    printWindow.focus();

    printWindow.addEventListener(
      "afterprint",
      cleanup,
      {
        once: true,
      },
    );

    printWindow.print();

    window.setTimeout(
      cleanup,
      60000,
    );
  };