import styled from 'styled-components';

// Components
import { default as MyIcon } from '@/components/atoms/Icon';

// Definitions
type VisibilityProps = {
  show?: boolean;
};

type Props = {
  open?: boolean;
};

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 32px auto 32px;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: '. . .';
`;

export const Icon = styled(MyIcon)`
  width: 32px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-family: ${props => props.theme.font.regular ?? 'inherit'};
  letter-spacing: 0;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  padding: 0;
  margin: 0 0 0 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  strong {
    margin-left: 0.5rem;
    font-weight: 700;
  }
`;

export const Alternator = styled.div`
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<Props>`
  border-top: 1px solid
    ${props =>
      props.open ? props.theme.palette.secondary.neutral : 'transparent'};
  overflow-y: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-height: ${props => (props.open ? 'calc(570px - 75px)' : '0px')};
  transition: all 500ms ease-in-out;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Visibility = styled.div<VisibilityProps>`
  visibility: ${props => (props.show ? 'inherit' : 'hidden')};
`;
