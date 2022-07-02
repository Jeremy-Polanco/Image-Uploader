import { Card, Loading } from '../components/index';
import { useAppContext } from '../context/appContext';

const Image = () => {
  const { isLoading, image } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }
  return <Card image={image} />;
};
export default Image;
