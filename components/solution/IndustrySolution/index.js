import Image from 'next/image'
import React, { useState } from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionWrapper from '../SectionWrapper'
import styles from './index.module.scss'
import { Navigation, Pagination } from 'swiper'

const GROUP_COUNT = 5
const ITEM_DATA = [
  {
    title: '商业地产',
    img: 'https://startdt.com/_nuxt/img/businessicon.69b55b9.png',
    bg: '	https://startdt.com/_nuxt/img/business.84953f3.png',
    description:
      '帮助企业构建内部数智化经营数据平台，通过数据中台信息化建设、强力支撑商业地产企业数智化转型。',
  },
  {
    title: '商超百货',
    img: 'https://startdt.com/_nuxt/img/marketicon.266be2f.png',
    bg: 'https://startdt.com/_nuxt/img/market.724696d.png',
    description:
      '帮助企业构建内部数智化经营数据平台，通过数据中台信息化建设、强力支撑商业地产企业数智化转型。',
  },
  {
    title: '商业地产2',
    img: 'https://startdt.com/_nuxt/img/businessicon.69b55b9.png',
    bg: '	https://startdt.com/_nuxt/img/business.84953f3.png',
    description:
      '帮助企业构建内部数智化经营数据平台，通过数据中台信息化建设、强力支撑商业地产企业数智化转型。',
  },
  {
    title: '商业地产3',
    img: 'https://startdt.com/_nuxt/img/businessicon.69b55b9.png',
    bg: '	https://startdt.com/_nuxt/img/business.84953f3.png',
    description:
      '帮助企业构建内部数智化经营数据平台，通过数据中台信息化建设、强力支撑商业地产企业数智化转型。',
  },
  {
    title: '商业地产4',
    img: 'https://startdt.com/_nuxt/img/businessicon.69b55b9.png',
    bg: '	https://startdt.com/_nuxt/img/business.84953f3.png',
    description:
      '帮助企业构建内部数智化经营数据平台，通过数据中台信息化建设、强力支撑商业地产企业数智化转型。',
  },
  {
    title: '商业地产5',
    img: 'https://startdt.com/_nuxt/img/businessicon.69b55b9.png',
    bg: '	https://startdt.com/_nuxt/img/business.84953f3.png',
    description:
      '帮助企业构建内部数智化经营数据平台，通过数据中台信息化建设、强力支撑商业地产企业数智化转型。',
  },
  {
    title: '商业地产6',
    img: 'https://startdt.com/_nuxt/img/businessicon.69b55b9.png',
    bg: '	https://startdt.com/_nuxt/img/business.84953f3.png',
    description:
      '帮助企业构建内部数智化经营数据平台，通过数据中台信息化建设、强力支撑商业地产企业数智化转型。',
  },
]

const IndustrySolution = () => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const groups = getGroups(ITEM_DATA, GROUP_COUNT)

  return (
    <SectionWrapper className={styles.wrapper} title="行业解决方案">
      <div
        className={styles.content}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          className={cn(styles.swiper, 'wrap-width')}
          loop
          navigation={{
            prevEl: '.el-carousel__arrow--left',
            nextEl: '.el-carousel__arrow--right',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {groups.map((group, index) => (
            <SwiperSlide key={index}>
              <div
                className={cn(styles.group, {
                  [styles['group_center']]: group.length !== GROUP_COUNT,
                })}
              >
                {group.map((item) => (
                  <SolutionItem key={item.title} {...item} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={cn('el-carousel__arrow', 'el-carousel__arrow--left', {
            'el-carousel__arrow--left_active': isHover,
          })}
        >
          <i className="el-icon-arrow-left"></i>
        </button>
        <button
          className={cn('el-carousel__arrow', 'el-carousel__arrow--right', {
            'el-carousel__arrow--right_active': isHover,
          })}
        >
          <i className="el-icon-arrow-right"></i>
        </button>
      </div>
    </SectionWrapper>
  )
}

const SolutionItem = ({ title, description, img, bg }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div
      className={styles.itemContainer}
      style={{ backgroundImage: `url(${bg})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles['itemContainer-bgMask']}></div>
      <div className={styles['itemContainer-img']}>
        <Image width="50px" height="50px" src={img} alt="" />
      </div>

      <h4 className={styles['itemContainer-title']}>{title}</h4>
      <div
        className={cn(styles['itemContainer-detail'], {
          [styles['itemContainer-detail_active']]: isHover,
        })}
      >
        <h4 className={styles['itemContainer-detail-title']}>{title}</h4>
        <div className={styles['itemContainer-detail-desc']}>{description}</div>
        <span className={styles['itemContainer-detail-btn']}>查看详情</span>
      </div>
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

export default IndustrySolution
