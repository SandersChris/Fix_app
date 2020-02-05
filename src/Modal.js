import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

export default function FormDialog() {
  const [open, setOpen] = useState(true)
  const [email, setEmail] = useState('')

  console.log(!email.includes('@'))

  const handleClose = () => {
    if (email.length > 6 && email.includes('@') && email.includes('.')) {
        setOpen(false)
    } else {
        setOpen(true)
    }
  }

  const handleSubmit = (e) => {
    if (email.length > 6 && email.includes('@') && email.includes('.')) {
        console.log('great')
    } else {
        e.preventDefault()
    }
  }

  const onChange = event => {
      const email = event.target.value
      setEmail(email)
  }

  return ReactDOM.createPortal(
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To use our calculator, all we ask for is your email address so we can keep you informed on
            important nutrition tips.
          </DialogContentText>
          <ValidatorForm
            onSubmit={handleSubmit}
          >
          <TextValidator
            autoFocus
            value={email}
            onChange={onChange}
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