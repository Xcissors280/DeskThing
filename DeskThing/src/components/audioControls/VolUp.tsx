import React from 'react';
import { VolUp } from '../../utils/audioControlActions';
import { IconVolumeUp } from '../icons';

const VolUpComponent: React.FC = () => {  
  return (
        <button className="bg-transparent" onClick={VolUp}>
            <IconVolumeUp iconSize={75}  />
        </button>
    )
};

export default VolUpComponent;