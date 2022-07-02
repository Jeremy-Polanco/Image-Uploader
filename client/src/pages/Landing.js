import { Card, Loading } from '../components/index';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { isLoading } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }
  return <Card />;
};

export default Landing;
