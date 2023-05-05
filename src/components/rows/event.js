import React from 'react';
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons/faTicketSimple';
import { DateTime } from "luxon";

import { EventRow } from './styles'

import IconButton from '../icon-button';

const Event = ({ label, start_time, location, timezone, ticket }) => {
  return (
    <EventRow>
      <div>
        <p>{label}</p>
        <p className="darkBlue">{DateTime.fromISO(start_time).setZone(timezone).toLocaleString(DateTime.TIME_24_SIMPLE)}</p>
      </div>
      <div style={{ display: 'flex'}}>
        {ticket && <IconButton icon={faTicketSimple} url={ticket}/>}
        <IconButton icon={faLocation} url={location} />
      </div>
    </EventRow>
  )
}

export default Event;