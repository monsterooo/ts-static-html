import LayoutWithNav from '@/components/LayoutWithNav'
import Approach from '@/components/solution/Approach'
import BannerTitle from '@/components/solution/BannerTitle'
import Case from '@/components/solution/Case'
import IndustrySolution from '@/components/solution/IndustrySolution'
import PainPoint from '@/components/solution/PainPoint'
import Recommend from '@/components/solution/Recommend'
import Functions from '@/components/solution/simbaMetric/Functions'
import { Functions_Data } from '@/constants/video_const'
import Advantages from '@/components/solution/simbaMetric/Advantages'

const BANNER_IMA = '/static/cdcloud/video.jpeg'

const Iot = () => {
  return (
    <>
      <BannerTitle
        title="流媒体服务"
        description={`基于GB28181-2016标准实现的网络视频平台，支持NAT穿透，支持海康、大华、宇视等品牌的IPC、NVR、DVR接入。支持国标级联，支持rtsp/rtmp等视频流转发到国标平台，支持rtsp/rtmp等推流转发到国标平台`}
        bgImg={BANNER_IMA}
      />

      <Functions data={Functions_Data} />

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
