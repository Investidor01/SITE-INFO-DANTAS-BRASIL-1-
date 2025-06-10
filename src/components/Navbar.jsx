import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export default function Navbar() {
  return (
      <AppBar position="sticky" color="primary" elevation={4}>
            <Toolbar>
                    <NewspaperIcon sx={{ fontSize: 32, mr: 2 }} />
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                      Info Dantas Brasil
                                              </Typography>
                                                      <Box>
                                                                <Button color="inherit">Início</Button>
                                                                          <Button color="inherit">Notícias</Button>
                                                                                    <Button color="inherit">Sobre</Button>
                                                                                              <Button color="inherit">Contato</Button>
                                                                                                      </Box>
                                                                                                            </Toolbar>
                                                                                                                </AppBar>
                                                                                                                  );
                                                                                                                  }