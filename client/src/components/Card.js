import styled from 'styled-components';
import { ImageContainer, DragBox } from '../components';
import { useAppContext } from '../context/appContext';
import { BsCheckCircleFill } from 'react-icons/bs';

const Card = () => {
  const { image } = useAppContext();
  if (!image) {
    return (
      <Wrapper>
        <h1 className='title'>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <DragBox />
      </Wrapper>
    );
  }
  if (image) {
    return (
      <Wrapper>
        <BsCheckCircleFill className='icon' />
        <h1 className='title'>Uploaded Successfully!</h1>
        <ImageContainer />
      </Wrapper>
    );
  }
};
const Wrapper = styled.main`
  width: 35%;
  max-width: 402px;
  min-width: 390px;
  height: calc(90vh - 4rem);
  max-height: 469px;
  min-height: 430px;
  background: var(--white);
  border-radius: var(--borderRadius);
  padding: 36px 32px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  .title {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1rem;
    letter-spacing: var(--letterSpacing);
    color: var(--black);
    font-size: 1.125rem;
    font-weight: 500;
    font-family: 'Poppins';
  }
  p {
    text-align: center;
    font-weight: 500;
    color: #828282;
    font-size: 10px;
  }
  .icon {
    color: #219653;
    font-size: 32px;
    display: block;
    margin: 0 auto;
  }
`;

export default Card;
