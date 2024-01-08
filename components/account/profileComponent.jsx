import React from "react";
import {useState} from "react";
import styles from "./../../styles/account/profile.module.css";
import AccountLayout from "./accountLayoutComponent";

const ProfleComponent = () => {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = (e) => setDay(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the birthdate data
    console.log({ day, month, year });
  };


  return (
    <AccountLayout>
      <div className={styles["profile-content"]}>
        <h4>My Profile</h4>
        <form onSubmit={handleSubmit} className={styles["profile-form"]}>
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
            <label htmlFor="birthdate">Birthdate (optional):</label>
            <input
              type="text"
              id="day"
              name="day"
              placeholder="Day"
              value={day}
              onChange={handleDayChange}
            />
            <input
              type="text"
              id="month"
              name="month"
              placeholder="Month"
              value={month}
              onChange={handleMonthChange}
            />
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Year"
              value={year}
              onChange={handleYearChange}
            />
          </div>
          <div>
            <button className="btn form-btn" type="submit">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </AccountLayout>
  );
};

export default ProfleComponent;
