export interface LocalBudgetData {
  id: number;
  title: string;
  location: string;
  date: string;
  categoryId: Pick<LocalCategoryData, 'categoryId'>;
  categoryName: Pick<LocalCategoryData, 'categoryName'>;
  detailCategoryId: Pick<LocalDetailCategoryListData, 'detailCategoryId'>;
  detailCategoryName: Pick<LocalDetailCategoryListData, 'detailCategoryName'>;
  contents?: string;
  paymentId: Pick<LocalPaymentData, 'paymentId'>;
  paymentName: Pick<LocalPaymentData, 'paymentName'>;
  payPlace: string;
  payPrice: number;
}

export interface LocalCategoryData {
  categoryId: number;
  categoryName: string;
}

export interface LocalDetailCategoryData {
  categoryId: Pick<LocalCategoryData, 'categoryId'>;
  categoryName: Pick<LocalCategoryData, 'categoryName'>;
  detailCategoryList: LocalDetailCategoryListData[];
}

interface LocalDetailCategoryListData {
  detailCategoryId: number;
  detailCategoryName: string;
}

export interface LocalPaymentData {
  paymentId: number;
  paymentName: string;
  balance?: number;
}
