import React from 'react';
import { faBowlRice } from '@fortawesome/free-solid-svg-icons/faBowlRice';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons/faTicketSimple';
import { DateTime } from "luxon";

import { FoodRow } from './styles'

import IconButton from '../icon-button';

const Food = ({ label, start_time, location, timezone, ticket }) => {
  return (
    <FoodRow>
      <div>
        <p>{label}</p>
        {start_time && <p className="darkBlue">{DateTime.fromISO(start_time).setZone(timezone).toLocaleString(DateTime.TIME_24_SIMPLE)}</p>}
      </div>
      <div>
        {ticket && <IconButton icon={faTicketSimple} url={ticket}/>}
        <IconButton icon={faBowlRice} url={location} />
      </div>
    </FoodRow>
  )
}

export default Food;