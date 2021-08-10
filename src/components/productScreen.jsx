import React from "react";
import data from "./state/data";
const ProductScr = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div class="details row">
      <div class="mobile col-lg-4 col-12">
        <div class="img">
          <img src={product.productImage} alt="*" />
        </div>
        <div class="little_imgs">
          {product.relatedImg.map((v) => {
            return (
              <div class="lite_img">
                <img src={v} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div class="discription col-lg-8 col-12">
        <div class="title">
          <p>{product.productName}</p>
          <h5>
            For more details:
            <a href={"https://" + product.visitLink} target="_blank">
              VISIT
            </a>
          </h5>
          <h4>QUICK DETAILS</h4>

          <table class="quick_details">
            <tr>
              <td>DISPLAY</td>
              <td>{product.productDisplayDesc}</td>
            </tr>
            <tr>
              <td>CAMERA</td>
              <td>{product.productCamDesc}</td>
            </tr>

            <tr>
              <td>BATTERY</td>
              <td>{product.productBatteryDesc}</td>
            </tr>
          </table>
        </div>
        <div class="take_order">
          <table class="take_order">
            <tr>
              <td>Color</td>
              <td>
                {product.color.map((v) => {
                  return (
                    <>
                      <input type="radio" name="color" id="" value={v} />
                      <span>{v}</span>
                    </>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td>STORAGE</td>
              <td>
                {product.storage.map((v) => {
                  return (
                    <>
                      <input type="radio" name="storage" id="" value={v} />
                      <span>{v}GB</span>
                    </>
                  );
                })}
              </td>
            </tr>

            <tr>
              <td>Quantity</td>
              <td>
                <input type="number" name="quantity" id="" />
              </td>
            </tr>
            <tr>
              <td>
                <h3>{product.productPrice}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="submit"
                  value="ORDER NOW"
                  class="btn btn-outline-success"
                  data-toggle="modal"
                  data-target="#order_now"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductScr;
