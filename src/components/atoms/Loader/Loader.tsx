import { CSSProperties } from 'react';

// Styled component
import LoaderStyle, { LoaderAttr, Size } from './Loader.style';

// Definitions
export interface Props extends LoaderAttr {
  size: Size;
  className?: string;
  style?: CSSProperties;
}

// Default values
const Defaults = {
  size: 'md',
};

const Loader = (props: Props) => {
  // Props
  const { size, className, style } = props;

  return <LoaderStyle className={className} size={size} style={style} />;
};

Loader.defaultProps = Defaults;

export default Loader;
