import { Card, Loading } from '../components/index';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { isLoading, image } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }
  return <Card />;
};

export default Landing;
