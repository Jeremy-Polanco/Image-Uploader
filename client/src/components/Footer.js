import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      created by <a href='https://github.com/Jeremy-Polanco'>Jeremy-Polanco</a>{' '}
      - devChallenges.io
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 17px;
  color: #828282;
  text-align: center;
  width: 100%;
  max-width: none;
  padding: 0;
  margin: 0;
  margin-top: 6.25em;
  a {
    font-weight: 700;
    text-decoration: none;
    color: inherit;
  }
`;
export default Footer;
