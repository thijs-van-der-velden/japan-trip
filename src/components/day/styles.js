import styled from 'styled-components'
import { divider } from '../../theme';

export const DateHeader = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.text.size.xl };
  color: ${({ theme }) => theme.palette.white };
  border-radius: 10px;
  margin: 0 60px 12px;
  margin-top: ${({ theme }) => theme.spacing.l };
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`
  

export const CardHeader = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.text.size.l };

  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${divider}
`

export const Card = styled.div`
  overflow: hidden;
  border-radius: 20px;
  flex-grow: 1;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  padding: ${({ theme }) => theme.spacing.standard};
`



export const HotelWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.standard };
`

export const HotelNameWrapper = styled.div`

`


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${Card} {
    background: ${({ theme, palette }) => theme.palette.secondaryGradient[palette]};
  }

  ${DateHeader} {
    background: ${({ theme, palette }) => theme.palette.primaryGradient[palette]};
  }
`
