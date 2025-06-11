const WEATHER_API_KEY = `d2dbc9154fae0daaf42b27c046652291`;
const NEWS_API_KEY = `92221e88091bab959857e1a937a68fc9`;

export async function fetchWeather(cityIds) {
  const url = `https://api.openweathermap.org/data/2.5/group?id=${cityIds.join(",")}&units=metric&lang=pt_br&appid=${WEATHER_API_KEY}`;
    const res = await fetch(url);
      if (!res.ok) throw new Error("Falha ao obter dados do clima");
        return res.json();
        }

        export async function fetchNews(categories) {
          const news = {};
            for (const [key, query] of Object.entries(categories)) {
                const url = `https://newsapi.org/v2/${query}&apiKey=${NEWS_API_KEY}`;
                    const res = await fetch(url);
                        if (!res.ok) throw new Error(`Erro na API notícias: ${key}`);
                            const data = await res.json();
                                news[key] = data.articles || [];
                                  }
                                    return news;
                                    }