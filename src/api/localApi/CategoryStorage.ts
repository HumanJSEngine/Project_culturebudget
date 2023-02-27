import { LocalCategoryData } from '../../types/Local';
import produce from 'immer';
import Storage from './Storage';

enum CATEGORY {
  CATEGORY = 'category',
  DETAILCATEGORY = 'detailCategory',
}

export default class CategoryStorage extends Storage<CATEGORY> {
  public getCategory() {
    const currentCategoryList = this.get(CATEGORY.CATEGORY);
    return JSON.parse(currentCategoryList || '[]');
  }

  public addCategory(_categoryName: string) {
    const currentCategoryList: LocalCategoryData[] = this.getCategory();
    let newCategoryList = produce(currentCategoryList, (draft) => {
      draft.push({ categoryId: Date.now(), categoryName: _categoryName });
    });
    this.set(CATEGORY.CATEGORY, JSON.stringify(newCategoryList));
  }

  public editCategory(_categoryId: number, _categoryName: string) {
    const currentCategoryList: LocalCategoryData[] = this.getCategory();
    const editIndex = currentCategoryList.findIndex(
      (category) => category.categoryId === _categoryId
    );
    let newCategoryList = produce(
      currentCategoryList,
      (draft: LocalCategoryData[]) => {
        draft[editIndex].categoryName = _categoryName;
      }
    );
    this.set(CATEGORY.CATEGORY, JSON.stringify(newCategoryList));
  }

  public removeCategory(_categoryId: number) {
    const currentCategoryList: LocalCategoryData[] = this.getCategory();
    const deleteIndex = currentCategoryList.findIndex(
      (category) => category.categoryId === _categoryId
    );
    let newCategoryList = produce(
      currentCategoryList,
      (draft: LocalCategoryData[]) => {
        draft.splice(deleteIndex, 1);
      }
    );
    this.set(CATEGORY.CATEGORY, JSON.stringify(newCategoryList));
  }

  public getDetailCategory() {
    const currentCategoryList = this.get(CATEGORY.DETAILCATEGORY);
    return JSON.parse(currentCategoryList || '[]');
  }

  public addDetailCategory() {
    const currentCategoryList = this.getDetailCategory();
    this.set(CATEGORY.DETAILCATEGORY, JSON.stringify(currentCategoryList));
  }

  public removeDetailCategory() {}
}
