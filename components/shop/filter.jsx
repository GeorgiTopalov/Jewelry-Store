import styles from "./../../styles/shop/filter.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const FilterSection = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState({});
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1200;

  const categories = {
    Category: ["Stack ring", "Wedding Band", "Engagement Ring", "Sets"],
    Price: ["150$-300$", "300$-500$", "500$-800$", "800$-1200$", "1200$-2000$"],
    Metal: ["Yellow Gold", "White Gold", "Rose Gold", "Platinum"],
    "Gemstone Shape": [
      "Oval",
      "Pear",
      "Emerald",
      "Marquise",
      "Round",
      "Baguette",
      "Princess",
    ],
    "Gemstone Color": ["Blue", "Red", "Green", "Transparent", "Yellow"],
  };

  const metalIcons = {
    "Yellow Gold": (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="yellowGoldGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#FFF8DC", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FFD700", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#yellowGoldGradient)" />
      </svg>
    ),
    "White Gold": (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="whiteGoldGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#E5E4E2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#BCC0C1", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#whiteGoldGradient)" />
      </svg>
    ),
    "Rose Gold": (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="roseGoldGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#E8CCB1", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#DDB6A1", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#roseGoldGradient)" />
      </svg>
    ),
    Platinum: (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="platinumGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#E5E4E2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#A5A5A5", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#platinumGradient)" />
      </svg>
    ),
  };

  const gemstoneShapeIcons = {
    Oval: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M50 4.25C32.28 4.25 17.87 24.77 17.87 50S32.28 95.75 50 95.75 82.13 75.23 82.13 50 67.72 4.25 50 4.25zm21.59 55.63L67.29 50l4.3-9.88L80.38 50zm-10.65 6.47L50 71.67l-10.94-5.32L34.31 50l4.75-16.35L50 28.33l10.94 5.32L65.69 50zM40.77 78.2l-1.4-10 9.17 4.46zM50 73.42l8.79 6.31L50 93.6l-8.79-13.87zm9.23 4.78l-7.77-5.58 9.17-4.46zM28.41 59.88L19.62 50l8.79-9.88 4.3 9.88zm5-12.08l-3.81-8.73 7.6-4.37zm0 4.4l3.79 13.1-7.62-4.37zm25.82-30.4l1.4 10-9.17-4.46zM50 26.58l-8.79-6.31L50 6.4l8.79 13.87zm-9.23-4.78l7.77 5.58-9.17 4.46zm25.84 26L62.8 34.7l7.62 4.37zm0 4.4l3.81 8.73-7.62 4.37zm5.87-13.33l6.16-4.54A61.06 61.06 0 0 1 80.6 48zm-.19-1.73l1.5-15a50.86 50.86 0 0 1 4.43 10.61zm-1.55.38l-8.48-4.86-1.6-11.48 11.78-.57zM59.4 18.43l-8-12.63a22.62 22.62 0 0 1 9.7 3zm-18.8 0l-1.7-9.66a22.62 22.62 0 0 1 9.7-3zm-2.86 14.23l-8.48 4.86-1.7-16.91 11.78.57zm-10 4.48l-5.93-4.36a50.86 50.86 0 0 1 4.43-10.61zm-.19 1.73L19.4 48a61.06 61.06 0 0 1 2-13.66zm0 22.26l-6.16 4.54A61.06 61.06 0 0 1 19.4 52zm.19 1.73l-1.5 15a50.86 50.86 0 0 1-4.43-10.61zm1.55-.38l8.48 4.86 1.6 11.48-11.78.57zM40.6 81.57l8 12.63a22.62 22.62 0 0 1-9.7-3zm18.8 0l1.7 9.66a22.62 22.62 0 0 1-9.7 3zm2.86-14.23l8.48-4.86 1.7 16.91-11.78-.57zm10-4.48l5.93 4.36a50.86 50.86 0 0 1-4.43 10.61zm.19-1.73L80.6 52a61.06 61.06 0 0 1-2 13.66zm-.56-42l-11.21.54 1.8-10.07a33.75 33.75 0 0 1 9.44 9.53zM37.52 9.6l1.77 10.07-11.21-.54a33.75 33.75 0 0 1 9.44-9.53zm-9.44 71.27l11.21-.54-1.77 10.07a33.75 33.75 0 0 1-9.44-9.53zm34.4 9.53l-1.77-10.07 11.21.54a33.75 33.75 0 0 1-9.44 9.53z" />
      </svg>
    ),
    Pear: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M50 4.25C28.59 4.25 17.28 15.57 17.28 37c0 31.79 31.92 58.35 32.24 58.61h1c.28-.29 32.2-26.85 32.2-58.61C82.72 15.57 71.41 4.25 50 4.25zm0 66.05L37.65 59.07 32.43 38.2l5.12-13.67L50 20l12.45 4.54 5.12 13.66-5.22 20.87zM36.29 59.87l3.1 15.53-12.32-9.62V51.67zM31.64 36L27.4 24.7h8.49zm-.2 4.42l4.22 16.88-8.43-7.49zM41.05 76l-2.89-14.44 10.6 9.64zm18-60.51l2.69 7.16-9.84-3.56zM50 18.36l-8.21-4.09L50 6.06l8.21 8.21zm-9.06-2.84l7.16 3.57-9.85 3.59zm27.62 24.92l4.21 9.37-8.43 7.49zm-.2-4.44l-4.25-11.3h8.49zm-6.52 25.56L59 76l-7.76-4.8zm1.87-1.69l9.22-8.2v14.11L60.61 75.4zm5.46-21.74l4.7-12.55L81.09 37 73.8 48.42zM63.55 23.2l-3.12-8.31 9.06-3.75 3.22 12.06zm-3.9-9.61l-7.81-7.81C58.44 6 64 7.42 68.38 10zm-19.3 0L31.62 10C36 7.42 41.56 6 48.16 5.78zm-.78 1.3l-3.12 8.31h-9.19l3.25-12.06zM26.14 25.62l4.69 12.51-4.63 10.29L18.92 37zm-1 24l-4.36 1.31a53.14 53.14 0 0 1-1.94-11.21zm.43 1.38v12a69.72 69.72 0 0 1-4.36-10.7zm13.72 26.22l-3 2.28A102.7 102.7 0 0 1 29 69.2zM50 72.2l8.48 5.3L50 93.41 41.52 77.5zm21-3a102.7 102.7 0 0 1-7.25 10.3l-3-2.28zM74.43 51l4.36 1.31A69.72 69.72 0 0 1 74.43 63zm.42-1.44l6.3-9.9a53.14 53.14 0 0 1-1.94 11.21zm6.3-15.29l-6.77-10.63-3.13-11.73c6.05 4.77 9.4 12.29 9.9 22.37zm-52.4-22.36l-3.13 11.73-6.77 10.64c.5-10.08 3.85-17.6 9.9-22.37zm8.45 68.76l3.08-2.31 7 13.22A117.13 117.13 0 0 1 37.2 80.67zm15.47 10.91l7-13.22 3.08 2.31a117.13 117.13 0 0 1-10.08 10.91z" />
      </svg>
    ),
    Emerald: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M82.5 17.5l-13-13-.5-.25H31.05l-.53.22-13 13-.22.53v64l.22.53 13 13 .53.22H69l.53-.22 13-13 .22-.53V18zm-11 4.06l-6.07-6.08.85-2.05 7.27 7.28zm-7.27 62H35.78l-6.35-6.34V22.75l6.35-6.34h28.44l6.35 6.34v54.5zM64 14.91H36l-.85-2.05h29.73zm-29.45.57l-6.07 6.08-2.05-.85 7.27-7.28zm-6.65 7.46v54.12l-2.05.85V22.09zm.58 55.5l6.07 6.08-.85 2-7.27-7.28zM36 85.09h28l.85 2H35.12zm29.45-.57l6.07-6.08 2.05.85-7.27 7.28zm6.65-7.46V22.94l2.05-.85v55.82zm3-57l-8.15-8.15.85-2 9.36 9.35zm-9.6-8.7h-31l-.85-2.06h32.7zm-32.39.57L25 20.08l-2.06-.85 9.36-9.35zm-8.73 9.54v57.06l-2.05.85V20.62zM25 79.92l8.15 8.15-.85 2.05-9.4-9.35zm9.54 8.72h31l.85 2.06H33.65zm32.39-.57L75 79.92l2.06.85-9.36 9.35zm8.73-9.54V21.47l2-.85v58.76zm3-59.92L68.36 8.38l.85-2.06 11.44 11.44zM67 7.8H33l-.85-2h35.67zm-35.33.58L21.4 18.61l-2-.85L30.79 6.32zM20.83 20v60l-2 .85v-61.7zm.57 61.39l10.24 10.23-.85 2.06-11.44-11.44zM33 92.2h34l.85 2H32.18zm35.33-.58L78.6 81.39l2.05.85-11.44 11.44zM79.17 80V20l2-.85v61.7z" />
      </svg>
    ),
    Marquise: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M50.47 4.41h-.94C35.48 15.65 26.75 33.12 26.75 50s8.73 34.35 22.78 45.59h.94C64.52 84.35 73.25 66.88 73.25 50S64.52 15.65 50.47 4.41zM50 76.26l-6.45-5.37L37.75 50l5.8-20.89L50 23.74l6.45 5.37L62.25 50l-5.8 20.89zm-1-53.6l-4.91 4.09 1.63-8.18zm-6.8 5.65l-8 8 .15-10.55 9.8-7.18zM37 52.7l4.46 16.07-7.14-7.14zm0-5.4l-2.68-8.93 7.14-7.14zm-.81 2.7l-2.94 9.82L28.34 50l4.91-9.82zm6 21.69l1.95 9.72-9.8-7.18-.14-10.55zm3.48 9.74l-1.63-8.18L49 77.34zM63.05 52.7l2.68 8.93-7.14 7.14zm0-5.4l-4.46-16.07 7.14 7.14zm-5.25-19l-1.95-9.72 9.8 7.18.15 10.55zm-3.48-9.74L56 26.75l-5-4.09zM56 73.25l-1.63 8.18L51 77.34zm1.85-1.56l8-8-.15 10.55-9.8 7.18zm6-21.69l2.94-9.82L71.66 50l-4.91 9.82zm3.78-11.51L70 37.27a52.38 52.38 0 0 1 1.57 9.27zM67.31 37l-.12-8a59.69 59.69 0 0 1 2.44 6.82zM56 16.81l2.62-2.12a62 62 0 0 1 5.49 8.07zm-6 4.75l-3.88-4.85L50 7l3.88 9.69zm-14.08 1.2a62 62 0 0 1 5.49-8.07L44 16.81zM32.69 37l-2.32-1.2a59.69 59.69 0 0 1 2.44-6.8zm-.28 1.54l-4 8A52.38 52.38 0 0 1 30 37.27zm0 23L30 62.73a52.38 52.38 0 0 1-1.57-9.27zm.28 1.54l.12 8a59.69 59.69 0 0 1-2.44-6.82zM44 83.19l-2.62 2.12a62 62 0 0 1-5.49-8.07zm6-4.75l3.88 4.85L50 93l-3.88-9.69zm14.08-1.2a62 62 0 0 1-5.49 8.07L56 83.19zm3.23-14.19l2.32 1.15a59.69 59.69 0 0 1-2.44 6.8zm.28-1.54l4-8A52.38 52.38 0 0 1 70 62.73zm-10-48l-2.57 2.09-3.19-8.05a59.58 59.58 0 0 1 5.8 5.98zm-9.46-6l-3.23 8.07-2.57-2.09a59.58 59.58 0 0 1 5.84-5.94zm-5.8 78.92l2.57-2.09 3.23 8.07a59.58 59.58 0 0 1-5.76-5.94zm9.46 6l3.23-8.07 2.57 2.09a59.58 59.58 0 0 1-5.76 6z" />
      </svg>
    ),
    Round: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M50 11.36A38.64 38.64 0 1 0 88.64 50 38.68 38.68 0 0 0 50 11.36zm12.85 62.85L66 64.78l10.49-4.2v14.94zm-39.34 1.31V60.58L34 64.78l3.15 9.43zm13.64-49.73L34 35.22l-10.49 4.2V24.48zm39.34-1.31v14.94L66 35.22l-3.15-9.43zM64.84 63.6L50 68.16 35.16 63.6 29.5 50l5.66-13.6L50 31.84l14.84 4.56L70.5 50zM61.4 73.81l-9.4-4.7 12.21-3.75zm-22.8 0l-2.82-8.45L48 69.11zm-10-25.44l-4.68-7.48 9.36-3.74zm0 3.26l4.68 11.22-9.36-3.74zm10-25.44l9.4 4.7-12.22 3.75zm22.8 0l2.82 8.45L52 30.89zm10.05 25.44l4.68 7.48-9.36 3.74zm0-3.26l-4.68-11.22 9.36 3.74zM50 30.21L39.38 24.9 50 13.22 60.62 24.9zM22.6 41.68L27.8 50l-5.2 8.32L13.23 50zM50 69.79l10.62 5.31L50 86.78 39.38 75.1zm27.4-11.47L72.2 50l5.2-8.32L86.77 50zm1.14-17.64l6.37-3.36a36.69 36.69 0 0 1 2.19 11zm-.54-1.4V25.62a37 37 0 0 1 6.37 10.3zm-15-15l2.91-7.85a37.54 37.54 0 0 1 9.67 6.64zm-1.39-.56L51.74 12.9a37 37 0 0 1 12.76 2.9zm-23.14 0L35.5 15.8a37 37 0 0 1 12.76-2.9zm-1.47.55l-12.54-1.21a37.54 37.54 0 0 1 9.67-6.64zm-15 15l-6.37-3.36A37 37 0 0 1 22 25.62zm-.55 1.4l-8.55 7.62a36.69 36.69 0 0 1 2.19-11zm0 18.64l-6.37 3.36a36.69 36.69 0 0 1-2.19-11zm.55 1.4v13.67a37 37 0 0 1-6.37-10.3zm15 15l-2.91 7.85a37.54 37.54 0 0 1-9.67-6.64zm1.39.56l9.87 10.83a37 37 0 0 1-12.76-2.9zm23.14 0l2.97 7.93a37 37 0 0 1-12.76 2.9zm1.47-.54l12.58 1.21a37.54 37.54 0 0 1-9.67 6.64zm15-15l6.37 3.36A37 37 0 0 1 78 74.38zm.55-1.4l8.56-7.61a36.69 36.69 0 0 1-2.19 11z" />
      </svg>
    ),
    Baguette: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M95 26.75H5l-.75.75v45l.75.75h90l.75-.75v-45zm-9.78 9.47H14.78l-8-8h86.41zm-.44 1.5v24.56H15.22V37.72zm-71.06-.44v25.44l-8 8V29.31zm1.06 26.5h70.44l8 8H6.81zm71.5-1.06V37.28l8-8v41.41z" />
      </svg>
    ),
    Princess: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        x="0px"
        y="0px"
      >
        <path d="M85.53 13.72H14.47l-.75.75v71.06l.75.75h71.06l.75-.75V14.47zm-.75 50.92H78V35.36h6.79zM15.22 35.36H22v29.28h-6.78zm20.14-11.5l12.55 4.82-12.55 4.83zM27.88 50l-4.37 11.36V38.64zm-4-14.64h9.65l-4.85 12.55zm4.82 16.73l4.83 12.55h-9.67zm6.68 14.4l12.55 4.83-12.57 4.82zm-.17-1.68L29.49 50l5.7-14.81L50 29.49l14.81 5.7L70.51 50l-5.7 14.81L50 70.51zm29.45-31.3l-12.57-4.83 12.55-4.82zm0 33v9.65l-12.57-4.84zm6.68-14.4l4.82 12.55h-9.67zm.8-2.09l4.37-11.36v22.7zm-.8-2.09l-4.85-12.57h9.65zM50 27.88l-11.36-4.37h22.72zm-16.14 6H22.11l-6.37-18 18.12 7.46zm0 32.28v10.57l-18.12 7.46 6.37-18zm16.14 6l11.36 4.37H38.64zm16.14-6h11.75l6.37 18-18.12-7.43zm0-32.28V23.27l18.12-7.46-6.37 18zm0-12.22v-6.44h15.6zm-1.5.37H35.36v-6.81h29.28zm-30.78-.37l-15.6-6.42h15.6zm-13.34 12.2h-5.3v-15zm-5.3 32.28h5.3l-5.3 15zm18.64 12.22v6.42h-15.6zm1.5-.37h29.28v6.79H35.36zm30.78.37l15.6 6.42h-15.6zm13.34-12.22h5.3v15zm5.3-32.28h-5.3l5.3-15z" />
      </svg>
    ),
  };

  const closedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="10"
      viewBox="0 0 320 512"
      className={styles["collapse-icon"]}
    >
      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
    </svg>
  );

  const openedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="10"
      viewBox="0 0 320 512"
      className={styles["collapse-icon"]}
    >
      <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
    </svg>
  );

  const toggleCategory = (category) => {
    setIsCategoryOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside id={styles["filter-menu"]}>
      <Link href="#" className={styles["btn-filter"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 128 128"
        >
          <path d="M2.788,0h117.297c1.544,0,2.795,1.251,2.795,2.795c0,0.85-0.379,1.611-0.978,2.124l-46.82,46.586v39.979 c0,1.107-0.643,2.063-1.576,2.516l-22.086,12.752c-1.333,0.771-3.039,0.316-3.812-1.016c-0.255-0.441-0.376-0.922-0.375-1.398 h-0.006V51.496L0.811,4.761C-0.275,3.669-0.27,1.904,0.822,0.819c0.544-0.541,1.255-0.811,1.966-0.811V0L2.788,0z M113.323,5.591 H9.493L51.851,48.24c0.592,0.512,0.966,1.27,0.966,2.114v49.149l16.674-9.625V50.354h0.008c0-0.716,0.274-1.432,0.822-1.977 L113.323,5.591L113.323,5.591z" />
        </svg>
        Filter
      </Link>
      <div className={styles["filter-section"]}>
        <h3>Filter by</h3>
        <div className={styles["filter-categories"]}>
          {Object.entries(categories).map(([category, options]) => (
            <div key={category} className={styles["filter-category"]}>
              <button
                className={styles["category-title"]}
                onClick={() => toggleCategory(category)}
              >
                {isCategoryOpen[category] ? openedIcon : closedIcon}
                <span>{category}</span>
              </button>
              {(isDesktop || isCategoryOpen[category]) && (
                <div className={styles["sub-category"]}>
                  {options.map((option) => (
                    <label key={option} className={styles["filter-option"]}>
                      {category === "Gemstone Shape" && gemstoneShapeIcons[option]}
                      {category === "Metal" && metalIcons[option]}
                      <input
                        className={styles["filter-checkbox"]}
                        type="checkbox"
                        value={option}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSection;
