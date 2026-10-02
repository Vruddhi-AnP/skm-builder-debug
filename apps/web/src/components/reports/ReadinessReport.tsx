"use client";

import type {
  CSSProperties,
  ReactNode,
} from "react";

import type {
  ReadinessReportData,
} from "@/types/report";

interface ReadinessReportProps {
  report: ReadinessReportData;
}

const COLORS = {
  navy: "#16214A",
  primary: "#2563EB",
  text: "#334155",
  muted: "#64748B",
  border: "#E2E8F0",
  soft: "#F8FAFC",
  blueSoft: "#EFF6FF",
  greenSoft: "#ECFDF5",
  green: "#047857",
  amberSoft: "#FFFBEB",
  amber: "#B45309",
};

const pageContentStyle: CSSProperties = {
  fontFamily: "Arial, sans-serif",
  color: COLORS.text,
  lineHeight: 1.5,
};

const cardStyle: CSSProperties = {
  border: `1px solid ${COLORS.border}`,
  borderRadius: "18px",
  padding: "18px",
  background: "#FFFFFF",
  wordBreak: "break-word",
  overflowWrap: "anywhere",
};

const smallLabelStyle: CSSProperties = {
  margin: 0,
  fontSize: "11px",
  lineHeight: 1.4,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: COLORS.muted,
};

function PageFooter({
  page,
  generatedDate,
}: {
  page: number;
  generatedDate: string;
}) {
  return (
    <div
      style={{
        marginTop: "36px",
        paddingTop: "12px",
        borderTop:
          `1px solid ${COLORS.border}`,
        display: "flex",
        justifyContent:
          "space-between",
        gap: "20px",
        fontSize: "10px",
        color: COLORS.muted,
      }}
    >
      <span>
        Startup Ka Mall • Startup Blueprint
      </span>

      <span>
        {generatedDate} • Page {page}
      </span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p
        style={{
          ...smallLabelStyle,
          color: COLORS.primary,
        }}
      >
        {eyebrow}
      </p>

      <h2
        style={{
          margin:
            "8px 0 0",
          fontSize: "28px",
          lineHeight: 1.2,
          color: COLORS.navy,
          fontWeight: 800,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            margin:
              "10px 0 0",
            fontSize: "13px",
            lineHeight: 1.7,
            color: COLORS.muted,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function BlueprintCard({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: ReactNode;
  tone?:
    | "default"
    | "blue"
    | "green"
    | "amber";
}) {
  const background =
    tone === "blue"
      ? COLORS.blueSoft
      : tone === "green"
        ? COLORS.greenSoft
        : tone === "amber"
          ? COLORS.amberSoft
          : "#FFFFFF";

  return (
    <div
      className="blueprint-card"
      style={{
        ...cardStyle,
        background,
      }}
    >
      <p style={smallLabelStyle}>
        {title}
      </p>

      <div
        style={{
          marginTop: "10px",
          fontSize: "14px",
          lineHeight: 1.75,
          color: COLORS.text,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function ReadinessReport({
  report,
}: ReadinessReportProps) {
  return (
    <div
      className="print-report"
      data-startup-name={
        report.startup.name
      }
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        background: "#FFFFFF",
        color: COLORS.text,
      }}
    >
      {/* PAGE 1 — IDENTITY + READINESS */}

      <section
        className="blueprint-page"
        style={pageContentStyle}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent:
              "space-between",
            gap: "24px",
            paddingBottom: "20px",
            borderBottom:
              `1px solid ${COLORS.border}`,
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing:
                  "0.08em",
                color: COLORS.primary,
              }}
            >
              STARTUP KA MALL
            </p>

            <p
              style={{
                margin:
                  "5px 0 0",
                fontSize: "11px",
                color: COLORS.muted,
              }}
            >
              Founder Startup Blueprint
            </p>
          </div>

          <div
            style={{
              textAlign: "right",
            }}
          >
            <p style={smallLabelStyle}>
              Generated
            </p>

            <p
              style={{
                margin:
                  "5px 0 0",
                fontSize: "13px",
                fontWeight: 700,
                color: COLORS.text,
              }}
            >
              {report.generatedDate}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "42px",
          }}
        >
          <p
            style={{
              ...smallLabelStyle,
              color: COLORS.primary,
            }}
          >
            Combined Startup Blueprint
          </p>

          <h1
            style={{
              margin:
                "10px 0 0",
              fontSize: "42px",
              lineHeight: 1.1,
              fontWeight: 900,
              color: COLORS.navy,
              wordBreak:
                "break-word",
            }}
          >
            {report.startup.name}
          </h1>

          <p
            style={{
              margin:
                "14px 0 0",
              fontSize: "15px",
              color: COLORS.muted,
            }}
          >
            Prepared for{" "}
            <strong
              style={{
                color: COLORS.navy,
              }}
            >
              {report.founder.name}
            </strong>
          </p>
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          <BlueprintCard title="Industry">
            {report.startup.sector}
          </BlueprintCard>

          <BlueprintCard title="Startup Stage">
            {report.startup.stage}
          </BlueprintCard>
        </div>

        <div
          className="blueprint-card"
          style={{
            marginTop: "22px",
            border:
              `1px solid ${COLORS.border}`,
            borderRadius: "20px",
            padding: "22px",
            background:
              COLORS.soft,
          }}
        >
          <p style={smallLabelStyle}>
            Startup Overview
          </p>

          <p
            style={{
              margin:
                "12px 0 0",
              fontSize: "14px",
              lineHeight: 1.8,
              color: COLORS.text,
              wordBreak:
                "break-word",
              overflowWrap:
                "anywhere",
            }}
          >
            {report.executiveSummary}
          </p>
        </div>

        <div
          className="blueprint-card"
          style={{
            marginTop: "24px",
            padding: "24px",
            border:
              `1px solid #BFDBFE`,
            borderRadius: "22px",
            background:
              COLORS.blueSoft,
            display: "grid",
            gridTemplateColumns:
              "1fr auto",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                ...smallLabelStyle,
                color: COLORS.primary,
              }}
            >
              Overall Readiness
            </p>

            <p
              style={{
                margin:
                  "9px 0 0",
                fontSize: "21px",
                fontWeight: 800,
                color: COLORS.navy,
              }}
            >
              {report.readiness.label}
            </p>

            <p
              style={{
                margin:
                  "8px 0 0",
                maxWidth: "420px",
                fontSize: "12px",
                lineHeight: 1.7,
                color: COLORS.muted,
              }}
            >
              Deterministic score derived
              from the persisted Startup
              Builder responses.
            </p>
          </div>

          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "999px",
              border:
                `10px solid ${COLORS.primary}`,
              display: "flex",
              flexDirection:
                "column",
              alignItems: "center",
              justifyContent:
                "center",
              background: "#FFFFFF",
            }}
          >
            <strong
              style={{
                fontSize: "30px",
                lineHeight: 1,
                color: COLORS.navy,
              }}
            >
              {
                report.readiness
                  .overallScore
              }
              %
            </strong>

            <span
              style={{
                marginTop: "5px",
                fontSize: "9px",
                color: COLORS.muted,
              }}
            >
              SCORE
            </span>
          </div>
        </div>

        <PageFooter
          page={1}
          generatedDate={
            report.generatedDate
          }
        />
      </section>

      {/* PAGE 2 — PROBLEM / CUSTOMER / SOLUTION */}

      <section
        className="blueprint-page"
        style={pageContentStyle}
      >
        <SectionHeading
          eyebrow="Opportunity Definition"
          title="Problem, Customer & Solution"
          description="Core opportunity definition reconstructed from the founder's persisted Startup Builder responses."
        />

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gap: "20px",
          }}
        >
          <BlueprintCard
            title="Problem Statement"
            tone="amber"
          >
            {
              report.blueprint
                .problemStatement
            }
          </BlueprintCard>

          <BlueprintCard
            title="Target Customer"
            tone="blue"
          >
            {
              report.blueprint
                .targetCustomer
            }
          </BlueprintCard>

          <BlueprintCard
            title="Solution Summary"
            tone="green"
          >
            {
              report.blueprint
                .solutionSummary
            }
          </BlueprintCard>
        </div>

        <PageFooter
          page={2}
          generatedDate={
            report.generatedDate
          }
        />
      </section>

      {/* PAGE 3 — BUSINESS BLUEPRINT */}

      <section
        className="blueprint-page"
        style={pageContentStyle}
      >
        <SectionHeading
          eyebrow="Business Blueprint"
          title="Value, Business Model & MVP"
          description="The startup's proposed value creation, commercial structure and MVP definition."
        />

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gap: "20px",
          }}
        >
          <BlueprintCard
            title="Value Proposition"
            tone="blue"
          >
            {
              report.blueprint
                .valueProposition
            }
          </BlueprintCard>

          <BlueprintCard
            title="Business Model"
          >
            {
              report.blueprint
                .businessModel
            }
          </BlueprintCard>

          <BlueprintCard
            title="MVP Definition"
            tone="green"
          >
            {
              report.blueprint
                .mvpDefinition
            }
          </BlueprintCard>
        </div>

        <PageFooter
          page={3}
          generatedDate={
            report.generatedDate
          }
        />
      </section>

      {/* PAGE 4 — ALL READINESS PARAMETERS */}

      <section
        className="blueprint-page"
        style={pageContentStyle}
      >
        <SectionHeading
          eyebrow="Readiness Assessment"
          title="Parameter-wise Scores"
          description={`${report.readiness.overallScore}% overall readiness • ${report.readiness.label}`}
        />

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gap: "12px",
          }}
        >
          {report.metrics.map(
            (metric) => (
              <div
                key={metric.title}
                className="blueprint-card"
                style={{
                  border:
                    `1px solid ${COLORS.border}`,
                  borderRadius:
                    "16px",
                  padding:
                    "14px 16px",
                  background:
                    "#FFFFFF",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    gap: "18px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "space-between",
                        gap: "16px",
                      }}
                    >
                      <strong
                        style={{
                          fontSize:
                            "13px",
                          color:
                            COLORS.navy,
                        }}
                      >
                        {metric.title}
                      </strong>

                      <span
                        style={{
                          flexShrink: 0,
                          fontSize:
                            "16px",
                          fontWeight: 800,
                          color:
                            COLORS.primary,
                        }}
                      >
                        {metric.score}%
                      </span>
                    </div>

                    <div
                      style={{
                        marginTop:
                          "9px",
                        height: "6px",
                        borderRadius:
                          "999px",
                        background:
                          "#E2E8F0",
                        overflow:
                          "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${metric.score}%`,
                          height:
                            "100%",
                          borderRadius:
                            "999px",
                          background:
                            COLORS.primary,
                        }}
                      />
                    </div>

                    <p
                      style={{
                        margin:
                          "8px 0 0",
                        fontSize:
                          "10.5px",
                        lineHeight:
                          1.55,
                        color:
                          COLORS.muted,
                      }}
                    >
                      {metric.insight}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <PageFooter
          page={4}
          generatedDate={
            report.generatedDate
          }
        />
      </section>

      {/* PAGE 5 — ACTIONS + DISCLAIMER */}

      <section
        className="blueprint-page"
        style={pageContentStyle}
      >
        <SectionHeading
          eyebrow="Execution Priorities"
          title="Recommended Improvement Actions"
          description="Priority actions generated from the startup's lowest-scoring readiness parameters."
        />

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gap: "14px",
          }}
        >
          {report.improvements.map(
            (action, index) => (
              <div
                key={`${index}-${action}`}
                className="blueprint-card"
                style={{
                  ...cardStyle,
                  display: "grid",
                  gridTemplateColumns:
                    "38px 1fr",
                  alignItems:
                    "start",
                  gap: "14px",
                  background:
                    COLORS.soft,
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius:
                      "999px",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    background:
                      COLORS.primary,
                    color: "#FFFFFF",
                    fontSize:
                      "13px",
                    fontWeight: 800,
                  }}
                >
                  {index + 1}
                </div>

                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize:
                        "11px",
                      fontWeight: 800,
                      color:
                        COLORS.navy,
                    }}
                  >
                    Improvement Action
                  </p>

                  <p
                    style={{
                      margin:
                        "6px 0 0",
                      fontSize:
                        "13px",
                      lineHeight:
                        1.7,
                      color:
                        COLORS.text,
                      wordBreak:
                        "break-word",
                      overflowWrap:
                        "anywhere",
                    }}
                  >
                    {action}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        <div
          className="blueprint-card"
          style={{
            marginTop: "28px",
            border:
              `1px solid ${COLORS.border}`,
            borderRadius: "18px",
            padding: "18px",
            background:
              COLORS.blueSoft,
          }}
        >
          <p style={smallLabelStyle}>
            Generated Date
          </p>

          <p
            style={{
              margin:
                "7px 0 0",
              fontSize: "14px",
              fontWeight: 700,
              color: COLORS.navy,
            }}
          >
            {report.generatedDate}
          </p>
        </div>

        <div
          className="blueprint-card"
          style={{
            marginTop: "18px",
            border:
              `1px solid ${COLORS.border}`,
            borderRadius: "18px",
            padding: "18px",
            background: "#FFFFFF",
          }}
        >
          <p style={smallLabelStyle}>
            Disclaimer
          </p>

          <p
            style={{
              margin:
                "8px 0 0",
              fontSize: "10.5px",
              lineHeight: 1.7,
              color: COLORS.muted,
              wordBreak:
                "break-word",
              overflowWrap:
                "anywhere",
            }}
          >
            {report.disclaimer}
          </p>
        </div>

        <PageFooter
          page={5}
          generatedDate={
            report.generatedDate
          }
        />
      </section>
    </div>
  );
}