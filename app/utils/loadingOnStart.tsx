import styled from 'styled-components';

import { Spinner } from '../components/spinner';
import { zIndex } from '../styles';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${zIndex.loadingOnStart};
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.5s;
`;

export const LoadingOnStart = () => {
  return (
    <Wrapper>
      <Container>
        <Spinner />
      </Container>
    </Wrapper>
  );
};

export default LoadingOnStart;
