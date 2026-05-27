export interface ReadinessReportData {
  founder: {
    name: string
    email: string
  }

  startup: {
    name: string
    sector: string
    stage: string
  }

  readiness: {
    overallScore: number
    marketScore: number
    productScore: number
    businessScore: number
  }

  recommendations: string[]
}