import React from 'react';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot';

import { LOIRow } from './styles'

import IconButton from '../icon-button';

const LOI = ({ label, label_japanese, location }) => {
  return (
    <LOIRow>
      <div>
        <p>{label}</p>
        <p className="jp">{label_japanese}</p>
      </div>
      <IconButton icon={faMapLocationDot} url={location} />
    </LOIRow>
  )
}

export default LOI;