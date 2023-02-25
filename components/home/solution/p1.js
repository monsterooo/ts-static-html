function P1() {
  return (
    <div className="hot-products">
      <div className="left-item">
        <div className="inside-box">
          <img src="/static/cdcloud/logo_w.png" />
          <p>安全、稳定易用的物联网云平台</p>
          <button className="btn">
            <span>查看详情</span>
          </button>
        </div>
      </div>
      <div className="right-items">
        <div
          className="right-item"
          style={{ backgroundImage: `url("/static/cdcloud/hot_img_2.png")` }}
        >
          <div className="inside-box">
            <div style={{ lineHeight: '33px' }}>证书管理平台</div>
            <p>提供基于密码技术的服务区分、标识、鉴别参与方身份/身份认证、电子签名/数据加密</p>
            <button className="btn">
              <span>查看详情</span>
            </button>
          </div>
        </div>

        <div
          className="right-item"
          style={{ backgroundImage: `url("/static/cdcloud/hot_img_3.png")` }}
        >
          <div className="inside-box">
            <img src="/static/cdcloud/maleon_img_logo.png" />
            <p>数据可视化开发平台</p>
            <button className="btn">
              <span>查看详情</span>
            </button>
          </div>
        </div>

        <div
          className="right-item"
          style={{ backgroundImage: `url("/static/cdcloud/hot_img_4.png")` }}
        >
          <div className="inside-box">
            <img src="/static/cdcloud/kun_img_logo.png" />
            <p>支持多协议接入的消息网关</p>
            <button className="btn">
              <span>查看详情</span>
            </button>
          </div>
        </div>

        <div
          className="right-item"
          style={{ backgroundImage: `url("/static/cdcloud/hot_img_5.png")` }}
        >
          <div className="inside-box">
            <img src="/static/cdcloud/hubble_img_logo.png" />
            <p>企业级开发一站式解决方案</p>
            <button className="btn">
              <span>查看详情</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default P1
