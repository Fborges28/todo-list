import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import style from "./ButtonIcon.module.css";

library.add(fas);

function ButtonIcon({icon}: {icon: IconName}) {
    return (
      <button className={style["btn-icon"]} title='Button Icon'>
        <FontAwesomeIcon icon={icon} />
      </button>
    )
  }

export default ButtonIcon