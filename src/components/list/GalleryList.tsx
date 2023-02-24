import { BudgetData } from '../../types/Budget';
import GalleryLayout from '../gallerylist/GalleryLayout';
import GalleryListImg from '../gallerylist/GalleryListImg';

interface GalleryListProps {
    list: BudgetData[];
}

const GalleryList = ({ list }: GalleryListProps) => {
    const { VITE_IMAGE_URL } = import.meta.env;
    return (
        <GalleryLayout>
            {list.map(({ ehSeq, ehImgFile, ehPrice }) => (
                <GalleryListImg
                    key={ehSeq}
                    src={`${VITE_IMAGE_URL}/${ehImgFile}`}
                    price={ehPrice}
                />
            ))}
        </GalleryLayout>
    );
};

export default GalleryList;
