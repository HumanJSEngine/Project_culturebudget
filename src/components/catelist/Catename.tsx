import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const Catename = () => {
  return <Catenames>티켓</Catenames>;
};

const Catenames = styled.div`
  font: ${fonts.score15Regular};
  color: ${colors.gray900};
`;
export default Catename;
