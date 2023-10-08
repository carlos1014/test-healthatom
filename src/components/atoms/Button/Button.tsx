import { CSSProperties, ReactNode } from 'react';

// Components
import Animation from '@/components/atoms/Animation';

// Styled component
import ButtonStyle, { ButtonAttr } from './Button.style';

// Definitions
export type ButtonType = 'button' | 'reset' | 'submit';

export interface Props extends ButtonAttr {
  type: ButtonType;
  onClick: () => void;
  className?: string;
  loading?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

// Default values
const Defaults = {
  variant: 'contained',
  loading: false,
  children: undefined,
};

const Button = (props: Props) => {
  // Props
  const {
    onClick,
    type,
    variant,
    className,
    style,
    disabled,
    loading,
    children,
  } = props;

  return (
    <ButtonStyle
      type={type}
      className={className}
      variant={variant}
      onClick={onClick}
      style={style}
      disabled={disabled}>
      {!loading && children}
      {loading && (
        <Animation name="gray-spinner" style={{ width: '24px' }} loop />
      )}
    </ButtonStyle>
  );
};

Button.defaultProps = Defaults;

export default Button;
