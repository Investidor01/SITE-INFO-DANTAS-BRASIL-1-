import React from "react";
import { Paper, Typography } from "@mui/material";

export default function Banner() {
  return (
      <Paper
            elevation={4}
                  sx={{
                          background: "linear-gradient(90deg, #1a237e 70%, #f9a825 100%)",
                                  color: "#fff",
                                          borderRadius: 4,
                                                  p: 4,
                                                          mb: 4,
                                                                }}
                                                                    >
                                                                          <Typography variant="h3" fontWeight={700} gutterBottom>
                                                                                  Notícias Atualizadas, de várias Fontes!
                                                                                        </Typography>
                                                                                              <Typography variant="h6" fontWeight={400}>
                                                                                                      Seu portal de notícias responsável, sempre com matérias relevantes do Brasil e do mundo.
                                                                                                            </Typography>
                                                                                                                </Paper>
                                                                                                                  );
                                                                                                                  }