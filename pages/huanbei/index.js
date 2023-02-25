import LayoutWithNav from '@/components/LayoutWithNav'

function HuanBei() {
  return (
    <div className="huanbei">
      <main>
        <div className="page-wrapper">
          <div className="banner">
            <img src="/static/img/huanbei/banner.png" alt="" />
            <div className="banner-wrapper">
              <div className="huanbei containers">
                <a href="https://www.huanbeiloan.com" className="banner-btn">
                  去还呗官网看看
                </a>
              </div>
            </div>
          </div>
          <section className="containers intro">
            <div className="flex-middle">
              <img
                src="/static/img/huanbei/huanbei_icon.png"
                alt="hxh_icon"
                className="inline-block-middle"
                style={{ width: 500, display: 'inline-block', verticalAlign: 'inherit' }}
              />
            </div>
            <p className="intro_detail">
              还呗APP是一款基于消费多场景的分期服务平台，于2016年2月正式进入市场。通过与持牌金融机构合作，为大众提供个人消费信贷服务，并为小微企业主提供贷款资金支持。截止2022年6月底，还呗累计激活用户超1亿，为超过1400万用户提供合理信贷服务，助力用户“好借好还呗”。
            </p>
            <div className="hxh-screen-shot">
              <img
                src="/static/img/huanbei/huanbei-screen-shot.png"
                alt=""
                style={{ width: 300 }}
              />
            </div>
          </section>
          <section className="containers stages">
            <div className="common-title">
              <div className="chinese">还呗 · 产品特点</div>
              <div className="english">PRODUCT FEATURES</div>
            </div>
            <div className="stages_types">
              <div className="stages_types-item inline-block text-center">
                <img src="/static/img/huanbei/img_creditcard.png" alt="icon1_pay" width="84" />
                <h4>服务多</h4>
                <p>个人消费分期</p>
                <p>小微商户借款、分期商城</p>
              </div>
              <div className="stages_types-item inline-block text-center">
                <img src="/static/img/huanbei/img_life.png" alt="icon1_cash" width="84" />
                <h4>额度高</h4>
                <p>额度最高20万</p>
                <p>3/6/12等期限可选</p>
              </div>
              <div className="stages_types-item inline-block text-center">
                <img src="/static/img/huanbei/img_mall.png" alt="icon1_bill" width="84" />
                <h4>放款快</h4>
                <p>平均15分钟审核</p>
                <p>最快1分钟放款</p>
              </div>
              <div className="stages_types-item inline-block text-center">
                <img src="/static/img/huanbei/img_findlife.png" alt="icon1_bill" width="84" />
                <h4>随借随还</h4>
                <p>用户可随心选择</p>
                <p>“随借随还”还款方式</p>
              </div>
            </div>
          </section>
          <section className="containers security">
            <div className="common-title">
              <div className="chinese">多重保护 · 安全有保障</div>
              <div className="english">SECURITY</div>
            </div>
            <div className="security_detail">
              <div className="security_detail_item">
                <h4 className="h4_first">科技驱动的消费金融业务</h4>
                <p>
                  还呗是上海极推科技信息科技有限公司旗下的智能信贷服务平台，并由极推科技科技提供技术服务，秉承普惠、科技、创新的理念，为用户提供专业、安全的信贷服务，促进行业健康发展。
                </p>
              </div>
              <div className="security_detail_item">
                <h4 className="h4_second">信息加密保护</h4>
                <p>
                  在信息安全上，所有的用户资料，都在数据加密后传送给银行系统保存；资料、交易和银行系统通讯除HTTPS和限定IP外，又对应用层做了SSL加密，防范通讯中资料外泄的风险。重重加密保护，为客户的安全保驾护航。
                </p>
              </div>
              <div className="security_detail_item">
                <h4 className="h4_third">专业安全风控</h4>
                <p>
                  在风险管理方面，还呗建立了一整套严格的风险管理流程及风险评价体系，作为支撑信贷决策的基础设施。还呗贯穿全程的实时动态监控技术，能够有效防范操作风险，多层次，全方位保障客户的账户和信息安全。
                </p>
              </div>
            </div>
          </section>
          <section className="containers entry">
            <div className="entry_detail">
              <div className="entry_detail-item inline-block text-center">
                <img src="/static/img/huanbei/ewm_hb_weixin.png" alt="icon1_pay" />
                <div className="name">还呗官方微信</div>
              </div>
              <div className="entry_detail-item inline-block text-center">
                <img src="/static/img/huanbei/ewm_hb_download.png" alt="icon1_bill" />
                <div className="name">下载还呗APP</div>
              </div>
              <div className="entry_detail-item inline-block text-center">
                <img src="/static/img/huanbei/ewm_hb_weibo.png" alt="icon1_bill" />
                <div className="name">还呗官方微博</div>
              </div>
            </div>
            <p className="helper text-center">
              温馨提示：还呗官方人员不会通过个人短信、个人微信等方式联系用户，
              <br />
              请根据个人能力合理借款，理性消费，避免逾期。
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

HuanBei.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default HuanBei
