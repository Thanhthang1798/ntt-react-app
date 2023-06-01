import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const games = ["Game1", "Game2", "Game3", "Game4", "Game5", "Game6"];

export default function GamePage() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="mailbox folders">
        <List>
          {games.map((game, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemText children={<Link to="1"> {game} </Link>} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
