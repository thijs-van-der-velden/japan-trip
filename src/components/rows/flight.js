import React from 'react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons/faPlaneDeparture';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons/faPlaneArrival';
import { DateTime } from 'luxon';

import { FlightRow, IconCollection, IconCollectionItem, Time } from './styles'

import Icon from '../icon';

const Flight = ({ label, departure, departure_timezone, arrival, arrival_timezone }) => {
  return (
    <FlightRow>
      {label}
      <IconCollection>
        <IconCollectionItem>
          <Time>{DateTime.fromISO(departure).setZone(departure_timezone).toLocaleString(DateTime.TIME_24_SIMPLE)}</Time>
          <Icon icon={faPlaneDeparture}/>
        </IconCollectionItem>
        <IconCollectionItem>
          <Time>{DateTime.fromISO(arrival).setZone(arrival_timezone).toLocaleString(DateTime.TIME_24_SIMPLE)}</Time>
          <Icon icon={faPlaneArrival}/>
        </IconCollectionItem>
      </IconCollection>
    </FlightRow>
  )
}

export default Flight;