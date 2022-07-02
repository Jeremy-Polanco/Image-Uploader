import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import { BsCheckCircleFill } from 'react-icons/bs';
const ImageContainer = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(image);
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 3000);
  };

  const { image } = useAppContext();
  return (
    <Wrapper>
      <img src={image} alt='added source' className='img' />
      <div className='link-container'>
        <span>{image}</span>
        <button
          className='copy-btn btn '
          onClick={copyToClipboard}
          disabled={copied}
        >
          {copied ? <BsCheckCircleFill></BsCheckCircleFill> : 'copy link'}
        </button>
      </div>
    </Wrapper>
  );
};
export default ImageContainer;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 338px;
  height: 100%;
  min-height: 218.9px;
  border-radius: var(--borderRadius);
  gap: 32px;
  .img {
    border-radius: var(--borderRadius);
  }
  .link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #f6f8fb;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 8px;
    span {
      padding-left: 7px;
      padding-right: 14px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .copy-btn {
      background: #2f80ed;
      border-radius: 8px;
      width: 100px;
      height: 30px;
      letter-spacing: -0.035em;
      font-size: 8px;
      line-height: 12px;
      font-family: 'Poppins';
      text-align: center;
    }
  }
`;
