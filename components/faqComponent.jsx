import React from "react";
import Link from "next/link";
import styles from "./../styles/faq.module.css";

const FaqComponent = () => {
  return (
    <section className={styles["faq-card"]}>
      <div className={styles["question-group"]}>
        <p className={styles["question"]}>
          How long does it take for the product to arrive?
        </p>
        <p>
          Usually it would take op to 10 days after ordering a piece for us to
          ship. After that it depends on the couriers but not more than a week
          after shipping.
        </p>
      </div>
      <div className={styles["question-group"]}>
        <p className={styles["question"]}>
          How long does it take for the product to arrive?
        </p>
        <p>
          Usually it would take op to 10 days after ordering a piece for us to
          ship. After that it depends on the couriers but not more than a week
          after shipping.
        </p>
      </div>
      <div className={styles["question-group"]}>
        <p className={styles["question"]}>
          How long does it take for the product to arrive?
        </p>
        <p>
          Usually it would take op to 10 days after ordering a piece for us to
          ship. After that it depends on the couriers but not more than a week
          after shipping.
        </p>
      </div>
      <div className={styles["question-group"]}>
        <p className={styles["question"]}>
          How long does it take for the product to arrive?
        </p>
        <p>
          Usually it would take op to 10 days after ordering a piece for us to
          ship. After that it depends on the couriers but not more than a week
          after shipping.
        </p>
      </div>
      <div className={styles["question-group"]}>
        <p className={styles["question"]}>
          How long does it take for the product to arrive?
        </p>
        <p>
          Usually it would take op to 10 days after ordering a piece for us to
          ship. After that it depends on the couriers but not more than a week
          after shipping.
        </p>
      </div>
      <div className={styles["question-group"]}>
        <p className={styles["question"]}>
          How long does it take for the product to arrive?
        </p>
        <p>
          Usually it would take op to 10 days after ordering a piece for us to
          ship. After that it depends on the couriers but not more than a week
          after shipping.
        </p>
      </div>
      <div className={styles["question-group"]}>
        <p className={styles["question"]}>
          How long does it take for the product to arrive?
        </p>
        <p>
          Usually it would take up to 10 days for us to ship after an order is
          placed. You should expect your shippment to arrive within a week after shipping.
        </p>
      </div>
      <div className={styles["cont-redirect"]}>
        <p>
          If you still have questions that are unanswered don't hesitate to{" "}
          <Link href="/contactus">contact us!</Link>
        </p>
      </div>
    </section>
  );
};

export default FaqComponent;
