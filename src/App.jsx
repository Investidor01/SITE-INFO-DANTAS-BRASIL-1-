import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import WeatherPanel from "./components/WeatherPanel";
import NewsSection from "./components/NewsSection";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const NEWS_API_KEY = `92221e88091bab959857e1a937a68fc9`
const WEATHER_API_KEY = `d2dbc9154fae0daaf42b27c046652291`

export default function App() {
  const [theme, setTheme] = useState("light");
  const [weather, setWeather] = useState([]);
  const [news, setNews] = useState({
    principais: [],
    dantas: [],
    ceara: [],
    brasil: [],
    internacional: [],
  });
  const [user, setUser] = useState(null);
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");
  const refreshRef = useRef();

  useEffect(() => {
    // Inicializa tema do localStorage ou sistema
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.toggle("dark", localTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    // Inicializa usuário do localStorage
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }

    // Solicita permissão notificações
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }

    fetchAllData();

    // Atualizar notícias a cada 10 minutos
    refreshRef.current = setInterval(fetchAllData, 600000);

    return () => {
      clearInterval(refreshRef.current);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  async function fetchAllData() {
    await Promise.all([fetchWeather(), fetchNews()]);
  }

  async function fetchWeather() {
    try {
      const cityIds = ["3470127", "3405870", "3451189", "3451189", "3450276"];
      const url = `https://api.openweathermap.org/data/2.5/group?id=${cityIds.join(
        ","
      )}&units=metric&lang=pt_br&appid=${WEATHER_API_KEY}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Falha ao obter dados do clima");
      const data = await res.json();

      if (data.list) {
        setWeather(data.list);
      } else {
        setWeather([]);
      }
    } catch (error) {
      console.error("Erro no fetchWeather:", error);
      setWeather([]);
    }
  }

  async function fetchNews() {
    try {
      const categories = {
        principais: "top-headlines?country=br",
        dantas: "everything?q=dantas",
        ceara: "top-headlines?country=br&category=business",
        brasil: "top-headlines?country=br&category=general",
        internacional: "top-headlines?category=general&language=en",
      };

      const newNews = {};
      for (const [key, query] of Object.entries(categories)) {
        const url = `https://newsapi.org/v2/${query}&apiKey=${NEWS_API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erro na API notícias: ${key}`);
        const data = await res.json();
        newNews[key] = data.articles || [];
      }
      setNews(newNews);

      if (Notification.permission === "granted") {
        new Notification("Notícias atualizadas!", {
          body: "Confira as últimas notícias no INFO DANTAS BRASIL.",
          icon: "/favicon.ico",
        });
      }
    } catch (error) {
      console.error("Erro no fetchNews:", error);
    }
  }

  const login = (e) => {
    e.preventDefault();
    // Usuário: 'adm', Senha: 'adm'
    if (u === "adm" && p === "adm") {
      const loggedUser = { name: "Administrador" };
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      setErr("");
      setU("");
      setP("");
    } else {
      setErr("Usuário ou senha incorretos");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setErr("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-16 px-4 md:px-8">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        user={user}
        logout={logout}
        u={u}
        p={p}
        setU={setU}
        setP={setP}
        login={login}
        err={err}
      />

      <main className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Info Dantas Brasil - Notícias e Clima
        </h1>
        <p className="mb-4">
          Atualizado em{" "}
          {format(new Date(), "dd 'de' MMMM 'de' yyyy, HH:mm:ss", {
            locale: ptBR,
          })}
        </p>

        <WeatherPanel weather={weather} />

        <NewsSection title="Principais Notícias" articles={news.principais} />
        <NewsSection title="Notícias Dantas" articles={news.dantas} />
        <NewsSection title="Notícias do Ceará" articles={news.ceara} />
        <NewsSection title="Notícias do Brasil" articles={news.brasil} />
        <NewsSection title="Notícias Internacionais" articles={news.internacional} />
      </main>
    </div>
  );
}
