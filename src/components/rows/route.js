import React from 'react';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons/faTicketSimple';
import { DateTime } from "luxon";

import { RouteRow, IconCollection, IconCollectionItem, Time  } from './styles'


import Icon from '../icon';
import IconButton from '../icon-button';

const Route = ({ label, label_japanese, departure, arrival, route, timezone, ticket }) => {
  const departureString = DateTime.fromISO(departure).setZone(timezone).toLocaleString(DateTime.TIME_24_SIMPLE);
  const arrivalString = DateTime.fromISO(arrival).setZone(timezone).toLocaleString(DateTime.TIME_24_SIMPLE);

  return (
    <RouteRow>
      <IconCollection>
        <IconCollectionItem>
          <Time>{departureString}</Time>
        </IconCollectionItem>
        <IconCollectionItem>
          <Time>{arrivalString}</Time>
        </IconCollectionItem>
      </IconCollection>
      <div style={{ flexGrow: 1 }}>
        <p>{label}</p>
        <p>{label_japanese}</p>
      </div>
      {ticket && <IconButton icon={faTicketSimple} url={ticket}/>}
      <IconButton icon={faRoute} url={route} />
    </RouteRow>
  )
}

export default Route;