import { useState } from "react";
import fireDb from "../../firebase/config";

const AddProduct = () => {
  const initialFieldValues = {
    productName: "",
    productPrice: "",
    productDesc: "",
  };
  const [values, setValue] = useState(initialFieldValues);

  const inputHandler = (e) => {
    var { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
    // e.target.value
  };

  const submitHandler = (e) => {
      e.preventDefault();
    console.log(values)

  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            name="productName"
            value={values.productName}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Product Price</label>
          <input
            type="text"
            name="productPrice"
            value={values.productPrice}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Product Desc</label>
          <input
            type="text"
            name="productDesc"
            value={values.productDesc}
            onChange={inputHandler}
          />
        </div>
        <input type="submit"/>
      </form>
    </>
  );
};
export default AddProduct;
