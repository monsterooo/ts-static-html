import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import cn from 'classnames'
import SectionWrapper from '../SectionWrapper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './index.module.scss'
import Image from 'next/image'
import { NEXT_ICON, PRE_ICON } from '../constants'
import { title } from '@/data/siteMetadata'

const ITEM_DATA = [
  {
    title: 'lululemon',
    description: [
      '依托DataSimba，完成数据集成、指标研发及离线计算。对不同来源的数据进行口径统一、流程规范和整理加工，通过数据服务便利地提供给上层应用。采集、加工数据的流程更加规范，数据加工效率大幅提升。',
      '企业可在次日及时了解前一天的营收情况，便于快速调整运营策略，用数据驱动业务。',
    ],
    icon: (hover) =>
      hover
        ? 'https://startdt.com/_nuxt/img/lululemon_hover.4c672e9.png'
        : 'https://startdt.com/_nuxt/img/lululemon.002f577.png',
    img: 'https://startdt.com/_nuxt/img/lululemon-bg.897550c.png',
    key: '1',
  },
  {
    title: '上海电信',
    description: [
      '依托DataSimba，上海电信打通多个系统，联结复杂场景，沉淀数据资产；',
      '搭建前端数据应用中台，实现能力的高水平复用；建立大数据标签体系，真正「以人为中心」来考量商品企划、营销和服务，用数据赋能商品与消费者运营。',
    ],
    icon: (hover) =>
      hover
        ? 'https://startdt.com/_nuxt/img/dian_hover.a8fa50b.png'
        : 'https://startdt.com/_nuxt/img/logodian.c69799b.png',
    img: 'https://startdt.com/_nuxt/img/bannerdian.c997513.jpg',
    key: '2',
  },
  {
    title: '卓诗尼',
    description: [
      '依托DataSimba，整合POS、CRM、SAP、线上商城、老CRM、老商城等多个系统及历史备份数据，搭建数据模型，形成完整的会员全域数据库，并为会员标签体系做好充分的数据准备。',
      '配合客户数据平台，实现更精准的活动投放及更低的市场费用，同时票券、营销活动的触达转化率不断刷新历史记录，三个月内触达转化率就从1%左右提升到了3%-6%，最高到了8%。',
    ],
    icon: (hover) =>
      hover
        ? 'https://startdt.com/_nuxt/img/zhuoshini-hover.bd6ce92.png'
        : 'https://startdt.com/_nuxt/img/zhuoshini.ac5a932.png',
    img: 'https://startdt.com/_nuxt/img/zhuoshiniBanner.42050ef.jpg',
    key: '3',
  },
  {
    title: '杭州未来科技城',
    description: [
      '作为智慧政务的先行者，杭州未来科技城2017年启动了「未来科技城企业数据大脑」，重构了大数据时代的政企关系，探索出了符合数字经济时代的政府服务企业的新路径。',
      '“企业数据大脑”是奇点云自研的政务大数据平台，以DataSimba为底座，打破了各部门单位间的数据壁垒，融合了辖区内多源企业数据，实现地区经济发展的多维分析、智能判断、趋势预测等。',
      '其中，“1+N”建设模式（1个共建共享的大脑，叠加N个部门、N个场景的业务应用）让未来科技城快速响应需求，快速推出了企业复工平台、企业服务新干线等智能应用，让企业服务更加精准及时、人性合理。',
    ],
    icon: (hover) =>
      hover
        ? 'https://startdt.com/_nuxt/img/kejicheng-hover.a2ff5af.png'
        : 'https://startdt.com/_nuxt/img/kejicheng.b7d3fe6.png',
    img: 'https://startdt.com/_nuxt/img/kejichengBanner.d0e4094.jpg',
    key: '4',
  },
]
const TITLE_TIP_IMG = 'https://startdt.com/_nuxt/img/quotation.795d468.png'

const Case = () => {
  const [showIndex, setShowIndex] = useState(0)
  const [currentItem, setCurrentItem] = useState(ITEM_DATA[0])

  console.log({ showIndex })
  const CaseItem = ({ item }) => {
    const { title, description, service, img, icon } = item
    return (
      <div
        className={cn(styles['item'], { [styles.itemActive]: item.key == currentItem.key })}
        onMouseEnter={() => setCurrentItem(item)}
      >
        <div className={styles['item-type']}>
          <img src={icon(item.key == currentItem.key)} />
          <p className={item.key !== currentItem.key ? styles.name : styles.nameHover}>{title}</p>
        </div>
      </div>
    )
  }
  return (
    <SectionWrapper title="客户案例">
      <div className={styles['energy-content']}>
        <div className={styles['energy-content-over']}>
          <div
            style={{ backgroundImage: `url(${currentItem.img})` }}
            className={styles['energy-banner']}
          >
            <div className={styles.introduce}>
              <p className={cn('mb-6', styles.title)}>{currentItem.title}</p>
              <div className={styles['desc-content']}>
                <div className={styles['desc']}>
                  {currentItem.description.map((i, idx) => {
                    return (
                      <p className="mb-10" key={idx}>
                        {i}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={styles['page']}>
              <p className={styles['page-box']}>
                {currentItem.key}0<span className={styles['totle']}>/0{ITEM_DATA.length}</span>
              </p>
              <img src={currentItem.icon(true)} />
            </div>
          </div>
        </div>
        <div className={styles['energy-list']}>
          {ITEM_DATA.map((item, index) => {
            return <CaseItem item={item} key={index} />
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Case
