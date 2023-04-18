import React from 'react';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import { FlightRow, IconCollection, IconCollectionItem, Time } from './styles'

import Icon from '../icon';

const Flight = ({ label, departure, arrival }) => {
  return (
    <FlightRow>
      {label}
      <IconCollection>
        <IconCollectionItem>
          <Time>{moment(departure).format('HH:mm')}</Time>
          <Icon icon={faPlaneDeparture}/>
        </IconCollectionItem>
        <IconCollectionItem>
          <Time>{moment(arrival).format('HH:mm')}</Time>
          <Icon icon={faPlaneArrival}/>
        </IconCollectionItem>
      </IconCollection>
    </FlightRow>
  )
}

export default Flight;