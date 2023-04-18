import React from 'react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons/faPlaneDeparture';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons/faPlaneArrival';
import { DateTime } from 'luxon';

import { FlightRow, IconCollection, IconCollectionItem, Time } from './styles'

import Icon from '../icon';

const Flight = ({ label, departure, arrival }) => {
  return (
    <FlightRow>
      {label}
      <IconCollection>
        <IconCollectionItem>
          <Time>{DateTime.fromISO(departure).toLocaleString(DateTime.TIME_24_SIMPLE)}</Time>
          <Icon icon={faPlaneDeparture}/>
        </IconCollectionItem>
        <IconCollectionItem>
          <Time>{DateTime.fromISO(arrival).toLocaleString(DateTime.TIME_24_SIMPLE)}</Time>
          <Icon icon={faPlaneArrival}/>
        </IconCollectionItem>
      </IconCollection>
    </FlightRow>
  )
}

export default Flight;