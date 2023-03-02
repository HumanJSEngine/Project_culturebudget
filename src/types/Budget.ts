export interface BudgetData {
    miSeq:number;
    ehSeq: number;
    ehTitle: string;
    ehDate: string;
    ehMiSeq: number;
    ehPiSeq: number;
    ehPrice: number;
    ehStoreName: string;
    ehLocation: string;
    ehBalance: number;
    ehCcSeq: number;
    ehCdcSeq: number;
    ehContent?: string;
    ehImgFile: string;
    ccName: string;
    cdcName?: string;
    cdcSeq?: number;
    piName: string;
    piType: number;

}

export interface PaymentData {
    piSeq: number;
    piType: number;
    piName: string;
    piMiSeq: number;
}
