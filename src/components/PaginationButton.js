import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 26px;
  margin: auto 30px;
`;

const PaginationButton = (props) => {
  if (props.url) {
    return (
      <StyledButton onClick={props.callback}>{props.text}</StyledButton>
    );
  } else {
    return null;
  }
};

export default PaginationButton; 
