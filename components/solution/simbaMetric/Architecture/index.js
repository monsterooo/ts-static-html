import Image from 'next/image'
import React from 'react'
import cn from 'classnames'
import SectionWrapper from '../../SectionWrapper'
import styles from './index.module.scss'

const Architecture = ({ bgUrl, title }) => {
  return (
    <SectionWrapper title={title} bgColor={'#fff'}>
      <div
        className={styles['structure-pic']}
        style={{ background: `url(${bgUrl}) no-repeat 50%/100%` }}
      ></div>
    </SectionWrapper>
  )
}
export default Architecture
