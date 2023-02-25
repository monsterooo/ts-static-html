import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

function TopBanner() {
  return (
    <div className="home-banner">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="wrap item-box">
            <img className="item-img" src="/static/cdcloud/home_banner01.png" />
            {/*<div className="wrap-width item-release">*/}
            {/*  <img className="text-img-11" src="/static/cdcloud/banner_1117_img.png" />*/}
            {/*  <div>*/}
            {/*    <button className="btn releasebtn origin-btn">*/}
            {/*      <span>*/}
            {/*        <a href="#">大会回看</a>*/}
            {/*      </span>*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </SwiperSlide>
        <SwiperSlide className="wrap item-box">
          <div className="wrap item-box">
            <img className="item-img" src="/static/cdcloud/home_banner02.jpeg" />
            <div className="wrap-width item-describe">
              <h2 className="title">ThingsWorld，客户的数据云</h2>
              <p className="desc">
                提供自主可控的数据平台、丰富易用的效率工具、前瞻专业的全局服务，
                <br />
                以助力客户激发自有数据生产力，在数据商业时代占据制高点。
              </p>
              {/*<button className="btn titleBtn">*/}
              {/*  <span>*/}
              {/*    <a href="#">了解更多</a>*/}
              {/*  </span>*/}
              {/*</button>*/}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TopBanner
