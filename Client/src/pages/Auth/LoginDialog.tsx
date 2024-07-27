import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField, IconButton, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

type Props = {
  open: boolean;
  onClose: () => void;
};

const LoginDialog: React.FC<Props> = ({ open, onClose }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    // Thực hiện đăng nhập ở đây
    console.log('Login button clicked');
  };

  const handleLogout = () => {
    // Thực hiện đăng xuất ở đây
    console.log('Logout button clicked');
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Login</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Username" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
              style={{ marginRight: 8 }}
            />
            <Typography>Admin</Typography>
          </Box>
          {isAdmin && (
            <Typography variant="body2" color="textSecondary">
              You are logged in as Admin.
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin} color="primary" variant="contained">
          Login
        </Button>
        <Button onClick={handleLogout} color="secondary">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
