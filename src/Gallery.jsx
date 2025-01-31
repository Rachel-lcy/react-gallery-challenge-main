import GalleryImage from "./GalleryImage";

const Gallery = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          imagePath={image.path}
          imageAlt={image.alt}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
