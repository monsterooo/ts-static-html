import LayoutWithNav from '@/components/LayoutWithNav'
import Functions from '@/components/solution/simbaMetric/Functions'
import BannerTitle from '@/components/solution/BannerTitle'
import Architecture from '@/components/solution/simbaMetric/Architecture'
import Advantages from '@/components/solution/simbaMetric/Advantages'
import { Functions_Data, Advantages_Data } from '@/constants/const'

const BANNER_IMA = '/static/cdcloud/iot.jpg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="物联网通过平台"
        description={`致力于行业领先的物联网平台技术提供商。`}
        bgImg={BANNER_IMA}
        consultingLink={'http://donkey-iot.cdcloud.top'}
      />
      <Architecture title={'产品架构'} bgUrl={'/static/cdcloud/iot-jg.png'} />
      <Functions title={'核心技术'} data={Functions_Data} />
      <Advantages title={'产品优势'} data={Advantages_Data} />
    </>
  )
}

Iot.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default Iot
