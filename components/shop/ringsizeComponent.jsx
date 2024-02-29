import React from "react";
import styles from "./ringsize.module.css";

const RingSizeComponent = () => {
  return (
    <section id={styles["ringsize-area"]}>
      <div>
        <h2>What can you do to find the perfect ring size?</h2>
        <p>
          There are a few ways to figure out what the ideal ring size is for
          yourself or for the special person you are buying the ring for.
          Depending on who it is for and how secret you'd want to be in finding
          out their ring size we see how this may seem like a challenge. Here's
          a few things we recomment trying:
        </p>
      </div>
      <div>
        <h3>1. Start by measuring the diameter of the ring finger</h3>
        <img src="/ring-measure.svg"></img>
      </div>
      <div>
        <h3>
          2. Measure the diameter of the a ring you or your loved one already
          has
        </h3>
        <img src="/ring-measure-ruler.svg"></img>
      </div>
      <div>
        <h3>3. Ask a friend for help</h3>
        <p>If you'd like to be more secretative about your present 
            and don't want to ruin the surprice you'll have to be 
            a bit sneaky about it. Ask a mutual female friend or 
            family member to show interest in one of your loved ones current rings. 
            Let them ask to try them on and see what finger of theirs it fits.
            Then procede to step 1.</p>
      </div>
    </section>
  );
};

export default RingSizeComponent;
