import styled from 'styled-components';
import Icon from '../icon';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const DateHeader = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.text.size.xl };
  color: ${({ theme }) => theme.palette.white };
  background: ${({ theme }) => theme.palette.red};
  border-radius: 10px;
  margin: 0 60px 12px;
  margin-top: ${({ theme }) => theme.spacing.l };
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`
  
export const Card = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.palette.offWhite };
  border-radius: 20px;
  flex-grow: 1;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`

export const CardHeader = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.text.size.l };
  padding: ${({ theme }) => theme.spacing.s };
  color: ${({ theme }) => theme.palette.text };
`
