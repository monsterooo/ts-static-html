import { useEffect } from 'react'
import LayoutWithNav from '@/components/LayoutWithNav'

function About() {
  useEffect(() => {
    window.$(document).ready(function () {
      window.$('.item > a').fancybox()
      window.$('#main > div').hover(function () {
        window.$(this).addClass('show').siblings().removeClass('show')
        // 距离左边边界 + padding值
        var father_left = window.$('#main').offset().left + 20
        var myself = window.$(this).children('.text')
        var myself_left = myself.offset().left
        // 父元素与当前元素距离
        var left_poor = myself_left - father_left
        // 超出父亲元素的宽度
        var beyond_width = left_poor + myself.outerWidth() - window.$('#main').width()
        // 如果超出父元素，则向左平移

        if (beyond_width > 0) {
          myself.css('left', -20 - beyond_width + 'px')
        }
      })
    })
  }, [])

  return (
    <main className="about">
      <section className="banner pos_re">
        <div className="img">
          <img alt="关于我们-愿景版" height="493" src="/static/img/about/banner.png" width="1440" />
        </div>
        <div className="pos_re  container">
          <div className="pos_ab info">
            <h2>极推科技</h2>

            <p>
              极推科技以大数据和技术为驱动，为金融机构提供高效的智能零售金融解决方案，服务银行、信托、消费金融公司、保险、小贷公司等持牌金融机构，业务涵盖消费信贷、小微企业信贷、场景分期等多个领域，提供营销获客、风险防控、运营管理等服务。极推科技通过自主开发的消费信贷产品，连接金融机构与普罗大众，赋能金融机构数字化转型，迎接中国消费升级的大潮。
              <br />
            </p>
          </div>
        </div>
      </section>

      <section className="container-fluid P2 PB96" id="team">
        <div className="row">
          <div className="team container">
            <div className="block-title">
              <span className="chinese">产品介绍</span>
              <span className="english">PRODUCT PRESENTATION</span>
            </div>
            <div className="people">
              <p>
                公司主打产品Evidence，是一款有强大自研AI视觉识别和自然语言处理技术，自动识别各种保险，金融单据的信息，包括保险项目、期间、授信额度等字段，输出结构化文字结果，深度适配近百家保司保单和银行APP
              </p>
              <img src="/static/images/ai.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="PB90 P40 container" id="story">
        <div className="block-title">
          <span className="chinese">极推科技历史</span>
          <span className="english">HISTORY</span>
        </div>
        <div className="main" id="main">
          <div className="show">
            <p>2020/05</p>
            <div className="text">
              <span>极推科技品牌升级</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2019/06</p>
            <div className="text">
              <span>B+轮众为资本及诺亚财富共计3300万美元投资</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2019/04</p>
            <div className="text">
              <span>极推科技获得高新技术企业认定</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2019/02</p>
            <div className="text">
              <span>B轮新浪3000万美元投资</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2018/05</p>
            <div className="text">
              <span>中禾信融资担保(福建)有限公司成立</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2018/05</p>
            <div className="text">
              <span>加入中国互联网金融协会</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2017/11</p>
            <div className="text">
              <span>A轮获得红杉中国，信达香港及诺亚财富3.5亿元投资</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>

          <div>
            <p>2016/03</p>
            <div className="text">
              <span>获得分众传媒亿元天使轮投资，为公司普惠金融助力</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2016/02</p>
            <div className="text">
              <span>"还呗"APP发布上线</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2015/12</p>
            <div className="text">
              <span>"拿铁智投"(原名，拿铁财经)APP首发上线</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
          <div>
            <p>2015/08</p>
            <div className="text">
              <span>极推科技在上海浦东自贸区注册成立</span>
            </div>
            <div className="img"></div>
            <div className="border"></div>
          </div>
        </div>
      </section> */}
      {/* <section className="share P40 container" id="shareholder">
        <div className="block-title">
          <span className="chinese">股东背景</span>
          <span className="english">SHAREHOLDER</span>
        </div>
        <div className="img PB96">
          <img alt="股东logo-0722" height="132" src="/static/img/about/gudong.png" width="1160" />
        </div>
      </section> */}
      <section className="P40 container" id="partner">
        <div className="block-title">
          <span className="chinese">合作伙伴</span>
          <span className="english">PARTNER</span>
        </div>
        <div className="img PB96">
          <img
            alt="20221201_1160_274_origin_logo"
            height="274"
            src="/static/img/about/guanwang.jpg"
            width="1160"
          />
        </div>
      </section>
      {/* <section className="P40 certificate PB90 container" id="certificate">
        <div className="block-title">
          <span className="chinese">资质证书</span>
          <span className="english">QUALIFICATIONS</span>
        </div>
        <ul>
          <li className="item">
            <a href="/static/img/about/img_zizhi2.png">
              <p>互联网金融协会会员证书</p>
            </a>
          </li>
          <li className="item">
            <a href="/static/img/about/img_zizhi3.png">
              <p>高新技术企业证书</p>
            </a>
          </li>
        </ul>
      </section> */}

      <img
        className="to-top"
        src="/static/img/about/to_top.png"
        alt="to-top"
        style={{ display: 'none' }}
      />
    </main>
  )
}

About.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default About
