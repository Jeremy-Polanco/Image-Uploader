import styled from 'styled-components';

const Loading = ({ center }) => {
  return (
    <Wrapper>
      <div className='loading-container'>
        <h2>Uploading...</h2>
        <div
          className={center ? 'loading-bar loading-center' : 'loading-bar'}
        ></div>
        <div className='loading-bar-line'></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  .loading-container {
    border-radius: var(--borderRadius);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding-top: 36px;
    padding-left: 32px;
  }
  .loading-bar {
    width: 340px;
    height: 6px;
    background: #e0e0e0;
    position: absolute;
    border-radius: 8px;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .loading-bar-line {
    width: 101px;
    height: 6px;
    background: #2f80ed;
    border-radius: 8px;
    position: absolute;
    top: 68%;
    right: 370px;
    -webkit-animation-name: 'slide';
    -webkit-animation-duration: 2.5s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }
  @keyframes slide {
    0% {
      -webkit-transform: translateX(101px);
    }
    25% {
      -webkit-transform: translateX(220px);
      width: 125px;
    }
    50% {
      -webkit-transform: translateX(340px);
      width: 100px;
    }
    75% {
      -webkit-transform: translateX(220px);
      width: 125px;
    }
    100% {
      -webkit-transform: translateX(101px);
    }
  }
  h2 {
    color: #4f4f4f;
    font-size: 18px;
  }
`;

export default Loading;
