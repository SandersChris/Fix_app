import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

export default function FormDialog({ email, handleSubmit, handleChange }) {
  const [open, setOpen] = useState(true)

  const emailValidated = email.length > 6 && email.includes('@') && email.includes('.')

  const handleClose = () => {
    if (emailValidated) {
        setOpen(false)
    } else {
        setOpen(true)
    }
  }

  return ReactDOM.createPortal(
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Food Blocks</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thanks for using our food blocks calculator! What email address would you like us to
            send your results?
          </DialogContentText>
          <ValidatorForm
            onSubmit={handleSubmit}
          >
          <TextValidator
            autoFocus
            value={email}
            onChange={handleChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'invalid email']}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />        
            <DialogActions>
                <Button type="submit" onClick={handleClose} color="primary">
                Submit
                </Button>
            </DialogActions>
        </ValidatorForm>    
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>,
    document.querySelector('#modal')
  )
}