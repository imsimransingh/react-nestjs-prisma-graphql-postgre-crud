import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { gql, useMutation } from "@apollo/client";
import {
  ShortUrlInterface,
  ShortUrlFormProps,
} from "../../interfaces/shortUrl.interface";

const ShortUrlForm: React.FC<ShortUrlFormProps> = ({ addUrl }) => {
  const CREATE_SHORT_URL = gql`
    mutation createShortUrl($input: CreateShortUrlInput!) {
      createShortUrl(createShortUrlInput: $input) {
        id
        shortUrl
        fullUrl
      }
    }
  `;

  const [open, setOpen] = useState(false);
  const [fullUrl, setOriginalUrl] = useState("");

  const [createShortUrl, { loading, error, data }] = useMutation(
    CREATE_SHORT_URL,
    {
      onCompleted: (data) => {
        console.log("Short URL created:", data.createShortUrl);
        handleClose();  
        setOriginalUrl("");  
      },
      onError: (error) => {
        console.error("Error creating short URL:", error);
      },
    }
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log(fullUrl);
    if (fullUrl) {
      createShortUrl({
        variables: {
          input: { fullUrl },
        },
      });
      handleClose();
      setOriginalUrl(""); // Reset input field
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New URL
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New URL</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fullUrl"
            label="Full URL"
            type="url"
            fullWidth
            variant="standard"
            value={fullUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShortUrlForm;
