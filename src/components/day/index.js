import React from "react";
import { DateTime } from "luxon";
import { faSquareH } from '@fortawesome/free-solid-svg-icons/faSquareH';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import Flight from "../rows/flight";
import QR from "../rows/qr";
import LOI from "../rows/loi";
import Event from "../rows/event";
import Route from "../rows/route";
import Food from "../rows/food";

import {
  Wrapper,
  Card,
  CardHeader,
  DateHeader,
  HotelWrapper,
  HotelNameWrapper
} from './styles';
import Icon from "../icon";
import IconButton from "../icon-button";


const Day = ({ timezone, date, label, itinerary, hotel, palette }) => {
  return (
    <Wrapper palette={palette}>
      <DateHeader>{date.toFormat('ccc d/MM')}</DateHeader>
      <Card>
        <CardHeader>{ label }</CardHeader>
        {
          hotel && (
            <>
              <HotelWrapper>
                <Icon icon={faSquareH}/>
                <HotelNameWrapper>
                  <p>{hotel.name_english}</p>
                  <p className="jp">{hotel.name_japanese}</p>
                  { hotel.checkin_time && (
                    <p className="tiny light">
                      Checkin time: <span className="mono">{DateTime.fromISO(hotel.checkin_time).setZone(timezone).toLocaleString(DateTime.TIME_24_SIMPLE)}</span>
                    </p>
                  )}
                </HotelNameWrapper>
                <IconButton icon={faLocationDot} url={hotel.location}/>
              </HotelWrapper>
            </>
          )
        }

        {
          itinerary && itinerary.length > 0 && itinerary.map((item, i) => {
            switch(item.type) {
              case 'flight':
                return <Flight key={i} {...item} timezone={timezone}/>;
              case 'qr':
                return <QR key={i} {...item} timezone={timezone}/>;
              case 'loi':
                return <LOI key={i} {...item} timezone={timezone}/>
              case 'event':
                return <Event key={i} {...item} timezone={timezone}/>
              case 'food':
                  return <Food key={i} {...item} timezone={timezone}/>
              case 'route':
                return <Route key={i} {...item} timezone={timezone}/>
  
            }
          })
        }
      </Card>
    </Wrapper>
  )
}

export default Day;
