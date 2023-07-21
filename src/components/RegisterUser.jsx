import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Register yourself
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kindly Register yourself to see the trains Schedule on John Doe Railway Server
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="University Roll no."
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}