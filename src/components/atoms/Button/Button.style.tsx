import styled, { css } from 'styled-components';

// Definitions
export type Variant = 'text' | 'contained' | 'outlined' | 'disabled';
export type ButtonAttr = {
  disabled?: boolean;
  variant?: Variant;
  loading?: boolean;
};

const ButtonStyle = styled.button<ButtonAttr>`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.7rem;
  border-radius: 0.5rem;
  border: 0.5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${props => {
    const { variant } = props;
    if (variant === 'text') {
      return css`
        color: red;
        background-color: transparent;
        text-decoration: underline;
      `;
    }
    if (variant === 'contained') {
      return css`
        background-color: black;
        color: #f5f5f5;
      `;
    }
    if (variant === 'outlined') {
      return css`
        border: 2px solid #111;
        color: black;
        padding: 2px 10px;
        background-color: transparent;
      `;
    }
    if (variant === 'disabled') {
      return css`
        cursor: pointer;
        background-color: #f2f2f2;
        color: #818180;
      `;
    }
    return null;
  }}

  &:hover {
    cursor: pointer;
    ${props => {
      const { variant } = props;
      if (variant === 'text') {
        return css`
          background-color: transparent;
          text-decoration: none !important;
        `;
      }
      if (variant === 'contained') {
        return css`
          background-color: #333;
        `;
      }
      if (variant === 'outlined') {
        return css`
          border: 2px solid black;
          background-color: #f5f5f5;
          color: black;
        `;
      }
      return null;
    }}
  }
  &:disabled {
    cursor: pointer;
    background-color: #f2f2f2;
    color: #818180;
    ${props => {
      const { variant } = props;
      if (variant === 'outlined') {
        return css`
          background-color: #f2f2f2;
          color: #818180;
        `;
      }
      if (variant === 'text') {
        return css`
          cursor: default;
          background-color: white;
          color: #ccc;
          text-decoration: none !important;
        `;
      }
      return null;
    }}
  }
  &:focus {
    outline: 0;
  }
`;

export default ButtonStyle;
