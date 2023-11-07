import React from "react";
import "./home.css"
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
 
function DrawerContact() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  const handleContact =()=>{
       document.getElementById('email').value="";
       document.getElementById('message').value="";
       Swal.fire(
        'Thanks for contacting us !',
        'Will reach to you soon with better personalized suggestions',
        'success',
    )
  }
  return (
    <React.Fragment>
      <Button onClick={openDrawer} className="jumping-button">Contact Us</Button>
     <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Contact Us
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
            Write the message and then click button.
          </Typography>
        </div>
        <form className="flex flex-col gap-6 p-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input type="email" label="Email" id="email"/>
          <Textarea rows={6} label="Message" id="message"/>
          <Button onClick={handleContact}>Send Message</Button>
        </form>
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerContact;