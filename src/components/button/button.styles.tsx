import { colors, shadow } from '@/styles';
import styled from 'styled-components';

export const Button = styled.button`
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.primary};
  padding: 4px 16px;
  border-radius: 12px;
`;
