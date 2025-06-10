import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea, Chip, Stack } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function NewsCard({ title, image, summary, url, source, publishedAt }) {
  return (
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardActionArea href={url} target="_blank">
                    {image && (
                              <CardMedia
                                          component="img"
                                                      height="160"
                                                                  image={image}
                                                                              alt={title}
                                                                                        />
                                                                                                )}
                                                                                                        <CardContent>
                                                                                                                  <Typography gutterBottom variant="h6" component="h2" fontWeight={600}>
                                                                                                                              {title}
                                                                                                                                        </Typography>
                                                                                                                                                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                                                                                                                              {summary}
                                                                                                                                                                        </Typography>
                                                                                                                                                                                  <Stack direction="row" spacing={1} alignItems="center">
                                                                                                                                                                                              <Chip size="small" label={source} color="secondary" />
                                                                                                                                                                                                          <Chip
                                                                                                                                                                                                                        size="small"
                                                                                                                                                                                                                                      icon={<CalendarMonthIcon fontSize="small" />}
                                                                                                                                                                                                                                                    label={publishedAt ? new Date(publishedAt).toLocaleDateString("pt-BR") : ""}
                                                                                                                                                                                                                                                                  variant="outlined"
                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                        </Stack>
                                                                                                                                                                                                                                                                                                </CardContent>
                                                                                                                                                                                                                                                                                                      </CardActionArea>
                                                                                                                                                                                                                                                                                                          </Card>
                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                            }