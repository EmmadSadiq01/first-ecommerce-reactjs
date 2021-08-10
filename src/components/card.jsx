import { Link } from "react-router-dom";
import XYZ from "./state/data";
const Card = () => {
  return (
    <section className="my-albums">
      <div className="container">
        <div className="heading text-center">
          <h3>NEW ARRIVALS</h3>
        </div>
        <div className="row" id="new_arivals">
          {XYZ.products.map((product) => {
            return (
              <div
                className="col-lg-4 col-md-4 col-sm-6 col-12 album-box"
                id="HuaweiNova3"
              >
                <div className="main_card">
                  <div className="card">
                    <img src={product.productImage} alt="" />
                    <div className="card-text">
                      <h4>{product.productName}</h4>
                        <Link
                          to={"/products/" + product._id}
                          className="btn btn-outline-secondary"
                        >
                          Shop Now
                        </Link>
                    </div>
                  </div>
                  <div className="detail text-center">
                    <h5>{product.productName}</h5>
                    <p>{product.productDesc}</p>
                    <p className="price">RS {product.productPrice}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;
