import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
            main: '#1a237e',
                },
                    secondary: {
                          main: '#f9a825',
                              },
                                  background: {
                                        default: '#f4f6f8',
                                              paper: '#fff'
                                                  },
                                                      text: {
                                                            primary: '#181c32',
                                                                  secondary: '#616161'
                                                                      },
                                                                        },
                                                                          typography: {
                                                                              fontFamily: [
                                                                                    'Inter',
                                                                                          'Roboto',
                                                                                                'Segoe UI',
                                                                                                      'Arial',
                                                                                                            'sans-serif',
                                                                                                                ].join(','),
                                                                                                                    h1: { fontWeight: 800 },
                                                                                                                        h2: { fontWeight: 700 },
                                                                                                                            h3: { fontWeight: 600 },
                                                                                                                              },
                                                                                                                                shape: {
                                                                                                                                    borderRadius: 12,
                                                                                                                                      },
                                                                                                                                      });

                                                                                                                                      export default theme;
                                                                                                                                      