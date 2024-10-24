import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import useApiTokenStore from "@/hooks/use-api-token-store";
import Button from "../button";

const TokenSettingsDialog = () => {
  const [open, setOpen] = useState(false);
  const { setToken } = useApiTokenStore();

  return (
    <>
      <IconButton
        id="settings-button"
        aria-label="Settings"
        color="default"
        onClick={() => setOpen(true)}
      >
        <SettingsRoundedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const token = formJson.token as string;

            setToken(token);
            setOpen(false);
          },
        }}
      >
        <DialogTitle>Add a Fine-grained token</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a token to increase the API limit rate.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="token"
            placeholder="token"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TokenSettingsDialog;
