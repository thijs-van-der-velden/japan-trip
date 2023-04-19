import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.brown};
  height: 32px;
`
export default Icon;
