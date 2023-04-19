import React from 'react';
import { faQrcode } from '@fortawesome/free-solid-svg-icons/faQrcode'

import { QRRow } from './styles'

import IconButton from '../icon-button';

const QR = ({ label, link }) => {
  return (
    <QRRow>
      {label}
      <IconButton icon={faQrcode} url={link} />
    </QRRow>
  )
}

export default QR;