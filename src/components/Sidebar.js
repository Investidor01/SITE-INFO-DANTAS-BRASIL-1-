import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const highlights = [
  "Bolsa de valores bate recorde histórico",
    "Nova legislação de proteção de dados em vigor",
      "Entenda as mudanças no imposto de renda",
        "Como investir melhor em tempos de volatilidade"
        ];

        export default function Sidebar() {
          return (
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                            Rápidas
                                  </Typography>
                                        <List>
                                                {highlights.map((item, idx) => (
                                                          <ListItem key={idx} disablePadding>
                                                                      <ListItemText primary={item} />
                                                                                </ListItem>
                                                                                        ))}
                                                                                              </List>
                                                                                                  </Paper>
                                                                                                    );
                                                                                                    }