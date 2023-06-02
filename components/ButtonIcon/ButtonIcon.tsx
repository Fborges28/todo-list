import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import style from "./ButtonIcon.module.css";

function ButtonIcon({icon}: {icon: IconName}) {
    return (
      <button className={style["btn-icon"]}>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
    )
  }

export default ButtonIcon