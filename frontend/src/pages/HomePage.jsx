import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero__inner">
          <p className="eyebrow">Internal workspace tool</p>

          <h1 className="hero__title">
            A quiet, focused workspace
            <br />
            for teams that value clarity
            <br />
            over noise.
          </h1>

          <p className="hero__text">
            Manage projects, assign tasks, and coordinate your team — all in
            one calm, distraction-free place. No dashboards begging for
            attention. Just the work that matters.
          </p>

          <div className="hero__actions">
            <a href="/register" className="button button--primary">
              Get started
            </a>

            <a href="/login" className="button button--ghost">
              Log in
            </a>
          </div>
        </div>
      </section>

      <section className="workspace-preview">
        <div className="container">
          <div className="preview-card">
            <div className="preview-card__top">
              <div className="preview-brand">
                <span className="preview-brand__mark">W</span>
                <span>Workspace</span>
              </div>

              <div className="preview-tabs">
                <span>Projects</span>
                <span>Tasks</span>
                <span>Team</span>
              </div>
            </div>

            <div className="preview-grid">
              <article className="project-card">
                <div className="project-card__head">
                  <span className="project-dot project-dot--blue"></span>
                  <span className="project-status">Active</span>
                </div>
                <h3>Design System Revamp</h3>
                <div className="project-progress">
                  <span className="project-progress__bar project-progress__bar--66"></span>
                </div>
                <div className="project-meta">
                  <span>6 tasks</span>
                  <span>66%</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-card__head">
                  <span className="project-dot project-dot--orange"></span>
                  <span className="project-status">Active</span>
                </div>
                <h3>API v2 Migration</h3>
                <div className="project-progress">
                  <span className="project-progress__bar project-progress__bar--50"></span>
                </div>
                <div className="project-meta">
                  <span>4 tasks</span>
                  <span>50%</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-card__head">
                  <span className="project-dot project-dot--green"></span>
                  <span className="project-status">Active</span>
                </div>
                <h3>Mobile App MVP</h3>
                <div className="project-progress">
                  <span className="project-progress__bar project-progress__bar--20"></span>
                </div>
                <div className="project-meta">
                  <span>5 tasks</span>
                  <span>20%</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <p className="eyebrow">What’s inside</p>
          <h2 className="section-title">
            Everything your team needs, nothing it doesn’t.
          </h2>
          <p className="section-text">
            Three focused areas that cover the full project lifecycle.
          </p>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-icon">⊞</span>
              <h3>Projects</h3>
              <p>
                Group related work into projects. Track overall progress, set
                status, and keep your team aligned on what matters.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">☑</span>
              <h3>Tasks</h3>
              <p>
                Create and assign tasks with priority levels and due dates. View
                them as a list or kanban board — your choice.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">◌</span>
              <h3>Team</h3>
              <p>
                See who owns what at a glance. Every team member gets a clear
                picture of their workload and responsibilities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefits__grid">
          <article className="benefit-item">
            <span className="benefit-icon">ϟ</span>
            <div>
              <h3>Fast to set up</h3>
              <p>Start in minutes, no configuration required.</p>
            </div>
          </article>

          <article className="benefit-item">
            <span className="benefit-icon">◌</span>
            <div>
              <h3>Focused on clarity</h3>
              <p>No bloat, no noise — just the work that matters.</p>
            </div>
          </article>

          <article className="benefit-item">
            <span className="benefit-icon">∣∣∣</span>
            <div>
              <h3>Progress at a glance</h3>
              <p>Visual progress bars and status badges across every project.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready to get organized?</h2>
          <p>Create your workspace in seconds. No credit card required.</p>

          <div className="cta__actions">
            <a href="/register" className="button button--primary">
              Create your workspace
            </a>
            <a href="/login" className="button button--ghost">
              Already have an account? Log in
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage