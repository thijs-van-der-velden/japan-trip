import React from "react";
import { DateTime } from "luxon";
import Flight from "../rows/flight";
import QR from "../rows/qr";
import {
  Wrapper,
  Card,
  CardHeader,
  DateHeader
} from './styles';


const Day = ({ date, label, itinerary }) => {
  return (
    <Wrapper>
      <DateHeader>{date.toFormat('ccc d/MM')}</DateHeader>
      <Card>
        <CardHeader>{ label }</CardHeader>
        {
          itinerary && itinerary.length && itinerary.map((item, i) => {
            console.log(item);
            switch(item.type) {
              case 'flight':
                return <Flight key={i} {...item}/>;
              case 'qr':
                return <QR key={i} {...item}/>;
            }
          })
        }
      </Card>
    </Wrapper>
  )
}

export default Day;
