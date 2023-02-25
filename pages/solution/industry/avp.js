import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'

const BANNER_IMA = '/static/cdcloud/avp.jpg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="代客自主泊车"
        description={`解决客户最后一公里停车难的问题。`}
        bgImg={BANNER_IMA}
      />

      <PainPoint />
      <Approach />
      <Case />
      <Recommend />
      <IndustrySolution />
    </>
  )
}

Iot.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default Iot
