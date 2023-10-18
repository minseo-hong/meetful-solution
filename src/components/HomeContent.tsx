import styled from 'styled-components';

const Wrapper = styled.div``;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 2rem;
  text-align: center;
`;

const HomeContent = () => {
  return (
    <Wrapper>
      <Heading>Hello World</Heading>
    </Wrapper>
  );
};

export default HomeContent;
