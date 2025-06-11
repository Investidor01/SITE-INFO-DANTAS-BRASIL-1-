import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import WeatherPanel from "./components/WeatherPanel";
import NewsSection from "./components/NewsSection";
import useTheme from "./hooks/useTheme";
import { fetchWeather, fetchNews } from "./utils/api";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function App() {
  const [theme, toggleTheme] = useTheme();
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
    const localUser = localStorage.getItem("user");
    if (localUser) setUser(JSON.parse(localUser));
    if (Notification.permission === "default") Notification.requestPermission();
    fetchAllData();
    refreshRef.current = setInterval(fetchAllData, 600000);
    return () => clearInterval(refreshRef.current);
  }, []);

  async function fetchAllData() {
    await Promise.all([handleWeather(), handleNews()]);
  }

  async function handleWeather() {
    try {
      const cityIds = ["3470127", "3405870", "3451189", "3451189", "3450276"];
      const data = await fetchWeather(cityIds);
      setWeather(data.list || []);
    } catch {
      setWeather([]);
    }
  }

  async function handleNews() {
    try {
      const categories = {
        principais: "top-headlines?country=br",
        dantas: "everything?q=dantas",
        ceara: "top-headlines?country=br&category=business",
        brasil: "top-headlines?country=br&category=general",
        internacional: "top-headlines?category=general&language=en",
      };
      const data = await fetchNews(categories);
      setNews(data);
      if (Notification.permission === "granted") {
        new Notification("Notícias atualizadas!", {
          body: "Confira as últimas notícias no INFO DANTAS BRASIL.",
          icon: "/favicon.ico",
        });
      }
    } catch {}
  }

  const login = (e) => {
    e.preventDefault();
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
          {format(new Date(), "dd 'de' MMMM 'de' yyyy, HH:mm:ss", { locale: ptBR })}
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
