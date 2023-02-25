import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'
import Functions from '@/components/solution/simbaMetric/Functions'
import { Functions_Data } from '@/constants/rule_const'
import Architecture from '@/components/solution/simbaMetric/Architecture'

const BANNER_IMA = '/static/cdcloud/ota.jpg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="OTA 远程升级"
        description={`压缩比领先的OTA远程升级差分算法、 支持断电保护、FLASH坏块处理、断点续传、OMA-DM国际协议； 跨平台能力强大`}
        bgImg={BANNER_IMA}
      />
      <Architecture title={'产品展示'} bgUrl={'/static/cdcloud/ota-zs.png'} />
      <Functions title={'产品优势'} data={Functions_Data} />
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
