import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'

const BANNER_IMA = '/static/cdcloud/application.jpg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="应用市场"
        description={`应用分发平台，通过开发者实名认证、四重安全检测等机制保障安全。提供全品类精品应用，让您畅享全场景、多终端、高品质的应用和内容体验`}
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
