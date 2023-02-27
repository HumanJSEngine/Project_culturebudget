export interface LocalBudgetData {
  id: number;
  title: string;
  location: string;
  date: string;
  categoryId: Pick<LocalCategoryData, 'categoryId'>;
  categoryName: Pick<LocalCategoryData, 'categoryName'>;
  detailCategoryId: Pick<LocalDetailCategoryData, 'detailCategoryId'>;
  detailCategoryName: Pick<LocalDetailCategoryData, 'detailCategoryName'>;
  contents?: string;
  paymentId: Pick<LocalPaymentData, 'paymentId'>;
  paymentName: Pick<LocalPaymentData, 'paymentName'>;
  payPlace: string;
  payPrice: number;
}

export interface LocalCategoryData {
  categoryId: number;
  categoryName: string;
  detailCategory?: LocalDetailCategoryData[];
}

interface LocalDetailCategoryData {
  categoryId: Pick<LocalCategoryData, 'categoryId'>;
  detailCategoryId: number;
  detailCategoryName: string;
}

export interface LocalPaymentData {
  paymentId: number;
  paymentName: string;
  balance?: number;
}
