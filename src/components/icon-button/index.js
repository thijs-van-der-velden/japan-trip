import React from 'react';
import styled from 'styled-components';

import Icon from '../icon';

const StyledButton = styled.a`
  padding: ${({ theme }) => theme.spacing.s};

  ${Icon} {
    color: ${({ theme }) => theme.palette.blue };
    height: 24px;
  }
`

const IconButton = ({ icon, url }) => {
  return (
    <StyledButton href={url} target="_blank">
      <Icon icon={icon}/>
    </StyledButton>
  )
}

export default IconButton;