import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LEFT */}
        <div className="navbar-logo">
          Sohan Jadyal
        </div>

        {/* RIGHT */}
        <nav className="navbar-links">
          <div className="navbar-logo">
          Full Stack Developer
        </div>

        </nav>
      </div>
    </header>
  );
}
