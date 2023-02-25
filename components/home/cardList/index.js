function CardList() {
  return (
    <div className="suspension-container">
      <div className="suspension-box">
        <div className="items item1">
          <p className="items-p1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            趋势报告
          </p>
          <h3 className="items-h2">《物联网趋势报告 2023》发布</h3>
          <p className="items-p2">解读物联网平台的未来</p>
          <a href="#">
            <button className="btn items-btn">
              <span>免费下载</span>
            </button>
          </a>
        </div>

        <div className="items item2">
          <p className="items-p1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            产品动态
          </p>
          <h3 className="items-h2">物联网规则引擎Donkey-Rule发布</h3>
          <p className="items-p2">可视化、场景联动、数据转发</p>
          <a href="#">
            <button className="btn items-btn">
              <span>了解详情</span>
            </button>
          </a>
        </div>

        <div className="items item3">
          <p className="items-p1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            案例推荐
          </p>
          <h3 className="items-h2">家庭Nas云</h3>
          <p className="items-p2">全链路、全场景解决方案，成为业务助推器</p>
          <a href="#">
            <button className="btn items-btn">
              <span>更多案例</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardList
