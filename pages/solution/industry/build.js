import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'
import Architecture from '@/components/solution/simbaMetric/Architecture'

const BANNER_IMA = '/static/cdcloud/build.jpeg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="智慧楼宇"
        description={`人工智能于一般教材中的定义领域是“智能主体的研究与设计”
智能主体指一个可以观察周遭环境并作出行动以达致目标的系统。`}
        bgImg={BANNER_IMA}
      />

      <Architecture title={'产品展示'} bgUrl={'/static/cdcloud/build_zs.png'} />
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
