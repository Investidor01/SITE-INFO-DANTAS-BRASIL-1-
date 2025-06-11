import React from "react";

export default function Navbar({
  theme,
  toggleTheme,
  user,
  logout,
  u,
  p,
  setU,
  setP,
  login,
  err,
}) {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow z-10">
      <div className="font-bold text-xl">Info Dantas Brasil</div>
      <div className="flex items-center gap-4">
        <button
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
          onClick={toggleTheme}
          title="Alternar tema"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        {user ? (
          <>
            <span>Olá, {user.name}</span>
            <button onClick={logout} className="text-red-600 font-bold">
              Sair
            </button>
          </>
        ) : (
          <form onSubmit={login} className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Usuário"
              value={u}
              onChange={e => setU(e.target.value)}
              className="px-2 py-1 rounded border"
            />
            <input
              type="password"
              placeholder="Senha"
              value={p}
              onChange={e => setP(e.target.value)}
              className="px-2 py-1 rounded border"
            />
            <button type="submit" className="font-semibold text-blue-600">
              Entrar
            </button>
            {err && <span className="text-red-500 text-sm">{err}</span>}
          </form>
        )}
      </div>
    </nav>
  );
            }
