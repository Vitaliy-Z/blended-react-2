import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';

import { getPhotos } from '../apiService/photos';
import Text from '../components/Text/Text';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisiblLoadMore, setIsVisiblLoadMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (!query) {
      setIsLoading(false);
      return;
    }

    try {
      getPhotos(query, page).then(data => {
        setImages(prev => [...prev, ...data.photos]);
        data.total_results > page * 15
          ? setIsVisiblLoadMore(true)
          : setIsVisiblLoadMore(false);
      });
    } catch (error) {
      console.log('error:', error);
      setError(error);
    }

    setIsLoading(false);
  }, [query, page]);

  const handleSubmit = async searchValue => {
    setImages([]);
    setQuery(searchValue);
  };

  const handleLoadMore = async () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit} />
      {images.length > 0 && <PhotosGallery images={images} />}
      {isVisiblLoadMore && <Button onClick={handleLoadMore}>Load More</Button>}
      {error && <Text>Error: {error.message}</Text>}
    </>
  );
};

export default Photos;
