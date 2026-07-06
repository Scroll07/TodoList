import { NavLink, Outlet } from 'react-router-dom'
import './BaseLayout.css'

function BaseLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="brand" aria-label="Workspace home">
            <span className="brand__mark">W</span>
            <span className="brand__text">Workspace</span>
          </NavLink>

          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink to="/projects" className="main-nav__link">
              Projects
            </NavLink>
            <NavLink to="/tasks" className="main-nav__link">
              Tasks
            </NavLink>
            <NavLink to="/team" className="main-nav__link">
              Team
            </NavLink>
          </nav>

          <div className="auth-nav">
            <NavLink to="/login" className="auth-nav__link">
              Log in
            </NavLink>
            <NavLink to="/register" className="button button--primary">
              Register
            </NavLink>
          </div>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout