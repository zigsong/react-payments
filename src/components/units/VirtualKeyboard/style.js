import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${PALETTE.COLOR_SELECTOR_WHITE};

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);

  border-color: transparent;
  width: 100%;
  height: 227px;
`;

const KeyPad = styled.button`
  font-size: 1.25rem;
  border: 1px solid ${PALETTE.DEFAULT_CYAN};
  border-radius: 4px;
  background-color: transparent;

  &:nth-child(13) {
    grid-column: 1 / span 2;
  }
  &:nth-child(14) {
    grid-column: 3 / span 2;
  }

  &:active {
    background: ${PALETTE.DEFAULT_CYAN};
  }
`;

export { Root, KeyPad };