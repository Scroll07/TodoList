import './RegisterPage.css'

function RegisterPage() {
  return (
    <section className="register-page">
      <div className="register-page__inner">
        <div className="register-brand">
          <span className="register-brand__mark">W</span>
          <span className="register-brand__text">Workspace</span>
        </div>

        <div className="register-card">
          <h1 className="register-card__title">Create an account</h1>
          <p className="register-card__subtitle">Join your team&apos;s workspace</p>

          <form className="register-form">
            <div className="form-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Alex Chen"
              />
            </div>

            <div className="form-field">
              <label htmlFor="workEmail">Work Email</label>
              <input
                id="workEmail"
                type="email"
                placeholder="you@company.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="registerPassword">Password</label>
              <input
                id="registerPassword"
                type="password"
                placeholder="At least 6 characters"
              />
            </div>

            <button
              type="submit"
              className="button button--primary register-submit"
            >
              Create account
            </button>
          </form>
        </div>

        <p className="register-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </section>
  )
}

export default RegisterPage