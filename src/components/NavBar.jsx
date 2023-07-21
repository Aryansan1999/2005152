import { LibraryBooks, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Badge } from '@mui/material';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor:"purple"
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));
const Icons = styled("Box")(({ theme }) => ({ display: "flex", alignItems: "center", gap: 20 }));
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>John Doe Railway Server</Typography>
        <LibraryBooks sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="search..."></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ widows: 30, height: 30 }} src="https://www.google.com/search?rlz=1C1CHBF_enIN920IN920&q=train+logo&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjVitD8xZ-AAxX7TGwGHeBlB8EQ0pQJegQICRAB#imgrc=yqlkeiwgy3JIgM" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar
