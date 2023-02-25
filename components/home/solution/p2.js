function P2() {
  return (
    <div className="hot-products">
      <div className="left-item">
        <div className="inside-box">
          <img src="/static/cdcloud/logo_w.png" />
          <p>支持多渠道的消息推送平台</p>
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
            <div style={{ lineHeight: '33px' }}>设备管理平台</div>
            <p>海量设备接入</p>
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
            <p>可视化规则编排平台</p>
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
            <p>TLS转发服务</p>
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
            <p>智慧楼宇解决方案</p>
            <button className="btn">
              <span>查看详情</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default P2
