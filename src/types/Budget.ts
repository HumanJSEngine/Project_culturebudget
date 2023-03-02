export interface BudgetData {
  miSeq: number;
  ehSeq: number;
  ehDate: string;
  ehTitle: string;
  ehContent?: string;
  ehPrice: number;
  ehLocation: string;
  ehStoreName: string;
  ehImgFile: string;
  ccSeq: number;
  ccName: string;
  cdcSeq?: number;
  cdcName?: string;
  piType: number;
  piName: string;
}

export interface PaymentData {
  piSeq: number;
  piType: number;
  piName: string;
  piMiSeq: number;
}
