
import styled from 'styled-components';
import Icon from '../icon';
import { divider } from '../../theme';

export const CardRow = styled.div`
  background: ${({ theme }) => theme.palette.white};
  border-radius: 10px;
  display: flex;
  align-items: top;
  padding: ${({ theme }) => theme.spacing.t } ${({ theme }) => theme.spacing.standard };
  margin-bottom: ${({ theme }) => theme.spacing.t};
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
  margin: 0 ${({ theme }) => theme.spacing.s};
  ${IconCollectionItem} {
    margin-bottom: ${({theme}) => theme.spacing.s}; 

    ${divider}
  }

  ${IconCollectionItem}:last-child {
    margin-bottom: 0;
    &:after {
      content: none;
    }
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
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

export const LOIRow = styled(CardRow)`
  justify-content: space-between;
  align-items: center;
`

export const EventRow = styled(CardRow)`
  justify-content: space-between;
  align-items: center;
`

export const FoodRow = styled(CardRow)`
  justify-content: space-between;
  align-items: center;
`

export const RouteRow = styled(CardRow)`
  justify-content: space-between;
  align-items: center;
`