import { useEffect } from 'react'
import LayoutWithNav from '@/components/LayoutWithNav'

export default function Home({ posts }) {
  useEffect(() => {
    var v = window.$('.to-top')
    window.$(window).scroll(function () {
      window.$(window).scrollTop() >= 900 ? v.show() : v.hide()
    }),
      v.click(function () {
        window.$('html,body').animate(
          {
            scrollTop: 0,
          },
          500
        )
      })
  }, [])

  return (
    <>
      <main>
        <div className="page-wrapper">
          <section className="banner">
            <img
              src="/static/img/index/banner.png"
              alt="banner"
              style={{ width: 1162 }}
              className="img-block img-center"
            />
          </section>
          <section className="company-value text-center">
            <h4>愿景</h4>

            <p>成为全球智能金融科技服务领军企业</p>

            <h4>使命</h4>

            <p>定义智慧金融</p>

            <h4>价值观</h4>

            <p>开放 | 挑战 | 专业 | 创新</p>
          </section>
          <div className="continue-icon">
            <img src="/static/img/index/continue.png" alt="continue" />
          </div>
          <section className="profile text-center">
            <div className="company-intro-icon">
              <p>PROFILE</p>
              <img src="/static/img/index/company_intro.png" width="684" alt="company_intro" />
            </div>
            <div className="company-intro">
              <img className="img" src="/static/img/index/company_intro_bg.png" alt="company" />
              <div className="company-intro-content">
                <div className="company-intro-title">
                  <img className="icon" src="/static/img/index/shuhe_icon1.png" alt="icon" />
                  公司简介
                </div>

                <p>
                  极推科技致力于人工智能在金融领域的产业化，公司凭借自主研发的人工智能核心技术打造了精准的金融类OCR服务算法，全面助力金融风控业务，大大提高贷前审批的精准度和反欺诈效率，赋能智慧金融，智慧风控，帮助客户为小微等高价值金融客群提升高效金融服务。
                </p>
              </div>
            </div>
          </section>

          <section className="news-first">
            <div className="news-graph"></div>
            <div className="news-content">
              <img className="icon" src="/static/img/index/shuhe_icon2.png" alt="icon" />
              公司动态
              <video
                className="video-media"
                preload="“auto”"
                poster="https://lattehtml.lattebank.com/adlink/5anni/videobanner.png"
                src="https://lattehtml.lattebank.com/adlink/Shuhe/5anni/2020.mp4"
                playsinline=""
              >
                <p>对不起，当前环境不支持视频播放!</p>
              </video>
              <div className="video-mask">
                <div className="btn play-btn"></div>
              </div>
            </div>
            <div className="news-title">NEWS</div>
          </section>
          <section className="news-second">
            <div className="news-schedule">1/5</div>
            <div className="date">
              <div>
                <span className="date-day">14.</span>
                <br />
                <span className="date-month">Feb</span>
              </div>
              <img className="icon" src="/static/img/index/news4.png" alt="news" />
            </div>
            <div className="main-content">
              <img className="img" src="/static/img/index/news5.png" alt="news" />
              <div className="pre-btn disabled">
                <img className="icon" src="/static/img/index/to_left.png" alt="news" />
              </div>

              <a
                className="item-content show"
                href="/newsmedias/科技赋能极推科技打造小微企业金融服务市场化长效机制"
              >
                <div className="item-title">
                  科技赋能，极推科技打造小微企业金融服务市场化长效机制
                </div>
                <div className="item-date">Feb. 14, 2023</div>

                <div className="content">
                  极推科技旗下还呗小微贷产品，面向小微企业主提供金融服务近140亿元，涉及超过40万小微用户。
                </div>
              </a>

              <a className="item-content" href="/newsmedias/连获两项发明专利极推科技再添创新硕果">
                <div className="item-title">连获两项发明专利！极推科技再添创新硕果</div>
                <div className="item-date">Feb. 14, 2023</div>

                <div className="content">
                  极推科技自主研发设计的《用于监控告警系统的全链路监控方法及装置》与《数据仓库内表格的血缘关系追溯的方法和装置》两项发明喜获国家知识产权局颁发的发明专利认证，极推科技连续两个月斩获专利认可，技术创新再添硕果！
                </div>
              </a>

              <a
                className="item-content"
                href="/newsmedias/喜讯极推科技荣获2022年中国人才管理创新典范奖"
              >
                <div className="item-title">喜讯！极推科技荣获2022年中国人才管理创新典范奖</div>
                <div className="item-date">Jan. 30, 2023</div>

                <div className="content">
                  极推科技凭借突出的人才战略及人才培养体系，从多家参赛企业中脱颖而出，成功摘得“2022年中国人才管理创新典范奖”称号
                </div>
              </a>

              <a
                className="item-content"
                href="/newsmedias/喜讯极推科技荣获2022年中国人才管理创新典范奖"
              >
                <div className="item-title">喜讯！极推科技荣获2022年中国人才管理创新典范奖</div>
                <div className="item-date">Jan. 30, 2023</div>

                <div className="content">
                  极推科技凭借突出的人才战略及人才培养体系，从多家参赛企业中脱颖而出，成功摘得“2022年中国人才管理创新典范奖”称号
                </div>
              </a>

              <a
                className="item-content"
                href="/newsmedias/极推科技通过中国信通院devops先进级工具评估为数字化发展再添硕果"
              >
                <div className="item-title">
                  极推科技通过中国信通院DevOps先进级工具评估，为数字化发展再添硕果
                </div>
                <div className="item-date">Jan. 4, 2023</div>

                <div className="content">
                  极推科技经过数月精心准备，根据信通院的“可信云”研发运营（DevOps）解决方案的评估标准，分析产品能力与标准的匹配程度，积极准备测试用例，真实环境操作演示，参加信通院现场评测、补充材料解释说明、专家答辩等一系列环节，最终经过专家委员会的综合评定，极推科技自主研发的产研工具BetterCDS在应用开发域的测试中顺利通过可信云-研发运营（DevOps）解决方案先进级工具的评估。
                </div>
              </a>

              <div className="next-btn">
                <img className="icon" src="/static/img/index/to_right.png" alt="news" />
              </div>
            </div>
          </section>

          {/* <section className="honor">
            <div className="honor-main-title">
              <div className="graph"></div>
              HONOR
            </div>
            <div className="honor-bg">
              <img src="/static/img/index/honor_bg.png" alt="honor" />
            </div>
            <div className="honor-title">
              <img className="icon" src="/static/img/index/shuhe_icon1.png" alt="icon" />
              公司荣誉
            </div>

            <img
              className="honor-img"
              src="https://qn.rsrc.focus-eloan.com/materialCenter/0fd6f785-c9a1-4147-bf9a-afe7c9167416.jpg"
              alt="honor"
            />

            <div className="graph-bottom"></div>
          </section> */}
          <br />
          <br />
          <br />

          <section className="strengths">
            <div className="title">
              <div className="graph">
                <div className="small"></div>
                <div className="big"></div>
              </div>
              STRENGTHS
            </div>
            <div className="strength-item">
              <img className="img" src="/static/img/index/strength_first.png" alt="strength" />
              <div className="text">
                <div className="strength-title">
                  <img className="icon" src="/static/img/index/shuhe_icon1.png" alt="icon" />
                  核心优势
                </div>
                <p className="title">智能获客</p>
                <p>
                  依靠自主研发的营销管理平台，可实现多渠道、多媒介、多形式的精细化投放，进行大数据追踪，汇集全网流量，获取精准的用户画像，从而影响前端投放策略，提高获客效率；
                </p>
              </div>
            </div>

            <div className="strength-item">
              <img className="img" src="/static/img/index/strength_third.png" alt="strength" />
              <div className="text">
                <p className="title">智能客服</p>
                <p>
                  运用极推科技积累多年的自然语言处理、知识图谱等技术，凭借在借贷及理财业务的多年实践经验，打造了人工智能驱动的定制化金融业务客服系统，24小时随时响应咨询，无缝衔接人工服务；
                </p>
              </div>
            </div>
            <div className="strength-item">
              <img className="img" src="/static/img/index/strength_four.png" alt="strength" />
              <div className="text">
                <p className="title">智能催收</p>
                <p>
                  在贷后管理中，根据逾期用户所处的不同阶段执行多种催收策略，利用知识图谱、语音识别等技术通过机器人催收，利用信息修复等技术有效处理历史业务；
                </p>
              </div>
            </div>
          </section>

          <img
            className="to-top"
            src="/static/img/index/to_top.png"
            alt="to-top"
            style={{ display: 'none' }}
          />
        </div>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}
