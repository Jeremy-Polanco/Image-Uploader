import React, { useState, useRef } from 'react';
import img from '../assets/image.svg';
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const DragBox = () => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  let navigate = useNavigate();

  const { handleFile } = useAppContext();

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const handleChange = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    if (e.target.files && e.target.files[0]) {
      handleFile(imageFile);
      navigate('/image');
    }
  };

  const handleDrop = async function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
      navigate('/image');
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <Wrapper>
        <form
          className='image-form'
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className='image-input'
            type='file'
            id='image'
            accept='image/*'
            ref={inputRef}
            onChange={handleChange}
          />
          <div className='img-container'>
            <img className='img' src={img} alt='' />
          </div>
          <div>
            <p className='drag-box-text'>Drag & Drop your image here</p>
          </div>
          {dragActive && (
            <div
              className='drag-file-box'
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </form>
      </Wrapper>
      <p>Or</p>
      <button className='btn' onClick={onButtonClick}>
        Choose a file
      </button>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 338px;
  height: 60%;
  max-height: 218.9px;
  min-height: 200px;
  border-radius: var(--borderRadius);
  border: 1px dashed #97bef4;
  background: #f6f8fb;
  .image-input {
    display: none;
  }
  .image-form {
    position: relative;
  }
  .drag-file-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .img-container {
    max-width: 114.13px;
    max-height: 88.24px;
    margin: 0 auto;
    margin-bottom: 37px;
  }
  .img {
    margin-top: 2rem;
  }
  .drag-box-text {
    font-size: 12px;
    color: #bdbdbd;
    margin-bottom: 39px;
  }
`;

export default DragBox;
