import instagram from "../../assets/instagram.png";
import "./styles.css";

import Logo from "../../assets/logo.png";

export function Footer() {
  return (
    <div
      className="footer"
      style={{
        color: "white",
        width: "100%",
        padding: "32px 0px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <div>
          <img src={Logo} height="50" alt="Logomarca da ADS Baterias" />
        </div>
        <div style={{ display: "flex", fontWeight: "600", flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <span className="footer-title">Nosso negócio é impulsionar o seu!</span>
        </div>
        <div style={{ height: 1, backgroundColor: "white", width: "100%" }} />
        <a href="https://www.instagram.com/TBD/" style={{ textDecoration: 'none', color: "white", fontWeight: '700' }}>
          <img src={instagram} alt="#" width={30} />
          <span> Instagram</span>
        </a>
      </div>
    </div>
  );
}
