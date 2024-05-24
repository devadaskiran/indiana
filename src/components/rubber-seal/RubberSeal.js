import React from 'react';

import styles from './RubberSeal.module.scss';


const RubberSeal = ({className, text}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <svg width="132" height="132" xmlns="http://www.w3.org/2000/svg">
        <circle cx="66" cy="66" r="65" fill="none" stroke={"#0043fc"} strokeWidth="2" />
        <circle cx="66" cy="66" r="65" fill="none" stroke="#0043fc" strokeWidth="2" />
        <circle cx="66" cy="66" r="48" fill="none" stroke={"#0043fc"} strokeWidth="1" />
        <circle cx="66" cy="66" r="46" fill="none" stroke={"#0043fc"} strokeWidth="1" />
        <defs>
          <path id="text-path" d="M66 126A60 60 0 1 0 66 6a60 60 0 0 0 0 120" fill="none" />
        </defs>
        <g>
          <text className={styles.title} dominantBaseline="middle" textAnchor="middle" x="50%" y="50%" fontFamily="Manrope3-ExtraBold, Manrope3" fontSize="20" fontWeight="600" fill={"#0043fc"} stroke="none" strokeWidth="2" >{text.split(' ')[0]}</text>
          <text>
            <textPath xlinkHref="#text-path" fontFamily="Manrope3-ExtraBold, Manrope3" fontSize="10" fontWeight="600" fill={"#0043fc"} letterSpacing="2.14">{text}</textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default RubberSeal;
