
const GalleryImage = ({ imagePath,imageAlt,description }) => {
  return (
    <div>
      <img src={imagePath} alt={imageAlt} width="150px" />
      <p>{description}</p>
    </div>
  );
};

export default GalleryImage;
