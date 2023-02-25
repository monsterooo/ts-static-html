import Image from 'next/image'
import React, { useState } from 'react'
import cn from 'classnames'
import SectionWrapper from '../../SectionWrapper'
import styles from './index.module.scss'

const Functions = ({ data = [], title }) => {
  const [activeKey, setActiveKey] = useState(null)

  const ApproachItem = ({ title, description, img, reverse, id }) => {
    console.log(activeKey, id)
    return (
      <div
        className={cn(styles['card-box'], { [styles['card-box-active']]: activeKey === id })}
        onMouseEnter={() => setActiveKey(id)}
        onMouseLeave={() => setActiveKey(null)}
      >
        <div className={styles['img-box']}>
          <img src={img} />
        </div>
        <div className={styles['desc-box']}>
          <div className={styles['title-box']}>
            <p className={styles['core-title']}>{title}</p>
          </div>
          <div className={styles['core-desc']}>
            <div className={styles.text}>{description}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <SectionWrapper title={title}>
      <div className="flex w-full flex-wrap gap-8">
        {data?.map((item, index) => (
          <ApproachItem {...item} key={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Functions
