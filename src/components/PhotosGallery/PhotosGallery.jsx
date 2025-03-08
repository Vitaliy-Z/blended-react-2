import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(el => (
        <GridItem key={el.id}>
          <PhotosGalleryItem image={el} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
