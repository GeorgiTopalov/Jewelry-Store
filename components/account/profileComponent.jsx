import React from "react";
import Link from "next/link";
import styles from "./../../styles/account/profile.module.css";
import AccountLayout from "./accountLayoutComponent";

const ProfleComponent = () => {
  return (
    <AccountLayout>
      <div className={styles["profile-content"]}>
        <h4>My Profile</h4>
        <form className={styles["profile-form"]}>
          <div className={styles["first-name"]}>
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              required
            ></input>
          </div>
          <div className={styles["surname"]}>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" required></input>
          </div>
          <div className={styles["gender"]}>
            <label htmlFor="gender">Gender: (optional)</label>
            <select type="gender" id="gender" name="surname">
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className={styles["birthdate"]}>
          <label htmlFor="birthdate">Birthdate:(optional)</label>
            <input type="text" id="day" name="day"></input>
            <input type="text" id="month" name="month"></input>
            <input type="text" id="year" name="year"></input>
          </div>
          <div>
            <button className="btn form-btn" type="submit">Update Profile</button>
          </div>
        </form>
      </div>
    </AccountLayout>
  );
};

export default ProfleComponent;
