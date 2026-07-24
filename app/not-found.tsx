export default function NotFound() {
  return (
    <section className="section">
      <p className="eyebrow">Lost in the canopy</p>
      <h1 className="page-title">Page not found</h1>
      <p className="page-intro">
        That trail does not exist. Head back to the species guides or home.
      </p>
      <div className="hero-actions" style={{ marginTop: "1.25rem" }}>
        <a href="/" className="btn primary">
          Home
        </a>
        <a href="/reptiles" className="btn secondary">
          Species
        </a>
      </div>
    </section>
  );
}
