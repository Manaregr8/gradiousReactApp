// src/components/CardDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import profiles from "../data/profiles.json";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Avatar,
  Stack,
  Box,
} from "@mui/material";

function CardDetail() {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) return <Typography variant="h6">Profile not found.</Typography>;

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ maxWidth: 500, width: "100%" }}>
        <CardMedia
          component="img"
          height="300"
          image={profile.image}
          alt={profile.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {profile.name}, {profile.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {profile.location}
          </Typography>

          <Box mt={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Skills
            </Typography>
            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
              {profile.skills.map((skill, index) => (
                <Chip key={index} label={skill} variant="outlined" />
              ))}
            </Stack>
          </Box>

          <Box mt={3} display="flex" alignItems="center">
            <Box
              width={10}
              height={10}
              borderRadius="50%"
              bgcolor={profile.isOnline ? "green" : "gray"}
              mr={1}
            />
            <Typography variant="body2">
              {profile.isOnline ? "Online" : `Last seen: ${new Date(profile.lastSeen).toLocaleString()}`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardDetail;
