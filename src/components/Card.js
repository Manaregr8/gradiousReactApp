// src/components/ProfileCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function getLastSeenText(lastSeen) {
  const now = new Date();
  const seen = new Date(lastSeen);
  const diffMs = now - seen;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 7) return "Last seen several days ago";
  if (diffDays >= 1) return `Last seen ${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  return `Last seen ${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
}

function ProfileCard({ profile }) {
  const { id, name, age, location, image, skills, isOnline, lastSeen } = profile;

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          Film Director, Producer
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link to={`/card/${id}`} style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="primary">
              {name}, {age}
            </Typography>
          </Link>
          <Typography variant="subtitle2" color="text.secondary">
            €19/hour
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          <i className="fa-solid fa-location-dot" style={{ marginRight: 4 }}></i>
          {location}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 1 }} flexWrap="wrap">
          {skills.map((skill, idx) => (
            <Chip key={idx} label={skill} variant="outlined" />
          ))}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button variant="outlined" size="small">View CV</Button>
          <Button variant="contained" size="small">Make Offer</Button>
        </Stack>

        <Box mt={2} display="flex" alignItems="center">
          <Box
            width={10}
            height={10}
            borderRadius="50%"
            bgcolor={isOnline ? "green" : "gray"}
            mr={1}
          />
          <Typography variant="caption">
            {isOnline ? "Online" : getLastSeenText(lastSeen)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
