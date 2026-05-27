export const exportReadinessReport =
  async () => {
    const report =
      document.querySelector(
        ".print-report"
      ) as HTMLElement;

    if (!report) return;

    const iframe =
      document.createElement("iframe");

    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";

    document.body.appendChild(iframe);

    const doc =
      iframe.contentWindow?.document;

    if (!doc) return;

    doc.open();

    doc.write(`
      <html>
        <head>
          <title>
            Startup Readiness Report
          </title>

          <style>
            * {
              box-sizing: border-box;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background: white;
              font-family: Arial, sans-serif;
              color: #0F172A;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            body {
              padding: 0;
            }

            .print-report {
              width: 100%;
              background: white;
            }

            .print-page {
              width: 210mm;
              min-height: 297mm;
              margin: 0 auto;
              padding: 20mm;
              background: white;
              page-break-after: always;
              break-after: page;
              overflow: hidden;
              position: relative;
            }

            .print-page:last-child {
              page-break-after: auto;
              break-after: auto;
            }

            .print-card,
            .print-section {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            button,
            .print\\:hidden {
              display: none !important;
            }

            .report-footer {
              position: absolute;
              bottom: 10mm;
              left: 20mm;
              right: 20mm;
              display: flex;
              justify-content: space-between;
              font-size: 11px;
              color: #64748B;
              border-top: 1px solid #E2E8F0;
              padding-top: 10px;
            }

            @page {
              size: A4;
              margin: 0;
            }
          </style>
        </head>

        <body>
          <div class="print-report">
            ${report.innerHTML}
          </div>
        </body>
      </html>
    `);

    doc.close();

    setTimeout(() => {
      iframe.contentWindow?.focus();

      iframe.contentWindow?.print();

      setTimeout(() => {
        document.body.removeChild(
          iframe
        );
      }, 1500);
    }, 800);
  };