import { colors } from '@/styles';
import styled from 'styled-components';

export const Button = styled.button`
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.primary};
  padding: 4px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(2, 120, 171, 0.05);
    border-color: #035c84;
    color: #035c84;
  }
`;
