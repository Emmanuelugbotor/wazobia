import Dialog from '@mui/material/Dialog';
import {DialogTitle, DialogForm, Label,DialogActions,Button} from './styled/CreateItemModa.styled'
import {useContext} from 'react';
import AppContext  from '../hooks/Context'



// type CreateItemModalProps = {
//   open: boolean;
//   setOpen: (open:boolean) => void;
// }

export default function FormDialog() {
  const {open, setOpen} = useContext(AppContext)
  const handleClose = () => {
    setOpen?.(!open);
  };

  return (
    <div>
      <Dialog open={open as boolean} onClose={handleClose}>
        <DialogTitle>Create Item</DialogTitle>
        <DialogForm>
          <div className="field">
            <Label>
                Name
            </Label>
            <input type="text" placeholder='Input item name here' />
          </div>
          <div className="field">
          <Label>
          Add Note
            </Label>
           <textarea name="" id="" cols={30} rows={10} placeholder="Type Here"></textarea>
          </div>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create Event</Button>
        </DialogActions>
        </DialogForm>
 
      </Dialog>
    </div>
  );
}