import Image from 'next/image'
import React from 'react'
import cn from 'classnames'
import SectionWrapper from '../SectionWrapper'
import styles from './index.module.scss'

const ITEM_DATA = [
  {
    title: '跨平台',
    description: [
      '企业可以使用统一的账号权限体系，对多个 IaaS 云基础设施、多个 Workspace（域）进行管理，实现分级多域、跨云跨平台部署，提升企业的协作与管控效率。',
    ],
    img: 'https://startdt.com/_nuxt/img/core_1@2x.d407451.jpg',
  },
  {
    title: '云原生',
    description: [
      '具备微服务、容器化编排、存算分离、CI/CD（持续集成持续交付）等云原生技术特性，优化架构，为企业降低数据应用在云上的存算与计算成本，提升研发效率',
      '适配海内外主流云厂商，支持多云多引擎，实现“客户的云原生。',
    ],
    img: 'https://startdt.com/_nuxt/img/core_2@2x.91f5408.jpg',
  },
  {
    title: '自主可控',
    description: [
      '向下搭载自主可控的数据存算引擎 DataKun，帮助企业快速构建智能化、轻量级的大数据基础平台，建立其自有的大数据分析处理能力。',
      'DataKun 技术可控、成本可控，1 小时内完成部署，3 分钟可完成集群创建，全面应对多种数据应用场景。',
    ],
    img: 'https://startdt.com/_nuxt/img/core_2@2x.91f5408.jpg',
  },
  {
    title: '数据安全',
    description: [
      '内置数据安全引擎DataBlack，以数据为中心，支持企业智能、高效地完成数据全生命周期安全管控，为企业数据资产护航。',
    ],
    img: 'https://startdt.com/_nuxt/img/core_4@2x.9d0f79f.png',
  },
]

const Approach = () => {
  return (
    <SectionWrapper title="核心技术">
      <div className="flex w-full flex-wrap justify-between gap-8">
        {ITEM_DATA.map((item, index) => (
          <ApproachItem key={item.title} {...item} reverse={index % 2 !== 0} />
        ))}
      </div>
    </SectionWrapper>
  )
}

const ApproachItem = ({ title, description, img, reverse }) => {
  return (
    <div className={cn(styles['card-box'])}>
      <div className={styles['img-box']}>
        <img src={img} />
      </div>
      <div className={styles['desc-box']}>
        <div className={styles['title-box']}>
          <p className={styles['core-title']}>{title}</p>
        </div>
        <div className={styles['core-desc']}>
          {description?.map((i, idx) => {
            return (
              <p className="mb-1" key={idx}>
                {i}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Approach
