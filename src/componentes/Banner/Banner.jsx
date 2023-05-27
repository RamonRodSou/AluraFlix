import React from 'react'
import banner from '../../assets/img/banner/banner.png'
import styles from './Banner.module.css'

export default function Banner () {

    return (
        <>
          <img className={styles.banner__principal} src={banner} alt='banner'/>
        </>
    )
}