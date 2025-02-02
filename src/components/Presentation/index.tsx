import image from "../../assets/presentation.png";

import "./styles.css";

export function Presentation() {
  return (
    <div className="container presentation-container">
      <div className="row g-4">
        <div className="col-md-8 col-sm-12 d-flex flex-column justify-content-center ">
          <h3 className="title">
            Tenha tráfego que converta!
          </h3>
          <div className="description">
            Venda suas baterias online de forma eficiente e rápida.
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <img
            className="rounded img-fluid floating"
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
