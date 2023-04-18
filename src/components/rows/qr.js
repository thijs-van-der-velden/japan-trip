import React from 'react';
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import { QRRow } from './styles'

import Icon from '../icon';

const QR = ({ label, departure, arrival }) => {
  return (
    <QRRow>
      {label}
      <Icon icon={faQrcode}/>
    </QRRow>
  )
}

export default QR;