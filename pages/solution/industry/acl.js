import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'

const BANNER_IMA = '/static/cdcloud/acl.jpeg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="ACL权限控制"
        description={`ACL资源权限`}
        bgImg={BANNER_IMA}
        consultingLink={'http://vue.cdcloud.top'}
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
