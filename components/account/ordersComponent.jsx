import React from "react";
import styles from "./orders.module.css";
import AccountLayout from "./accountLayoutComponent";

const Orders = [
  {Details: "Gold ring 1ct diamond", Date: "12/10/2023", Status: "shipped", Tracking: "923293"},
  {Details: "White Gold earrings 1ct diamond", Date: "11/7/2021", Status: "complete", Tracking: "123093"},
]

const OrdersComponent = () => {
  if (Orders.length === 0) {
    return (
      <AccountLayout>
        <div className={styles['orders-content']}>
          <h4>My Orders</h4>
          <p className={styles["orders-empty"]}>No orders yet</p>
        </div>
      </AccountLayout>
    );
  }

  const headers = Object.keys(Orders[0]);

  return (
    <AccountLayout>
      <div className={styles['orders-content']}>
        <h4>My Orders</h4>
        <table>
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Orders.map((order, index) => (
              <tr key={index} >
                {headers.map(header => (
                  <td key={header} className={styles["table-data"]}>{order[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AccountLayout>
  );
};

export default OrdersComponent;
