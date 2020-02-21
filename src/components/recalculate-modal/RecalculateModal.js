import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import SingleZoneForm from '../single-zone-form/SingleZoneForm'

import './recalulate-modal.styles.css'

export default function FormDialog({ 
    handleGender,
    gender,
    measurement,
    handleMeasurement,
    calculate,
    renderMeasurement,
    TEE,
    handleTEE,
    className
 }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='btn-position'>
      <button  className='recalculate' onClick={handleClickOpen}>
        Recalulate
      </button>
      <Dialog style={{ height: '100%' }} open={open} onClose={handleClose} >
        <DialogContent>
          <SingleZoneForm 
            className={className}
            bmrClassName='bmr-form'
            handleGender={handleGender} 
            gender={gender}
            measurement={measurement}
            handleMeasurement={handleMeasurement}
            calculate={calculate}
            renderMeasurement={renderMeasurement}
            TEE={TEE}
            handleTEE={handleTEE}
            handleClick={handleClose}
        />
        </DialogContent>
      </Dialog>
    </div>
  );
}