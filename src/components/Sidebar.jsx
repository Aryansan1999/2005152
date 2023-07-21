import { AccountBox, FlightClass, Group, Home, LocationOn, ModeNight, Person, Settings, Train } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'


const Sidebar = () => {

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>


      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#train">
            <ListItemIcon>
              <Train />
            </ListItemIcon>
            <ListItemText primary="Train Schedule" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Location">
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText primary="Locate my Train" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Seat">
            <ListItemIcon>
              <FlightClass />
            </ListItemIcon>
            <ListItemText primary="Seat Vacancy" />
          </ListItemButton>
        </ListItem>

      </List>


    </Box>
  )
}

export default Sidebar
