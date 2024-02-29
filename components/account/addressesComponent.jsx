import React from "react";
import styles from "./addresses.module.css";
import AccountLayout from "./accountLayoutComponent";

const AddressesComponent = () => {
  return (
    <AccountLayout>
      <div className={styles["addresses-content"]}>
        <h4>Shipping Address</h4>
        <form className={styles["addresses-form"]} action="/submit-address" method="post">
          <div>
            <label for="street-address">Street Address:</label>
            <input
              type="text"
              id="street-address"
              name="streetAddress"
              required
            ></input>
          </div>
          <div>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required></input>
          </div>
          <div>
            <label for="state">State</label>
            <input type="text" id="state" name="state" required></input>
          </div>
          <div>
            <label for="postal-code">Postal Code:</label>
            <input
              type="text"
              id="postal-code"
              name="postalCode"
              required
            ></input>
          </div>
          <div>
            <button className="btn form-btn"type="submit">Change Address</button>
          </div>
        </form>
      </div>
    </AccountLayout>
  );
};

export default AddressesComponent;
