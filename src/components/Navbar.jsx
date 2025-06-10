import React from "react";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";

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
    <nav
      className="fixed top-0 w-full bg-blue-900 dark:bg-gray-900 p-3 flex justify-between items-center z-10"
      role="navigation"
      aria-label="Principal"
    >
      <div className="flex items-center">
        <Logo />
        <span className="text-xl font-bold text-white">INFO DANTAS BRASIL</span>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
          className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
          type="button"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        {user ? (
          <>
            <div className="flex items-center space-x-2 text-white" aria-label="Usuário autenticado">
              <FaUserCircle aria-hidden="true" />
              <span>{user.name}</span>
            </div>
            <button
              onClick={logout}
              className="bg-red-600 px-2 py-1 rounded text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              type="button"
            >
              Sair
            </button>
          </>
        ) : (
          <form onSubmit={login} className="flex space-x-2" aria-label="Formulário de login">
            <label htmlFor="username" className="sr-only">
              Usuário
            </label>
            <input
              id="username"
              type="text"
              placeholder="Usuário"
              className="px-2 py-1 rounded text-black"
              value={u}
              onChange={(e) => setU(e.target.value)}
              required
              aria-required="true"
            />
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Senha"
              className="px-2 py-1 rounded text-black"
              value={p}
              onChange={(e) => setP(e.target.value)}
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="bg-green-600 px-2 py-1 rounded text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Entrar
            </button>
          </form>
        )}
        {err && (
          <p
            className="text-red-500 ml-4"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            {err}
          </p>
        )}
      </div>
    </nav>
  );
}