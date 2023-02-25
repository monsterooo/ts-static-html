import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'

const BANNER_IMA = '/static/cdcloud/message.jpeg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="消息推送平台"
        description={`统一的接口发送各种类型消息，对消息生命周期全链路追踪。于对功能的收拢，以及提高业务需求开发的效率`}
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
