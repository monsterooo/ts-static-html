import React from 'react'
import cn from 'classnames'
import SectionWrapper from '../SectionWrapper'
import styles from './index.module.scss'
import TabView from '../tabView'

const ITEM_DATA = [
  {
    title: '营收、利润下降',
    description: '受疫情大环境影响，营收及利润下降趋势无法遏制',
  },
  {
    title: '库存积压严重',
    description: '无数据的销售预测模型，进、销、存缺乏协同，商品过期及库存积压严重',
  },
  {
    title: '服务能力弱',
    description: '缺乏会员的深度洞察，对会员生命周期管理缺乏有效的数据管理',
  },
  {
    title: '营销乏力',
    description: '缺乏数字化运营，营销模式单一，会员拉新、复购能力偏弱',
  },
]

const PainPoint = () => {
  return (
    <SectionWrapper title="痛点" bgColor={'#fff'}>
      <TabView tabs={ITEM_DATA} />
      {/* <div className={cn('wrap-width', styles.container)}>
        {ITEM_DATA.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div> */}
    </SectionWrapper>
  )
}

const Item = ({ title, description }) => {
  return (
    <div className={styles['item-container']}>
      <div className={styles['item-title']}>{title}</div>
      <div className={styles['item-desc']}>{description}</div>
    </div>
  )
}

export default PainPoint
