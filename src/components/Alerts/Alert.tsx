import * as React from 'react';
import styled, { css } from 'styled-components';
import colorPallet from '../../themes/pallet';

interface IProps {
  children: React.ReactNode;
  color: 'info' | 'success' | 'error' | 'caution';
  className?: string;
}

const Alert: React.FC<IProps> = ({ children, color, className }) => (
  <Container className={`${color} ${className}`}>{children}</Container>
);

const Container = styled.div`
  ${() =>
    css`
      position: relative;
      display: block;
      padding: 16px;
      border-radius: 3px;
      font-weight: 300;
      box-sizing: border-box;
      a {
        font-weight: 600;
      }
      &.info {
        background: ${colorPallet.infoLight};
        color: ${colorPallet.info};
        a {
          color: ${colorPallet.info};
        }
      }
      &.success {
        background: ${colorPallet.successLight};
        color: ${colorPallet.success};
        a {
          color: ${colorPallet.success};
        }
      }
      &.error {
        background: ${colorPallet.errorLight};
        color: ${colorPallet.error};
        a {
          color: ${colorPallet.error};
        }
      }
      &.caution {
        background: ${colorPallet.cautionLight};
        color: ${colorPallet.caution};
        a {
          color: ${colorPallet.caution};
        }
      }
    `}
`;

export default Alert;
