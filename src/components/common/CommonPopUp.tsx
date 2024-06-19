import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type PopupProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  width?: string | number;
  height?: string | number;
  showCloseIcon?: boolean;
};

const CommonPopUp: React.FC<PopupProps> = ({
  open,
  onClose,
  title,
  content,
  width = '400px',
  height = 'auto',
  showCloseIcon = true,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="popup-dialog-title"
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle id="popup-dialog-title">
        {title}
        {showCloseIcon && (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent style={{ width, height }}>
        {typeof content === 'string' ? (
          <Typography>{content}</Typography>
        ) : (
          content
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonPopUp;
