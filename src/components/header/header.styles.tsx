import { colors, shadow } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.header`
  color: #0278ab;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray3};
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  max-width: 1440px;
  margin: auto;
`;

export const FlagContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${colors.gray3};
  box-shadow: ${shadow.first};
`;
