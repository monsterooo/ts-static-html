import React, { useState } from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'
import SectionWrapper from '../SectionWrapper'
import styles from './index.module.scss'
import Image from 'next/image'
import { NEXT_ICON_FILL } from '../constants'

const GROUP_COUNT = 3
const ITEM_DATA = [
  {
    title: '大数据咨询',
    description: '为企业提供大数据相关的战略规划、能力建设、组织设计、业务设计等咨询服务',
  },
  {
    title: '大数据咨询2',
    description: '为企业提供大数据相关的战略规划、能力建设、组织设计、业务设计等咨询服务',
  },
  {
    title: '大数据咨询3',
    description: '为企业提供大数据相关的战略规划、能力建设、组织设计、业务设计等咨询服务',
  },
]

const Recommend = () => {
  const [isHover, setIsHover] = useState(false)
  const [showIndex, setShowIndex] = useState(0)

  const groups = getGroups(ITEM_DATA, GROUP_COUNT)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <SectionWrapper title="为你推荐" bgColor={'#fff'}>
      <div
        className={styles.content}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {ITEM_DATA.map((item, index) => {
          return <RecommendItem {...item} key={index} active={showIndex === index} />
        })}
      </div>
    </SectionWrapper>
  )
}

const RecommendItem = ({ title, description, active }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div
      className={cn(styles.itemContainer)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles['img-box']}>
        <img src="https://startdt.com/_nuxt/img/application-icon01.006ba63.png" />
      </div>
      <h4 className={styles['application-title']}>{title}</h4>
      <p className={styles['application-desc']}>{description}</p>
    </div>
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

export default Recommend
