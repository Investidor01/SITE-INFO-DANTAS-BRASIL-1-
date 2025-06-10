import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Alert } from "@mui/material";
import NewsCard from "./NewsCard";
import axios from "axios";

// Substitua pela sua chave da NewsAPI
const NEWS_API_KEY = `92221e88091bab959857e1a937a68fc9`
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=br&category=general&apiKey=${NEWS_API_KEY}`;

export default function NewsList() {
  const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
      const [error, setError] = useState("");

        useEffect(() => {
            axios
                  .get(NEWS_API_URL)
                        .then(res => {
                                setNews(res.data.articles);
                                        setLoading(false);
                                              })
                                                    .catch(err => {
                                                            setError("Não foi possível carregar as notícias.");
                                                                    setLoading(false);
                                                                          });
                                                                            }, []);

                                                                              if (loading) return <CircularProgress />;
                                                                                if (error) return <Alert severity="error">{error}</Alert>;

                                                                                  return (
                                                                                      <Grid container spacing={3}>
                                                                                            {news.map((article, idx) => (
                                                                                                    <Grid item xs={12} sm={6} key={idx}>
                                                                                                              <NewsCard
                                                                                                                          title={article.title}
                                                                                                                                      image={article.urlToImage}
                                                                                                                                                  summary={article.description}
                                                                                                                                                              url={article.url}
                                                                                                                                                                          source={article.source.name}
                                                                                                                                                                                      publishedAt={article.publishedAt}
                                                                                                                                                                                                />
                                                                                                                                                                                                        </Grid>
                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                  </Grid>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    }