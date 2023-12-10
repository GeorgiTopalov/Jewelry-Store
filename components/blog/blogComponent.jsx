import React from "react";
import Link from "next/link";
import styles from "./../../styles/blog.module.css";

const BlogLayout = () => {
  return (
    <div className={styles["blog-layout"]}>
      <section className={`${styles["blog-posts"]} ${styles["blog-card"]}`}>
        <article className={styles["blog-post"]}>
          <header>
            <h3>
              <Link href="blog">
                Discovering the Charm of 9k Gold Jewelry: Your Guide to
                Affordable
              </Link>
              Luxury
            </h3>
            <ul className={styles["post-details"]}>
              <li className={styles["post-author"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <p>Nancy Silverman</p>
              </li>
              <li className={styles["post-time"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <p>December 9, 2023</p>
              </li>
              <li className={styles["post-categories"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
                </svg>
                <Link href="blog">baba</Link>
              </li>
              <li className={styles["post-tags"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <p></p>
                <Link href="blog">baba</Link>
                <Link href="blog">baba</Link>
                <Link href="blog">baba</Link>
              </li>
            </ul>
            <div className={styles["post-details"]}></div>
          </header>
          <div className={styles["blog-img"]}></div>
          <div className={styles["post-exerpt"]}>
            <p>
              Hey there! Have you ever wondered how you can add a touch of
              luxury to your everyday style without spending a fortune? Well,
              let me introduce you to the wonderful world of 9k gold jewelry.
              It’s not just a budget-friendly option; it’s a stylish and smart
              choice for anyone who loves to shine.{" "}
              <Link href="blog">Continue Reading</Link>
            </p>
          </div>
        </article>
        <article className={styles["blog-post"]}>
          <header>
            <h3>
              <Link href="blog">
                Discovering the Charm of 9k Gold Jewelry: Your Guide to
                Affordable
              </Link>
              Luxury
            </h3>
            <ul className={styles["post-details"]}>
              <li className={styles["post-author"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <p>Nancy Silverman</p>
              </li>
              <li className={styles["post-time"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <p>December 9, 2023</p>
              </li>
              <li className={styles["post-categories"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
                </svg>
                <Link href="blog">baba</Link>
              </li>
              <li className={styles["post-tags"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <p></p>
                <Link href="blog">baba</Link>
                <Link href="blog">baba</Link>
                <Link href="blog">baba</Link>
              </li>
            </ul>
            <div className={styles["post-details"]}></div>
          </header>
          <div className={styles["blog-img"]}></div>
          <div className={styles["post-exerpt"]}>
            <p>
              Hey there! Have you ever wondered how you can add a touch of
              luxury to your everyday style without spending a fortune? Well,
              let me introduce you to the wonderful world of 9k gold jewelry.
              It’s not just a budget-friendly option; it’s a stylish and smart
              choice for anyone who loves to shine.{" "}
              <Link href="blog">Continue Reading</Link>
            </p>
          </div>
        </article>
        <article className={styles["blog-post"]}>
          <header>
            <h3>
              <Link href="blog">
                Discovering the Charm of 9k Gold Jewelry: Your Guide to
                Affordable
              </Link>
              Luxury
            </h3>
            <ul className={styles["post-details"]}>
              <li className={styles["post-author"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <p>Nancy Silverman</p>
              </li>
              <li className={styles["post-time"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <p>December 9, 2023</p>
              </li>
              <li className={styles["post-categories"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
                </svg>
                <Link href="blog">baba</Link>
              </li>
              <li className={styles["post-tags"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <p></p>
                <Link href="blog">baba</Link>
                <Link href="blog">baba</Link>
                <Link href="blog">baba</Link>
              </li>
            </ul>
            <div className={styles["post-details"]}></div>
          </header>
          <div className={styles["blog-img"]}></div>
          <div className={styles["post-exerpt"]}>
            <p>
              Hey there! Have you ever wondered how you can add a touch of
              luxury to your everyday style without spending a fortune? Well,
              let me introduce you to the wonderful world of 9k gold jewelry.
              It’s not just a budget-friendly option; it’s a stylish and smart
              choice for anyone who loves to shine.{" "}
              <Link href="blog">Continue Reading</Link>
            </p>
          </div>
        </article>
      </section>
      <aside className={styles["blog-sidebar"]}>
        <div className={`${styles["mailing-list"]} ${styles["blog-card"]}`}>
          <h3>Join our mailing list</h3>
          <p>Get notified for any new articles the moment they come out!</p>
          <button className="btn btn-secondary">Click here to subscribe</button>
        </div>
        <div className={`${styles["search-bar"]} ${styles["blog-card"]}`}>
				<form  className={styles["search-form"]}>
					<label htmlFor="sidebar-search"><h3>Search the blog</h3></label>
					<input type="text" id="sidebar-search" placeholder="Search..."></input>
				</form>
			</div>
        <div className={`${styles["recent-posts"]} ${styles["blog-card"]}`}>
          <h3>Recent Posts</h3>
          <ul>
            <li>
                <h4><Link href="blog" className={styles["recent-posts-title"]}>Discovering the Charm of 9k Gold Jewelry: Your Guide to
                Affordable</Link></h4>
                <div className={styles["recent-posts-img"]}></div>
            </li>
            <li>
                <h4><Link href="blog" className={styles["recent-posts-title"]}>Discovering the Charm of 9k Gold Jewelry: Your Guide to
                Affordable</Link></h4>
                <div className={styles["recent-posts-img"]}></div>
            </li>
            <li>
                <h4><Link href="blog" className={styles["recent-posts-title"]}>Discovering the Charm of 9k Gold Jewelry: Your Guide to
                Affordable</Link></h4>
                <div className={styles["recent-posts-img"]}></div>
            </li>
          </ul>
        </div>
        <div className={`${styles["blog-categories"]} ${styles["blog-card"]}`}>
          <h3>Categories</h3>
          <ul>
            <li>
                <Link href="blog">Wedding</Link>
            </li>
            <li>
                <Link href="blog">Gold</Link>
            </li>
            <li>
                <Link href="blog">Gemstones</Link>
            </li>
            <li>
                <Link href="blog">Fashion</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogLayout;