import React, { useState } from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'
import SectionWrapper from '../../SectionWrapper'
import styles from './index.module.scss'
import Image from 'next/image'

const GROUP_COUNT = 3

const Advantages = ({ data = [], title }) => {
  const [isHover, setIsHover] = useState(false)
  const [showIndex, setShowIndex] = useState(0)

  const groups = getGroups(data, GROUP_COUNT)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <SectionWrapper title={title} bgColor={'#fff'}>
      <div
        className={styles.content}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {data?.map((item, index) => {
          return <RecommendItem {...item} key={index} active={showIndex === index} />
        })}
      </div>
    </SectionWrapper>
  )
}

const RecommendItem = ({ title, description, active, img, id }) => {
  const [activeKey, setActiveKey] = useState(null)

  return (
    <span
      className={cn(styles.itemContainer, { [styles['itemContainer-active']]: activeKey == id })}
      onMouseEnter={() => setActiveKey(id)}
      onMouseLeave={() => setActiveKey(null)}
    >
      <img src={img} />
      <h4 className={styles['application-title']}>{title}</h4>
      <div className={styles['desc']}>
        <p className={styles['point']}>
          <b></b>
        </p>
        <span className={styles['text']}>{description}</span>
      </div>
    </span>
  )
}

const getGroups = (items, count) => {
  const group = []
  let startIndex = 0

  while (startIndex < items.length) {
    group.push(items.slice(startIndex, startIndex + count))
    startIndex += count
  }

  return group
}

export default Advantages
