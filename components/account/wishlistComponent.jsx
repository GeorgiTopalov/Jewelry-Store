import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './wishlist.module.css';
import AccountLayout from './accountLayoutComponent';

// const WishlistComponent = () => {
//   const [wishProducts, setWishProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       // Replace this URL with your actual endpoint
//       const response = await fetch('https://your-database-endpoint.com/products');
//       const data = await response.json();
//       setWishProducts(data);
//     };

//     fetchProducts();
//   }, []);

const wishProducts = [
  // {
  //   id: "274",
  //   imageUrl: "/Ring-sample1.jpg",
  //   price: "1000",
  //   name: "Super awesome ring with beautiful diamond",
  // },
  // {
  //   id: "274",
  //   imageUrl: "/Ring-sample1.jpg",
  //   price: "1000",
  //   name: "Super awesome ring with beautiful diamond",
  // },
  // {
  //   id: "274",
  //   imageUrl: "/Ring-sample1.jpg",
  //   price: "1000",
  //   name: "Super awesome ring with beautiful diamond",
  // },
  // {
  //   id: "274",
  //   imageUrl: "/Ring-sample1.jpg",
  //   price: "1000",
  //   name: "Super awesome ring with beautiful diamond",
  // },
];

const WishlistComponent = () => {
  if (wishProducts.length === 0) {
    return (
      <AccountLayout>
        <div className={styles["wishlist-content"]}>
          <h4>Wishlist</h4>
          <div>
            <p>You haven't added anything here yet.</p>
          </div>
        </div>
      </AccountLayout>
    );
  }

  return (
    <AccountLayout>
      <div className={styles["wishlist-content"]}>
        <h4>Wishlist</h4>
          <ul className={styles["wishlist-items"]}>
              {wishProducts.map((product) => (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <div
                    className={styles["wish-img"]}
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  >
                  </div>
                  <button className="btn">Add to bag</button>
                  <p className={styles["wish-price"]}><span>Price:</span>{product.price}$</p>
                </li>
              ))}
          </ul>
      </div>
    </AccountLayout>
  );
};

export default WishlistComponent;
