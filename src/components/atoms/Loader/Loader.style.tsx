import styled, { css } from 'styled-components';

// Definitions
export type Size = 'sm' | 'md' | 'lg';
export type LoaderAttr = {
  size?: Size;
};

const LoaderStyle = styled.button<LoaderAttr>`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #ccc;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  margin: 50px;
  ${props => {
    const { size } = props;
    if (size === 'sm') {
      return css`
        width: 50px;
        height: 50px;
      `;
    }
    if (size === 'md') {
      return css`
        width: 75px;
        height: 75px;
      `;
    }
    if (size === 'lg') {
      return css`
        width: 100px;
        height: 100px;
      `;
    }
    return null;
  }}
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerLoad = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export default LoaderStyle;
