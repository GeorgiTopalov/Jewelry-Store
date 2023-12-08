import React from "react";
import Link from "next/link";
import styles from "./../../styles/aboutUs/ourStory.module.css";

const OurStory = () => {
  return (
    <div id={styles["our-story"]}>
      <div className={styles["mission"]}>
        <div className={styles["mission-img"]}></div>
        <div className={styles["card"]}>
          <h2>Our Mission</h2>
          <h3>
            Modern Elegance for <span className="bold">All</span>
          </h3>
          <p>
            Crafting contemporary jewelry for the modern consumer - where luxury
            meets affordability, and sustainability meets style.
          </p>
        </div>
      </div>
      <div className={styles["vision"]}>
        <div className={styles["card"]}>
          <h2>Our Vision</h2>
          <p>
            Our vision is to redefine the landscape of luxury jewelry, making
            high-quality, innovative designs accessible to a broader audience.
            We strive to be leaders in the lab-grown diamond and gold jewelry
            market, championing affordability without compromising on elegance
            and craftsmanship. Our goal is to create a brand that resonates with
            the aspirations of a diverse clientele, offering them the luxury of
            choice and the promise of exceptional quality. As we grow, we are
            dedicated to inspiring a new era in the jewelry industry where
            sophistication is attainable, and every piece tells a story of
            artistry and innovation. We envision a future where our brand is
            synonymous with accessible luxury, impeccable design, and a
            commitment to customer satisfaction.
          </p>
        </div>
        <div className={styles["vision-img"]}></div>
      </div>
      <div className={`${styles["card"]} ${styles["story"]}`}>
        <div className={styles["story-txt"]}>
          <h2>Where it all began</h2>
          <h3>The Genesis of a Dream</h3>
          <p>
            The journey to establish this jewelry business began some years ago,
            fueled by a deep-seated passion for the artistry and elegance of
            fine jewelry. The aspiration was not just to create another brand,
            but to bring to life a vision where each piece of jewelry tells a
            story, transcending mere adornment to become a cherished memory at
            an affordable price.
          </p>
          <h3>A Serendipitous Meeting</h3>
          <p>
            The dream started turning into reality when a chance encounter led
            to a blossoming friendship with someone whose family had been in the
            business of diamonds and crafting exquisite jewelry for decades.
            Their expertise in the industry and desire to expand into the B2C
            market presented a unique opportunity. It was a meeting of minds and
            visions, where their technical know-how and family legacy in the
            jewelry trade perfectly complemented the entrepreneurial spirit and
            vision for a customer-focused brand.
          </p>
          <h3>The Inspiration</h3>
          <p>
            Inspiration for the business stems from a belief in the power of
            jewelry to capture and celebrate life's moments – be it love,
            achievement, or personal milestones. There's a commitment to ethical
            sourcing and sustainability, reflecting a modern sensibility towards
            responsible luxury.
          </p>
          <h3>The Launch</h3>
          <p>
            As the venture takes off, it carries the legacy of a family deeply
            rooted in the jewelry industry, infused with a new entrepreneurial
            energy. It stands as a testament to the power of collaboration,
            shared values, and a unified vision to revolutionize the jewelry
            experience for consumers. This jewelry business is not just a brand;
            it's a journey of passion, a fusion of expertise, and a dream taking
            flight in the world of fine jewelry.
          </p>
        </div>
        <Link href="/shop" className={`${styles["btn-cta"]} btn`}>
          Explore Our Shop
        </Link>
      </div>
    </div>
  );
};

export default OurStory;
