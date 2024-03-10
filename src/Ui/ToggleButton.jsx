import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ToggleButton(props) {
  return (
    <div>
      <Checkbox onClick={() => props.toggleTask(props.id)} {...label} defaultChecked={props.status} color="success" />
    </div>
  );
}