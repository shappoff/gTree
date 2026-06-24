import { NavLink, Outlet } from 'react-router-dom';
import { demos } from '../data/demos';

export default function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>🌳 Genealogy Showcase</h1>
        <p className="subtitle">Сравнение библиотек визуализации генеалогических деревьев</p>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end>
                Обзор
              </NavLink>
            </li>
            {demos.map((demo) => (
              <li key={demo.id}>
                <NavLink to={demo.path}>{demo.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
