import React from "react";
import { Paper, Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import OpacityIcon from "@mui/icons-material/Opacity";

function getIcon(weather) {
  if (!weather) return <CloudIcon />;
    const main = weather.weather?.[0]?.main?.toLowerCase();
      if (main === "clear") return <WbSunnyIcon color="warning" />;
        if (main === "clouds") return <CloudIcon color="primary" />;
          if (main === "rain" || main === "drizzle") return <OpacityIcon color="info" />;
            if (main === "mist" || main === "fog") return <GrainIcon color="disabled" />;
              return <CloudIcon />;
              }

              export default function WeatherPanel({ weather }) {
                if (!weather || weather.length === 0) return null;

                  return (
                      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
                            <Typography variant="h6" fontWeight={700} gutterBottom>
                                    Clima nas Principais Cidades
                                          </Typography>
                                                <List>
                                                        {weather.map((city) => (
                                                                  <ListItem key={city.id} sx={{ display: "flex", alignItems: "center" }}>
                                                                              <Box sx={{ mr: 2 }}>{getIcon(city)}</Box>
                                                                                          <ListItemText
                                                                                                        primary={`${city.name}: ${Math.round(city.main.temp)}°C`}
                                                                                                                      secondary={`${city.weather[0].description}`}
                                                                                                                                  />
                                                                                                                                              <Typography variant="caption">
                                                                                                                                                            Umidade: {city.main.humidity}%
                                                                                                                                                                        </Typography>
                                                                                                                                                                                  </ListItem>
                                                                                                                                                                                          ))}
                                                                                                                                                                                                </List>
                                                                                                                                                                                                    </Paper>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      }