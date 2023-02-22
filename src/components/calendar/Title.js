import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

const Title = ({ title }) => {
  return <Titlename>{title}</Titlename>;
};

const Titlename = styled.p`
  font: ${fonts.score15Regular};
  color: ${colors.gray900};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
export default Title;
