import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Users from '@/components/home/users'

function Testimony() {
  return (
    <div className="testimony">
      <div className="customer-testimony wrap-width">
        <div className="common-title">
          <h2 className="title">客户案例</h2>
          <p className="tips">用技术改变生产方式</p>
        </div>

        <Swiper
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="testimony-swiper"
        >
          <SwiperSlide>
            <div className="energy-content">
              <div
                className="energy-banner"
                style={{ backgroundImage: 'url(/static/cdcloud/kaideBanner.jpg)' }}
              >
                <div>
                  <div className="introduce">
                    <p className="title">家庭算力</p>
                    <div className="des-content">
                      <div className="desc">
                        2022年10月，ThingsWorld助力家庭网络设备中台。简单来说，我们与千万家庭一起做了3件事：数据私有化，数据服务化，数据业务化。从而改变了数据的安全性。
                      </div>
                    </div>
                    <div className="detail-btn">
                      <span className="text">了解更多</span>
                      <span className="arrow" />
                    </div>
                  </div>
                </div>
                <div className="page">
                  <p className="page-box">
                    01/
                    <span className="total">04</span>
                  </p>
                  <img src="/static/cdcloud/logo_w.png" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/*<Users />*/}
      </div>
    </div>
  )
}

export default Testimony
