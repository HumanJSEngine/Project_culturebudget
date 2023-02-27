import { BudgetData } from '../../types/Budget';
import GalleryLayout from '../gallerylist/GalleryLayout';
import GalleryListImg from '../gallerylist/GalleryListImg';

interface GalleryListProps {
  list: BudgetData[];
  openPost: (postData: BudgetData) => void;
}

const GalleryList = ({ list, openPost }: GalleryListProps) => {
  return (
    <GalleryLayout>
      {list.map((listItem) => (
        <GalleryListImg
          key={listItem.ehSeq}
          openPost={openPost}
          itemData={listItem}
        />
      ))}
    </GalleryLayout>
  );
};

export default GalleryList;
