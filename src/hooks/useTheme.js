import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
            if (localTheme) {
                  setTheme(localTheme);
                        document.documentElement.classList.toggle("dark", localTheme === "dark");
                            } else {
                                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                                        setTheme(prefersDark ? "dark" : "light");
                                              document.documentElement.classList.toggle("dark", prefersDark);
                                                  }
                                                    }, []);

                                                      const toggleTheme = () => {
                                                          const newTheme = theme === "light" ? "dark" : "light";
                                                              setTheme(newTheme);
                                                                  localStorage.setItem("theme", newTheme);
                                                                      document.documentElement.classList.toggle("dark", newTheme === "dark");
                                                                        };

                                                                          return [theme, toggleTheme];
                                                                          }