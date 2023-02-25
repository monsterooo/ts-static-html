import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'
import Functions from '@/components/solution/simbaMetric/Functions'
import { Functions_Data } from '@/constants/dataview_const'
import Architecture from '@/components/solution/simbaMetric/Architecture'

const BANNER_IMA = '/static/cdcloud/dataview.png'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="可视化大屏"
        description={`一站式用户分析与运营平台，为企业提供数字化消费者行为分析洞见，优化数字化触点、用户体验，支撑精细化用户运营，发现业务的关键增长点，提升企业效益`}
        bgImg={BANNER_IMA}
        consultingLink={'http://dataview.cdcloud.top'}
      />
      <Architecture title={'产品展示'} bgUrl={'/static/cdcloud/go-view-canvas.png'} />
      <Functions title={'产品特点'} data={Functions_Data} />

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
