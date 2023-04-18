
import styled from 'styled-components';
import Icon from '../icon';


export const CardRow = styled.div`
  background: ${({ theme }) => theme.palette.white};
  border-radius: 10px;
  display: flex;
  align-items: top;
  padding: ${({ theme }) => theme.spacing.standard };
  margin: ${({ theme }) => theme.spacing.standard};
  color: ${({ theme }) => theme.palette.text };
`



export const IconCollectionItem = styled.div`
  font-size: ${({ theme }) => theme.text.size.s };
  align-items: center;
  display: flex;

  ${Icon} {
    width: 16px;
    height: 16px;
    margin-left: ${({ theme }) => theme.spacing.s };
  }
`

export const IconCollection = styled.div`
  
  ${IconCollectionItem} {
    position: relative;
    margin-bottom: ${({theme}) => theme.spacing.s};
    &:after {
      content: "";
      position: absolute;
      bottom: -${({theme}) => theme.spacing.t};
      left: 5%;
      right: 5%;
      width: 90%;
      height: 1px;
      background-image: linear-gradient(to right, transparent, rgb(48,49,51, 0.1), transparent);
    }
  }

  ${IconCollectionItem}:last-child {
    margin-bottom: 0;
    &:after {
      content: none;
    }
  }

`

export const Time = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
`

export const CardRowIcon = styled.div`

`

export const FlightRow = styled(CardRow)`
  justify-content: space-between;
`

export const QRRow = styled(CardRow)`
  justify-content: space-between;
  align-items: center;
`