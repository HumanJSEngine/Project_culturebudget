import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import colors from '../../styles/Theme';

const Loading = () => {
  return (
    <Box>
      <ClipLoader color={colors.primary} />
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
`;

export default Loading;
