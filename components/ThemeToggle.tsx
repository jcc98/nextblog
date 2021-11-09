import React, { useState } from "react"
import styles from "../styles/themetoggle.module.css"
export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)


  const toggleState = ():void => {
    setIsEnabled(prevState => !prevState)
  }

  return(
    <label className={styles.togglewrapper} htmlFor="toggle">
      <div className={`${styles.toggle} ${isEnabled ? styles.enabled : styles.disabled}`}>
        <span className={styles.hidden}>
          {isEnabled ? "Enable" : "Disable"}
        </span>
        <input 
          id="toggle"
          name="toggle"
          type="checkbox"
          defaultChecked={isEnabled}
          onClick={toggleState}
        />
      </div>
    </label>
  )

}