import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';

import { LOIRow } from './styles'

import IconButton from '../icon-button';

const LOI = ({ label, label_japanese, location }) => {
  return (
    <LOIRow>
      <div>
        <p>{label}</p>
        <p className="jp">{label_japanese}</p>
      </div>
      <IconButton icon={faLocationDot} url={location} />
    </LOIRow>
  )
}

export default LOI;