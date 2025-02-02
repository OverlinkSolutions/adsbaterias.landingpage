import image from "../../assets/description.png";

import "./styles.css";

export function Description() {
  return (
    <div className="container description-container">
      <div className="row g-4">
        <div className="col-md-12 col-sm-12 d-flex flex-column justify-content-center ">
          <h3 className="description-title">
            Como funciona o tráfego pago?
          </h3>
          <div className="description-description">
            O tráfego pago no Google ADS é o fluxo de usuários que clicou em um anúncio patrocinado por sua marca em canais digitais, levando-os até sua loja online ou site.
          </div>
        </div>

        <div className="col-md-12 col-sm-12">
          <img
            className="rounded img-fluid"
            style={{
              width: "100%",
              maxHeight: 350,
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={image}
            alt="Imagem de apresentação"
          />
        </div>
      </div>
    </div>
  );
}
