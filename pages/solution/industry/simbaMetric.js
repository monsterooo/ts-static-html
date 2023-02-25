import LayoutWithNav from '@/components/LayoutWithNav'
import Functions from '@/components/solution/simbaMetric/Functions'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import Architecture from '@/components/solution/simbaMetric/Architecture'
import Advantages from '@/components/solution/simbaMetric/Advantages'
import Scenario from '@/components/solution/simbaMetric/Scenario'
import { Functions_Data, Advantages_Data, Scenario_Data } from '@/constants/const'

const BANNER_IMA = 'https://startdt.com/_nuxt/img/simba_bg.1c69791.jpg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="ThingsWorld"
        description={`致力于行业领先的物联网平台技术提供商。`}
        bgImg={BANNER_IMA}
      />
      <Architecture
        bgUrl={'https://startdt.com/_nuxt/img/platform_banner.6cc6af3.png'}
        title="平台架构"
      />
      <Functions data={Functions_Data} title="核心功能" />
      <Advantages data={Advantages_Data} title="产品优势" />
      <Scenario data={Scenario_Data} title="应用场景" />
    </>
  )
}

Iot.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default Iot
