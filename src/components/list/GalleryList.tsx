import GalleryLayout from '../gallerylist/GalleryLayout';
import GalleryListImg from '../gallerylist/GalleryListImg';

interface GalleryListProps {
  list: [];
}

const GalleryList = ({ list }: GalleryListProps) => {
  const IMAGE_PATH = process.env.VITE_IMAGE_URL;
  return (
    <GalleryLayout>
      {list.map(({ ehSeq, ehImgFile, ehPrice }) => (
        <GalleryListImg
          key={ehSeq}
          src={`${IMAGE_PATH}/${ehImgFile}`}
          price={ehPrice}
        />
      ))}
    </GalleryLayout>
  );
};

export default GalleryList;
