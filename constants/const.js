export const Functions_Data = [
  {
    title: '多协议支持',
    description: '支持主流物联网协议及插件扩展，并配套若干款边缘硬件网关实现工业协议接入。',
    img: 'https://startdt.com/_nuxt/img/core_1@2x.d407451.jpg',
    id: 1,
  },
  {
    title: '高性能高可靠',
    description:
      '支持大规模分布式部署，千万级设备连接和数十万级 QPS 请求处理能力，毫秒级延迟，可支撑海量物联网设备接入需求。',
    img: 'https://startdt.com/_nuxt/img/core_2@2x.91f5408.jpg',
    id: 2,
  },
  {
    title: '网络透明',
    description:
      '支持各种蜂窝网络（2G、3G、4G/NB-IoT） 、有线网络和无线网络，亦能支持 5G 中的 mMTC（海量物联）和 uRLLC（高可靠低时延）两大场景。',
    img: 'https://startdt.com/_nuxt/img/core_2@2x.91f5408.jpg',
    id: 3,
  },
  {
    title: '数据持久化和实时分析',
    description:
      '内置高性能分布式时序数据库，支持海量数据的持久化和实时分析，也支持与用户提供的数据库、大数据平台或消息列对接，方便用户对数据进行存储与消费。',
    img: 'https://startdt.com/_nuxt/img/core_4@2x.9d0f79f.png',
    id: 4,
  },
  {
    title: '跨平台可伸缩',
    description:
      '既能以数百台规模的超大集群架构运行，也可以在超小配置上运行，并支持以公有云、私有云、物理机及 Docker 容器和 K8S 等方式进行灵活部署。',
    img: 'https://startdt.com/_nuxt/img/core_4@2x.9d0f79f.png',
    id: 5,
  },
  {
    title: '规则引擎',
    description:
      '提供基于 SQL 的高速规则引擎，支持用户设置复杂规则实时过滤海量数据，减少应用侧压力，使客户聚焦业务开发。',
    img: 'https://startdt.com/_nuxt/img/core_4@2x.9d0f79f.png',
    id: 6,
  },
]

export const Advantages_Data = [
  {
    title: '设备接入',
    description:
      '提供设备端SDK，快速连接设备上云，效率高。同时支持全球设备接入、异构网络设备接入、多环境下设备接入和多协议设备接入。',
    img: 'https://startdt.com/_nuxt/img/icon4.8053181.png',
    id: 1,
  },
  {
    title: '性能',
    description: '具有百万级设备的长连接能力、百万级并发处理能力，架构支撑水平性扩展。。',
    img: 'https://startdt.com/_nuxt/img/icon1.6e610dc.png',
    id: 2,
  },
  {
    title: '安全',
    description:
      '提供多重防护，保障设备数据安全。设备认证保障设备安全与唯一性。传输加密保障数据不被篡改。',
    img: 'https://startdt.com/_nuxt/img/icon2.6f9abfb.png',
    id: 3,
  },
  {
    title: '简单易用',
    description: '一站式设备管理，实时监控设备运行状态。快速、灵活、简便的搭建复杂物联网应用。',
    img: 'https://startdt.com/_nuxt/img/icon2.6f9abfb.png',
    id: 4,
  },
]

export const Scenario_Data = [
  {
    title: '泛零售',
    painPoints:
      '零售业务结构复杂，数仓规划较不合理，数据中间层过度臃肿，数据表冗余情况严重，数据时效差。split_;数据指标定义不规范，二义性、重复建设等问题，加大了运营分析部门获取准确数据的难度，导致决策效率低。split_;不同管理层关注数据的维度不同，数据报表过度依赖人工重复开发。',
    solution:
      '以业务调研与分析为基础，创建制造业数据标准和规范命名，形成标准化的数据指标和模型。split_;基于规范建模、指标定义模块，以低代码的方式实现业务模型和指标体系的构建。split_;通过创建规范的数仓分层，优化数据任务血缘，改善数据质量，加速激活企业数据价值。',
    img: 'https://startdt.com/_nuxt/img/tagList_banner3.a9437cb.png',
    id: 1,
  },
  {
    title: '金融',
    painPoints:
      '金融企业在经营过程中沉淀了大量异构数据，数仓设计分层不合理，数据任务冗余严重。split_;金融企业分支机构众多，分散在各地，在数据分发和使用时，对数据标准一致性有更高的要求。split_;数据应用场景设计混乱，数据表与分析主题易相互交叉混淆。',
    solution:
      '根据金融行业特点，对业务层划分数据分类的同时，完成物理层的分层设计，形成合理的上下游任务层，减少数据冗余和任务过度依赖，优化任务血缘。split_;梳理金融领域的应用场景，结合业务流程中的实际痛点和问题，确定分析主题及围绕每个主题的应用模型。split_;创建金融行业数据标准和规范命名，在建模和指标定义时，形成统一、无二义性的数据指标和模型。',
    img: 'https://startdt.com/_nuxt/img/tagList_banner2.a5b6a48.png',
    id: 2,
  },
  {
    title: '制造业',
    painPoints:
      '制造业数字化建设涉及多方部门，组织间数据孤岛问题显著，对数据的统一与规范化需求更高。split_;面对复杂的业务数据，企业数据团队需要更多低代码的产品工具来支撑，以降低技术门槛。split_;数仓设计方案陈旧、任务设计不规范等问题，已对制造业数字化转型、业务创新升级产生了制约和阻碍。',
    solution:
      '以业务调研与分析为基础，创建制造业数据标准和规范命名，形成标准化的数据指标和模型。split_;基于规范建模、指标定义模块，以低代码的方式实现业务模型和指标体系的构建。split_;通过创建规范的数仓分层，优化数据任务血缘，改善数据质量，加速激活企业数据价值。',
    img: 'https://startdt.com/_nuxt/img/tagList_banner1.b3a0464.png',
    id: 3,
  },
]
