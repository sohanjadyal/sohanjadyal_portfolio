import Image from "next/image";
import "../styles/hero.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      {/* VIDEO BACKGROUND (added) */}
      <video
        className="hero-video"
        src="/Overlay..mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY (added) */}
      <div className="hero-overlay" />

      {/* ORIGINAL CONTENT (unchanged) */}
      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-text">
          <p className="hero-intro">
            Hi, I’m <b>Sohan Jadyal</b> and I enjoy
          </p>

          <h2 className="hero-title">
            Building real-world <br />
            web applications
          </h2>

          <p className="hero-desc">
            Sophomore CS student from Mumbai, India.
            Focused on problem-solving & full-stack dev, with interests in data analysis and AI.
          </p>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/sohan-jadyal-563190310/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/sohanjadyal"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:you@email.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <Image
            src="/profile.jpg"
            alt="Sohan Jadyal"
            width={360}
            height={360}
            priority
          />
        </div>
      </div>
    </section>
  );
}
