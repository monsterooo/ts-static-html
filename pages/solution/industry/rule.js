import LayoutWithNav from '@/components/LayoutWithNav'
import BannerTitle from '@/components/solution/BannerTitle'
import Architecture from '@/components/solution/simbaMetric/Architecture'
import Functions from '@/components/solution/simbaMetric/Functions'
import { Advantages_Data, Functions_Data } from '@/constants/rule_const'
import Case from '@/components/solution/Case'

const BANNER_IMA = '/static/cdcloud/rule.jpeg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="物联网规则引擎"
        description={`规则引擎是物联网平台的一个重要功能模块，是处理复杂逻辑的引擎，主要对感知层搜集的数据进行处理，实现数据逻辑和上层业务的解耦`}
        bgImg={BANNER_IMA}
      />
      <Architecture title={'产品展示'} bgUrl={'/static/cdcloud/rule-zs.png'} />
      <Functions title={'产品特点'} data={Functions_Data} />
      {/*<Advantages data={Advantages_Data} />*/}

      {/*<PainPoint />*/}
      {/*<Approach />*/}
      {/*<Case />*/}
      {/*<Recommend />*/}
      {/*<IndustrySolution />*/}
    </>
  )
}

Iot.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default Iot
