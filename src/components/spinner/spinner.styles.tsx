import styled from 'styled-components';

type SpinnerProps = {
  width: string;
  height: string;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Svg = styled.svg<SpinnerProps>`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spinner 0.7s linear infinite;
  margin: auto;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
