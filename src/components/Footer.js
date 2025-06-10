import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
      <Box
            sx={{
                    bgcolor: "primary.main",
                            color: "#fff",
                                    textAlign: "center",
                                            py: 2,
                                                    mt: "auto",
                                                            borderRadius: 2,
                                                                  }}
                                                                        component="footer"
                                                                            >
                                                                                  <Typography variant="body2">
                                                                                          © {new Date().getFullYear()} Info Dantas Brasil — Notícias com responsabilidade
                                                                                                </Typography>
                                                                                                    </Box>
                                                                                                      );
                                                                                                      }