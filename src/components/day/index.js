import React from "react";
import { DateTime } from "luxon";
import { faSquareH } from '@fortawesome/free-solid-svg-icons/faSquareH';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import Flight from "../rows/flight";
import QR from "../rows/qr";
import LOI from "../rows/loi";

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


const Day = ({ timezone, date, label, itinerary, hotel }) => {
  return (
    <Wrapper>
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
                <IconButton icon={faLocationDot} url={`https://www.google.com/maps/place/Mitsui+Garden+Hotel+Jingu-Gaien+Tokyo+Premier/@35.6800183,139.7130562,17z/data=!3m1!4b1!4m9!3m8!1s0x60188d04b1b3464b:0x54e0dec3a20eb827!5m2!4m1!1i2!8m2!3d35.680014!4d139.7156311!16s%2Fg%2F11h113f177`}/>
              </HotelWrapper>
            </>
          )
        }

        {
          itinerary && itinerary.length && itinerary.map((item, i) => {
            console.log(item);
            switch(item.type) {
              case 'flight':
                return <Flight key={i} {...item}/>;
              case 'qr':
                return <QR key={i} {...item}/>;
              case 'loi':
                return <LOI key={i} {...item}/>
            }
          })
        }
      </Card>
    </Wrapper>
  )
}

export default Day;
