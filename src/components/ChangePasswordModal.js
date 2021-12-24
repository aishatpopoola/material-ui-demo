/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  root: {
    margin: 0,
    height: 40,
    display: "flex",
    justifyContent: "space-between",
    padding: "4px 24px",
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    color: "#fff",
    width: 30,
    height: 30,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "20px 24px 8px 24px",
    borderBottom: "none",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ChangePasswordModal = ({ theme }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <Typography variant="h5">Username / Password</Typography>
      <div>
        <Typography variant="p" className="mr-10">AishatPopoola</Typography>
        <a
          href="#"
          style={{ color: theme.palette.primary.main }}
          onClick={handleClickOpen}
        >
          Change Password
        </a>
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Change Password
        </DialogTitle>
        <DialogContent dividers>
          <form className="form-section" noValidate autoComplete="off">
            <TextField
              id="current-password"
              className="mb-10"
              placeholder="Current Password"
              variant="outlined"
            />
            <TextField
              id="new-password"
              className="mb-10"
              placeholder="New Password"
              variant="outlined"
            />
            <TextField
              id="confirm-new-password"
              className="mb-10"
              placeholder="Confirm New Password"
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className="mr-10"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withTheme(ChangePasswordModal);
