import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';

export default function HomePage() {
  return (
    <Box sx={{ maxWidth: 900, marginX: 'auto' }}>
      <Typography variant="body1" className="pb-4">
        Several projects of HTML blocks{' '}
      </Typography>
      <Typography variant="h5">Features:</Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>The projects are commercial.</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>The customer is Bembi LLC.</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>
            The projects are made in the form of separate HTML blocks. The
            blocks were used as parts of advertising articles on the bembi.ua
            website.
          </ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>
            Some of the pictures are white in color. The bembi.ua website uses
            corporate colors as a background. Therefore, for better contrast, an
            additional background was used here.
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="h5">Customer requirements:</Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>CSS - use only inline styles.</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>Adaptability - minimal.</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>Semantic layout - not required.</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>
            Compliance with the design provided by the customer.
          </ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CircleIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText>
            According to the design, some information blocks for mobile versions
            should be hidden (Winter 22/23).
          </ListItemText>
        </ListItem>
      </List>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 600, fontStyle: 'italic' }}
      >
        Note: The Winter 22/23 project was carried out as part of a team.
      </Typography>
    </Box>
  );
}
