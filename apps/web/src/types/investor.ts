export interface Investor {
  id: string;

  fullName: string;

  firmName: string;

  investmentStage: string;

  industries: string[];

  ticketSize: string;

  availabilityStatus?: string;

  portfolioCount?: string;
}