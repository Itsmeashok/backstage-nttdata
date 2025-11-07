import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ChatBotIcon = '/icons/Icon-ChatBot.png';

const useStyles = makeStyles(() => ({
  chatButton: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#C00000',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    transition: 'transform 0.2s, box-shadow 0.2s',
    backgroundImage: 'revert',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
    '& img': {
      mixBlendMode: 'normal',
      opacity: '1 !important',
      filter: 'invert(1) !important',
    },
  },
  chatIcon: {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
    filter: 'invert(1) !important',
    opacity: '1',
  },
  dialogPaper: {
    minWidth: '400px',
    maxWidth: '600px',
    height: '600px',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  },
  dialogTitle: {
    padding: '16px 24px',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogContent: {
    flex: 1,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0,
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '16px',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  messagePlaceholder: {
    textAlign: 'center',
    color: '#666',
    padding: '24px',
    fontStyle: 'italic',
  },
  inputContainer: {
    display: 'flex',
    gap: '8px',
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '24px',
    fontSize: '14px',
    outline: 'none',
    '&:focus': {
      borderColor: '#C00000',
    },
  },
  sendButton: {
    padding: '12px 24px',
    backgroundColor: '#C00000',
    color: 'white',
    border: 'none',
    borderRadius: '24px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#A00000',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  },
  closeButton: {
    padding: '4px',
  },
}));

export const ChatButton: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className={classes.chatButton}
        onClick={handleOpen}
        aria-label="Open chat"
      >
        <img src={ChatBotIcon} alt="Chat" className={classes.chatIcon} />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className={classes.dialogTitle}>
          <Box display="flex" alignItems="center" style={{ gap: '8px' }}>
            <img src={ChatBotIcon} alt="Chat" style={{ width: '24px', height: '24px' }} />
            <span>AI Assistant</span>
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={classes.closeButton}
            size="small"
          >
            ✕
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <div className={classes.chatContainer}>
            <div className={classes.messagesContainer}>
              <div className={classes.messagePlaceholder}>
                Chat functionality will be implemented here
              </div>
            </div>
            <div className={classes.inputContainer}>
              <input
                type="text"
                placeholder="Type your message..."
                className={classes.input}
                disabled
              />
              <button className={classes.sendButton} disabled>
                Send
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

