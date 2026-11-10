import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo">
          🐾 PawCoach
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>
            My Dog
          </NavLink>
          <NavLink to="/training">Training</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
