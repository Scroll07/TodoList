import './LoginPage.css'

function LoginPage() {
  return (
    <section className="login-page">
      <div className="login-page__inner">
        <div className="login-brand">
          <span className="login-brand__mark">W</span>
          <span className="login-brand__text">Workspace</span>
        </div>

        <div className="login-card">
          <h1 className="login-card__title">Welcome back</h1>
          <p className="login-card__subtitle">Sign in to your workspace</p>

          <form className="login-form">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="button button--primary login-submit">
              Sign in
            </button>
          </form>

          <div className="login-divider"></div>

          <div className="demo-accounts">
            <p className="demo-accounts__label">Demo accounts</p>
            <div className="demo-accounts__list">
              <span>Alex</span>
              <span>Sarah</span>
              <span>Marcus</span>
              <span className="demo-accounts__hint">· any password</span>
            </div>
          </div>
        </div>

        <p className="login-footer">
          Don&apos;t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </section>
  )
}

export default LoginPage