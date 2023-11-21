import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <meta charset="UTF-8" />
        <meta name="description" content="Learning Web" />
        <meta name="keywords" content="wild, paws, dog, food" />
        <meta name="author" content="Georgi Topalov" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </header>
      <main>{children}</main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
