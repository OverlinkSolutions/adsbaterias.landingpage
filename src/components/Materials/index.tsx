import FunilIcon from "../../assets/vendas.png";
import AdsIcon from "../../assets/online-advertising.png";
import ShopIcon from "../../assets/shopping-cart.png";
import Profit from "../../assets/profit.png";
import "./index.css";

export default function Materials() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row g-4 d-flex">
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
            <img src={AdsIcon} className="card-icon" />
            <span className="card-title">Gestão de anúncios</span>
            <span className="text-center card-description">
              Tudo de forma online no Google e Meta.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
            <img src={FunilIcon} className="card-icon" />
            <span className="card-title">Atração de clientes</span>
            <span className="text-center card-description">
              Funil de vendas especializado para seu negócio.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border p-8 d-flex gap-3 flex-column justify-content-center align-items-center">
          <img src={ShopIcon} className="card-icon" />
            <span className="card-title">Abasteça seu atendimento</span>
            <span className="text-center card-description">
              Maiores oportunidades de vendas.
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex">
          <div className="card-material border d-flex gap-3 flex-column justify-content-center align-items-center">
          <img src={Profit} className="card-icon" />
            <span className="card-title">Maior previsibilidade</span>
            <span className="text-center card-description">
              Mensure o retorno do seu investimento.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
