import { useEffect } from 'react'
import LayoutWithNav from '@/components/LayoutWithNav'

function Newsmedias() {
  useEffect(() => {
    window.$().ready(function () {
      const hash = window.location.hash
      const $liList = window.$('.tab li')
      let hasActive = false
      $liList.removeClass('active')
      $liList.each(function () {
        if (window.$(this).data('tab-target') === hash) {
          window.$(this).addClass('active')
          hasActive = true
        }
      })

      window.$('.tab-pane').removeClass('active in')

      if (!hasActive) {
        $liList.eq(0).addClass('active')
        window.$($liList.eq(0).data('tab-target')).addClass('active in')
      } else {
        window.$(hash).addClass('active in')
      }

      window.$('.tab').on('click', 'li', function (ev) {
        window.$(ev.target).siblings().removeClass('active').end().addClass('active')
        window.$(ev.target).closest('.tab').next().find('.tab-pane').removeClass('active in')
        window.$(window.$(ev.target).data('tab-target')).addClass('active in')
      })
    })
  }, [])

  return (
    <main className="news">
      <section className="P0">
        <img className="hidden-xs" src="/static/img/news/banner.png" alt="" />
        <div className="hidden-xs banner-info">极推科技，就在身边</div>
      </section>
      <section className="P1 container">
        <ul className="tab row cleafix">
          <li className="active" style={{ marginLeft: 0, paddingLeft: 0 }} data-tab-target="#news">
            媒体报道
          </li>

          <li data-tab-target="#profession" style={{ marginLeft: 0, paddingLeft: 0 }}>
            行业认可
          </li>
          <li data-tab-target="#story" style={{ marginLeft: 0, paddingLeft: 0 }}>
            用户故事
          </li>
          <li data-tab-target="#tech" style={{ marginLeft: 0, paddingLeft: 0 }}>
            技术交流
          </li>
        </ul>
        <div className="tab-content">
          <div id="news" className="tab-pane fade active in">
            <a href="/newsmedias/科技赋能极推科技打造小微企业金融服务市场化长效机制">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Tu_Pian_.width-800.jpg"
                    width="550"
                    height="309"
                    alt="1"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    科技赋能，极推科技打造小微企业金融服务市场化长效机制
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Feb. 14, 2023</h6>
                    <h6 className="source">中新网</h6>
                  </div>
                  <p className="intro">
                    极推科技旗下还呗小微贷产品，面向小微企业主提供金融服务近140亿元，涉及超过40万小微用户。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/还呗支持斜杠青年奔赴自信的向上人生">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">还呗支持斜杠青年奔赴自信的向上人生</h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 15, 2022</h6>
                    <h6 className="source">北青金融</h6>
                  </div>
                  <p className="intro">
                    随着互联网的进步，“斜杠青年”早已不是新鲜词，当代职业的多元化趋势更是鼓励青年人通过尝试的不同工作实现自我的社会价值。面对这样向上的人生追求，消费信贷服务平台还呗也正以每年上千次的技术迭代速率去覆盖更多有资金需求的青年人，致力于以先进的金融科技服务击碎因资金流转不畅而影响青年人追求向上的绊脚石。也正因如此，还呗得到了许多向上青年们的信任。2022年，还呗注册用户中近一半的用户是35岁以内的青年人。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/喜报-极推科技斩获第六届星斗奖年度数据驱动先锋企业行业创新企业奖">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/1.width-800.png"
                    width="800"
                    height="810"
                    alt="星斗奖"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    喜报| 极推科技斩获第六届“星斗奖”年度数据驱动先锋企业——行业创新企业奖
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 7, 2022</h6>
                    <h6 className="source">网易新闻</h6>
                  </div>
                  <p className="intro">
                    极推科技凭借其系统化的数据认知、精细化的数字经营、多场景的数字创新以及深入的数字化应用四个维度上的先进性从众多候选企业中脱颖而出，斩获神策2022年第六届“星斗奖”年度数据驱动先锋企业——行业创新企业奖。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技七周年数智赋能推动普惠金融守正创新">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/999BA457-15F6-4584-82F6-171DF38F24FD-33565-000.width-800.png"
                    width="751"
                    height="4570"
                    alt="极推科技七周年"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技七周年「数智赋能，推动普惠金融守正创新」
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Aug. 3, 2022</h6>
                    <h6 className="source"></h6>
                  </div>
                  <p className="intro"></p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/好借好还呗品牌大事记">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Huan_Bai_Da_Shi_Ji_-Ya_Suo_Ban_.width-800.jpg"
                    width="750"
                    height="5905"
                    alt="还呗大事记"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">「好借好还呗」品牌大事记</h4>
                  <div className="clearfix">
                    <h6 className="date">June 28, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    还呗一路走来初心不改——始终希望可以通过更好借更好还的好服务给广大用户提供资金支持，值此品牌理念升级之际让我们一起来回顾一下还呗的成长历程[加油]～
                    而在未来我们将继续砥砺前行，以“好借好还呗”作为努力奋斗的目标，坚持通过不断迭代还呗的流程和体验，让用户感受到好借好还的便利和美好～
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/政企再合作-共建反诈屏障">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/BPM-Fu_Zhou_Fan_Zha_0620_XYHJFVv.width-800.jpg"
                    width="750"
                    height="3705"
                    alt="政企"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">政企再合作 共建反诈屏障</h4>
                  <div className="clearfix">
                    <h6 className="date">June 24, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    极推科技联合旗下中禾信融资担保（福建）有限公司携手福建省地方金融监督管理局、福建市地方金融监督管理局以及福建市鼓楼区金融工作办公室共同开展以“守住钱袋子
                    护好幸福家”为主题的系列反诈宣传活动。未来极推科技将继续发挥了行业&amp;科技优势，全方位帮助用户筑牢反诈防线，有效守护大众的“钱袋子”
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/好借好还呗-还呗服务新升级助力普惠金融生态发展">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">好借好还呗 还呗服务新升级助力普惠金融生态发展</h4>
                  <div className="clearfix">
                    <h6 className="date">June 15, 2022</h6>
                    <h6 className="source">搜狐</h6>
                  </div>
                  <p className="intro">
                    近期经济利好政策密集出台,要求把稳增长放在更加突出位置,着力保市场主体以保就业保民生,保护中国经济韧性。还呗主动响应金融政策要求,发布“好借好还呗”全新产品主张,以更便捷、更优惠的普惠金融优质供给,为小微创业者、长尾用户及时“输血”,帮助更多微观个体缓解经济下行压力。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技全面推进乡村振兴的数字样板">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">极推科技，全面推进乡村振兴的数字样板</h4>
                  <div className="clearfix">
                    <h6 className="date">June 14, 2022</h6>
                    <h6 className="source">网易新闻</h6>
                  </div>
                  <p className="intro">
                    面对乡村振兴新形势、新要求,以极推科技为例的金融机构在不断加快探索脚步,立足自身科技实力,致力于打造出服务乡村振兴的新型数字金融业务。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/数字化技术赋能风控体系还呗保护用户经济身份证">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    数字化技术赋能风控体系，还呗保护用户“经济身份证”
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">May 26, 2022</h6>
                    <h6 className="source">搜狐网</h6>
                  </div>
                  <p className="intro">
                    作为一家坚持“科技创新”、“用户至上”的消费信贷平台，还呗积极利用数字化赋能全链风控体系，借助一整套严格的风险管理系统及风险评价体系为用户保驾护航，准确评估借款人情况，保护用户征信安全，减少逾期风险，同时更加准确地识别用户闪光点，提供与之资质相匹配的更好的产品服务。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技走进高校与交大联合促进金融人才培养">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技走进高校，与交大联合促进金融人才培养
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">May 20, 2022</h6>
                    <h6 className="source">网易新闻</h6>
                  </div>
                  <p className="intro">
                    极推科技受邀参加上海交通大学2022年度《金融服务计算》实践课,通过项目+讲座+考核的形式,为交大计算机科学与工程系的研究生启动相关课题。与极推科技一同受邀参加该课题的还有摩根士丹利、上证所信息网络有限公司、联合金融、optiver和富国基金等业内顶尖机构。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技产学合作新典范让普惠金融照亮每一个时代新市民">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技产学合作新典范，让普惠金融照亮每一个时代“新市民”
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">May 6, 2022</h6>
                    <h6 className="source">新浪网</h6>
                  </div>
                  <p className="intro">
                    作为小微信贷行业先行者,极推科技始终践行“金融向善”、普惠金融,响应政策号召,将“新市民”等小微个体纳入普惠金融服务范围之内,提供便捷、灵活、有温度的金融服务。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技进交大-教学相长共进步">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Xiao_Qi_Lian_He_BPM.width-800.jpg"
                    width="750"
                    height="3483"
                    alt="1"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技进交大 教学相长共进步</h4>
                  <div className="clearfix">
                    <h6 className="date">April 25, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    2022年极推科技受邀成为上海交通大学计算机科学与工程系实践课项目合作单位。极推科技CTO陈东、CRO陈曦与多位领域专家以客座导师身份深度参与，该项目课程深受交大校方和学生的双方好评。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/禾力守沪-极推科技在行动">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/He_Li_Shou_Hu__Shu_He_Zai_Xing_Dong_.width-800.jpg"
                    width="750"
                    height="3850"
                    alt="1"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">【禾】力守“沪” ，极推科技在行动</h4>
                  <div className="clearfix">
                    <h6 className="date">April 22, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    面对严峻的复杂疫情形势，极推科技五师们关键时刻挺身而出。我们在社区里发光发热服务大众，将五师精神和专业技能充分运用在抗疫之中，将心中的美好化作实际行动，真正将服务的初心从工作延续到生活中！
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技2022年q1季刊">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/2022Ji_Kan_-Di_Yi_Ji_Du_.width-800.png"
                    width="750"
                    height="5747"
                    alt="2022年Q1季刊"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技2022年Q1季刊</h4>
                  <div className="clearfix">
                    <h6 className="date">April 14, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">极推科技2022年Q1季刊</p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/还呗以向上力量服务新市民实现向上梦想">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技旗下还呗以“向上”力量服务新市民实现“向上”梦想
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">March 2, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    3月2日，国务院新闻办公室就促进经济金融良性循环和高质量发展有关情况举行发布会，银保监会主席郭树清在发布会上透露，银保监会、人民银行将联合下发文件，文件主题思想即为做好“新市民”服务工作。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技2021年esg报告暨年度总结">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Xiao_Tu_-Shu_He_2021Nian_Du_Zong_Hui_Chang_Tu_.width-800.jpg"
                    width="800"
                    height="8454"
                    alt="新图-年度盘点ESG报告"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技2021年ESG报告暨年度总结</h4>
                  <div className="clearfix">
                    <h6 className="date">Jan. 12, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    回顾2021年，围绕「环境友好」、「回馈社会」和「公司治理」三方面，极推科技所做的工作和成绩。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技荣登2021真榜-中国最具投资价值创新企业排行榜">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技荣登「2021真榜-中国最具投资价值创新企业排行榜」
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 15, 2021</h6>
                    <h6 className="source">财经网</h6>
                  </div>
                  <p className="intro">
                    12月14日，铅笔道发布了「2021真榜-中国最具投资价值创新企业排行榜」。极推科技凭借在金融科技赛道所表现出来的技术优势和创新能力，从众多优秀企业中脱颖而出，荣登「2021最具投资价值企业榜单-科技赛道最具投资价值TOP30」。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技喜获投资时报2021年度卓越金融科技公司">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技喜获《投资时报》2021年度“卓越金融科技公司”
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 6, 2021</h6>
                    <h6 className="source">财经网</h6>
                  </div>
                  <p className="intro">
                    2021年12月1日，由标点财经研究院联合《投资时报》主办的“见未来
                    2021第四届资本市场高峰论坛暨金禧奖年度颁奖盛典”隆重举行。在会上，“金禧奖”2021年度获奖名单也随之揭晓。经过激烈的竞争与遴选，极推科技凭借其在智能科技领域的强大实力及优质金融服务输出和创新能力，荣获“金禧奖”“2021卓越金融科技公司”。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技让金融服务更有温度-还呗ip还小呗助力用户坚持向上价值观">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/934854F3-9F7C-4a66-BD44-E2EE45A38BF0.width-800.png"
                    width="800"
                    height="451"
                    alt="还小呗"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技让金融服务更有温度 还呗IP“还小呗”助力用户坚持“向上”价值观
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Nov. 16, 2021</h6>
                    <h6 className="source">北青网</h6>
                  </div>
                  <p className="intro">
                    近日，还呗IP形象“还小呗”正式上线。据介绍，还小呗源于母公司极推科技主logo，蕴含着自身即带有金融标签和科技基因。作为一家坚持以用户为中心的消费信贷平台，还呗自身从诞生以来就秉持“亲近用户”理念，在满足用户金融服务需求的基础上，不断贴近用户，提供更灵活、更便捷、更高效的分期生活服务，而还小呗的形象也与还呗客服高效、贴心、精准的定位相匹配。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技cto陈东应邀参加qcon全球软件开发者大会">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Tu_Pian__1.width-800.png"
                    width="725"
                    height="481"
                    alt="东哥活动照片"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技CTO陈东应邀参加QCon全球软件开发者大会
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 27, 2021</h6>
                    <h6 className="source"></h6>
                  </div>
                  <p className="intro">
                    10月21日，QCon全球软件开发者大会在宝华万豪酒店举行，极推科技CTO陈东应邀参加本次大会，并以《研发效能的度量体系建设实践》为主题进行了分享。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/activity">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Ji_Zhu_Tuo_Xin_.width-800.png"
                    width="750"
                    height="8871"
                    alt="技术沙龙.png"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">技术拓新，智驱未来！首期技术沙龙活动成功举办</h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 19, 2021</h6>
                    <h6 className="source"></h6>
                  </div>
                  <p className="intro">
                    践行数字化转型战略，需始终不渝的坚持以专业为发展基石，保持开放的心态，从全行业学习最佳实践。在这一初心的引领下，极推科技技术中心从团队搭建、人员培养和开放交流等方面多方求索，践行企业价值观，推助极推科技技术实力再上一个台阶。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技品牌升级斩获国际性奖项肯定">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Pin_Pai_Huo_Jiang__Kao_Bei_.width-800.png"
                    width="750"
                    height="4420"
                    alt="极推科技品牌升级"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技品牌升级斩获国际性奖项肯定</h4>
                  <div className="clearfix">
                    <h6 className="date">Jan. 14, 2021</h6>
                    <h6 className="source"></h6>
                  </div>
                  <p className="intro">
                    2021年1月14日，全球性品牌盛典2020Transform
                    Awards颁奖典礼在线上成功举办，极推科技在Best Rebrand Of A Digital
                    Property（最佳品牌重塑）评选中斩获银奖
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技被认定为国家级高新技术企业">
              <div className="media">
                <div className="media-left">
                  <img alt="高企.png" src="/static/img/news/xJvVRR4w_EQ25.png" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技被认定为国家级高新技术企业！</h4>
                  <div className="clearfix">
                    <h6 className="date">April 3, 2019</h6>
                    <h6 className="source"></h6>
                  </div>
                  <p className="intro">
                    这是由上海市科学技术委员会、上海市财政局、国家税务总局上海市税务局联合颁发《高新技术企业证书》。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/series-b-round-funding">
              <div className="media">
                <div className="media-left">
                  <img alt="B轮融资.jpeg" src="/static/img/news/WXVtecvg_hcrk.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技完成3000万美元B轮融资 新浪投资</h4>
                  <div className="clearfix">
                    <h6 className="date">Feb. 28, 2019</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    国内领先的金融科技公司极推科技近日宣布完成B轮融资，融资金额3000万美元，国内互联网巨头新浪为该轮融资的投资方。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/拿铁财经荣获2016中国科技金融大会智能投顾技术创新奖">
              <div className="media">
                <div className="media-left">
                  <img alt="" height="375" src="/static/img/news/166.jpg" width="500" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    拿铁财经荣获2016中国科技金融大会智能投顾技术创新奖
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 28, 2016</h6>
                    <h6 className="source">商业电讯</h6>
                  </div>
                  <p className="intro">
                    对于金融行业来说，数据和技术是金融企业能够长远发展的驱动力
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/理财新风向智能投顾的兴起和现状">
              <div className="media">
                <div className="media-left">
                  <img alt="4.jpeg" src="/static/img/news/vtAE8YaV_vTNs.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">理财新风向：智能投顾的兴起和现状</h4>
                  <div className="clearfix">
                    <h6 className="date">June 20, 2016</h6>
                    <h6 className="source">财经天下</h6>
                  </div>
                  <p className="intro">
                    有75%的受访者称，他们“非常可能”或“有可能”考虑使用智能投顾服务。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/智能投顾市场将迎爆发期拿铁财经机器人成理财新模式">
              <div className="media">
                <div className="media-left">
                  <img alt="2.jpeg" src="/static/img/news/kzjFZ5aX_EvEn.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    智能投顾市场将迎爆发期，拿铁财经机器人成为理财新模式
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">June 13, 2016</h6>
                    <h6 className="source">中华网投资</h6>
                  </div>
                  <p className="intro">
                    机器人理财从诞生到发展仅仅才花了几年时间，而预计未来5-10年将会迎来暴发式增长。
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div id="profession" className="tab-pane fade">
            <a href="/newsmedias/连获两项发明专利极推科技再添创新硕果">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Feng_Mian_.width-800.jpg"
                    width="700"
                    height="300"
                    alt="1"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">连获两项发明专利！极推科技再添创新硕果</h4>
                  <div className="clearfix">
                    <h6 className="date">Feb. 14, 2023</h6>
                    <h6 className="source">凤凰网</h6>
                  </div>
                  <p className="intro">
                    极推科技自主研发设计的《用于监控告警系统的全链路监控方法及装置》与《数据仓库内表格的血缘关系追溯的方法和装置》两项发明喜获国家知识产权局颁发的发明专利认证，极推科技连续两个月斩获专利认可，技术创新再添硕果！
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/喜讯极推科技荣获2022年中国人才管理创新典范奖">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Tu_Pian__6.width-800.png"
                    width="787"
                    height="479"
                    alt="6"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    喜讯！极推科技荣获2022年中国人才管理创新典范奖
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Jan. 30, 2023</h6>
                    <h6 className="source">搜狐网</h6>
                  </div>
                  <p className="intro">
                    极推科技凭借突出的人才战略及人才培养体系，从多家参赛企业中脱颖而出，成功摘得“2022年中国人才管理创新典范奖”称号
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技斩获2022国际科创节金融数字创新奖">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">极推科技斩获2022国际科创节“金融数字创新奖”</h4>
                  <div className="clearfix">
                    <h6 className="date">Jan. 4, 2023</h6>
                    <h6 className="source">搜狐网</h6>
                  </div>
                  <p className="intro">
                    极推科技凭借出色的数字化创新实践，斩获“2022年度金融数字创新奖”
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技通过中国信通院devops先进级工具评估为数字化发展再添硕果">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Tu_Pian__2_RnMHp9M.width-800.png"
                    width="800"
                    height="378"
                    alt="2"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技通过中国信通院DevOps先进级工具评估，为数字化发展再添硕果
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Jan. 4, 2023</h6>
                    <h6 className="source">新浪网</h6>
                  </div>
                  <p className="intro">
                    极推科技经过数月精心准备，根据信通院的“可信云”研发运营（DevOps）解决方案的评估标准，分析产品能力与标准的匹配程度，积极准备测试用例，真实环境操作演示，参加信通院现场评测、补充材料解释说明、专家答辩等一系列环节，最终经过专家委员会的综合评定，极推科技自主研发的产研工具BetterCDS在应用开发域的测试中顺利通过可信云-研发运营（DevOps）解决方案先进级工具的评估。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技实力再获认可获投资时报金禧奖双项大奖">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Tu_Pian__1_QJ33DxZ.width-800.png"
                    width="635"
                    height="485"
                    alt="获奖"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技实力再获认可！获《投资时报》金禧奖双项大奖
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 23, 2022</h6>
                    <h6 className="source">搜狐网</h6>
                  </div>
                  <p className="intro">
                    2022年12月22日，由标点财经研究院联合《投资时报》主办的“见未来•2022第五届资本市场高峰论坛暨金禧奖年度颁奖盛典”隆重召开，极推科技凭借自身的强劲创新实力和优质金融服务能力，获评“金禧奖·2022
                    卓越金融科技公司”和“金禧奖·2022 普惠金融奖”两项大奖。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技续签阿里云飞天生态合作伙伴-服务生态合作计划">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技续签阿里云飞天生态合作伙伴-服务生态合作计划
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 12, 2022</h6>
                    <h6 className="source">搜狐</h6>
                  </div>
                  <p className="intro">
                    近日，极推科技再度被授予阿里云合作伙伴称号，并连续两年成功加入阿里云飞天生态合作伙伴-服务生态合作计划。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/2022北青财星榜揭晓极推科技荣膺金牌金融科技创新奖">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/Tu_Pian__1_xJDjIN6.width-800.png"
                    width="502"
                    height="933"
                    alt="金融科技创新奖"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    2022北青财星榜揭晓,极推科技荣膺金牌金融科技创新奖
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 7, 2022</h6>
                    <h6 className="source">凤凰</h6>
                  </div>
                  <p className="intro">
                    日前，已经连续举办15年的北青财星榜，公布了2022年度榜单，极推科技获评金牌金融科技创新奖，这也是极推科技连续第三年荣获殊荣。据悉，北青财星榜由北京市民和专家团队联合评选，至今已连续举办15年，覆盖银行、保险、金融科技、消费金融等主流金融行业，聚焦品牌、服务、社会责任、产品等多个维度,并在业内拥有良好的口碑和广泛的影响。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/磐途海神系统发布会于上海隆重举办极推科技受邀出席">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/2_UqIiQkj.width-800.png"
                    width="800"
                    height="532"
                    alt="海神系统"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    磐途海神系统发布会于上海隆重举办，极推科技受邀出席
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 1, 2022</h6>
                    <h6 className="source">投资界</h6>
                  </div>
                  <p className="intro">
                    近日，赋能酒旅生态业务创新的海神系统发布会，在上海阿纳迪酒店隆重举行，来自酒店商家、旅行社、MCN机构、垂类自媒体等的150余名行业伙伴齐聚一堂，共襄盛举。作为参与海神系统酒旅产业布局的金融科技企业，极推科技也受邀出席了本次发布会，与来自酒旅、互联网等相关行业的企业代表、顶级大咖、达人，共同见证磐途海神系统的发布，同时极推科技董事长隆军，出席并分享了极推科技为促进文旅行业发展作出的努力，以及表明了以金融科技助力整个产业链高质量发展的决心，获行业各界高度肯定。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技成功加入大数据技术标准推进委员会彰显品牌硬核数字化实力">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/4.width-800.png"
                    width="741"
                    height="531"
                    alt="大数据技术委员会会员"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技成功加入大数据技术标准推进委员会，彰显品牌硬核数字化实力
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 1, 2022</h6>
                    <h6 className="source">zaker</h6>
                  </div>
                  <p className="intro">
                    近日，由中国信息通信研究院（以下简称“中国信通院”）、中国通信标准化协会指导，中国通信标准化协会大数据技术标准推进委员会（CCSA
                    TC601）主办的“2022大数据产业峰会”在京成功举办，极推科技以首家金融科技企业的身份，参与到了关于DataOps在行业应用的讨论中。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/以金融之力助推经济发展极推科技喜获民营企业突出贡献奖">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/5.width-800.png"
                    width="552"
                    height="654"
                    alt="贡献奖"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    以金融之力助推经济发展，极推科技喜获“民营企业突出贡献奖”
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Nov. 10, 2022</h6>
                    <h6 className="source">凤凰</h6>
                  </div>
                  <p className="intro">
                    极推科技荣获2021年度浦东新区“民营企业突出贡献奖”，也是极推科技连续第三年获得此项殊荣。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技斩获星斗奖">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/BPM-Xing_Dou_Jiang_.width-800.png"
                    width="750"
                    height="2431"
                    alt="星斗"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技斩获“星斗奖”</h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 28, 2022</h6>
                    <h6 className="source"></h6>
                  </div>
                  <p className="intro"></p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/践行开放合作共建行业生态">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image full-width"
                    src="/static/img/news/IMG_8947_BZDmJ4f.width-800.jpg"
                    width="750"
                    height="3257"
                    alt="阿里云飞天合作伙伴"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技加入阿里云飞天生态合作伙伴-服务生态合作计划
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Jan. 20, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    此次加入阿里云飞天生态合作伙伴-服务生态合作计划之后，极推科技将借助业内领先的技术基础设施，依托自身强大的技术迭代能力和创新优势，进一步推动旗下产品功能不断优化、服务再次提升。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技再次获得高新技术企业认定">
              <div className="media">
                <div className="media-left">
                  <img
                    className="richtext-image left"
                    src="/static/img/news/Gao_Xin_Ji_Zhu_Qi_Ye_.width-500.jpg"
                    width="500"
                    height="2337"
                    alt="高新技术企业认证"
                  />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">极推科技再次获得高新技术企业认定</h4>
                  <div className="clearfix">
                    <h6 className="date">Jan. 1, 2022</h6>
                    <h6 className="source">极推科技</h6>
                  </div>
                  <p className="intro">
                    依托技术优势和创新能力，极推科技曾于2018年首次获得为期三年的高新技术企业认定。2021年经过相关机构新一轮的评估调研，极推科技各项指标完全符合认定标准，于近日成功通过了新一轮为期三年的“高新技术企业”认定。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/极推科技荣获2021北青财星榜金牌金融科技创新奖">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">
                    极推科技荣获2021北青财星榜“金牌金融科技创新奖”
                  </h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 9, 2021</h6>
                    <h6 className="source">新浪财经</h6>
                  </div>
                  <p className="intro">
                    近日,第14届北京青年报“财星榜”揭晓名单。极推科技凭借科技创新,不断推动行业数字化转型荣获2021年度“金牌金融科技创新奖”。
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div id="story" className="tab-pane fade">
            <a href="/newsmedias/还呗支持新农人干好带货新农活">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">还呗支持“新农人”干好带货“新农活”</h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 8, 2022</h6>
                    <h6 className="source">北青金融</h6>
                  </div>
                  <p className="intro">
                    在还呗未来探索高质量发展的道路上，将继续探索普惠金融更精准的支持乡村振兴事业，为有需求的乡村人提供高效便捷的金融服务，当这些“新农乡村人”扎根田间弯腰埋头干事业时，还呗就做他们肩上无形的强力遮阳盾，帮他们扛起资金压力，缓解资金难题。
                  </p>
                </div>
              </div>
            </a>

            <a href="/newsmedias/还呗小微贷照亮60后老板梦-推动小家电的进化路">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">还呗小微贷照亮“60后”老板梦 推动“小家电”的进化路</h4>
                  <div className="clearfix">
                    <h6 className="date">Nov. 14, 2022</h6>
                    <h6 className="source">北青金融</h6>
                  </div>
                  <p className="intro">
                    作为以数字化和技术力驱动发展的科技金融排头兵，还呗以门槛低、放款快、还款形式灵活的互联网助贷为创业企业输送更有温度的金融支持，不止于此，还呗还希望通过数智的力量针对千人千面的金融需求提供最大化的服务范围。
                  </p>
                </div>
              </div>
            </a>

            <a href="/newsmedias/还呗小微贷守护零售小卖家-呵护大城市的毛细血管">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">还呗小微贷守护零售小卖家 呵护大城市的“毛细血管”</h4>
                  <div className="clearfix">
                    <h6 className="date">Nov. 7, 2022</h6>
                    <h6 className="source">北青金融</h6>
                  </div>
                  <p className="intro">
                    作为以创新驱动高质量发展的金融科技排头兵，极推科技积极响应“惠企纾困”，旗下用户超1亿的助贷平台还呗用扎实的措施为“经济毛细血管”蓄能增势。通过高效便捷的金融科技服务保障个体户的正常运行，从而促进行业的稳健发展，更是为提升普惠金融的易得感，特推出“还呗小微贷”精准服务小微企业，以快速批复授信，为小微发展送上“及时雨”。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/还呗小微贷扶持物流人-力挺物流小微保通畅">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">还呗小微贷扶持物流人 力挺物流小微保通畅</h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 31, 2022</h6>
                    <h6 className="source">北青金融</h6>
                  </div>
                  <p className="intro">
                    助企纾困促发展，金融科技服务显担当，极推科技旗下助贷平台还呗帮助各行各业因短期资金短缺而被迫中断营生的小微企业主，为其提供更有针对性的小微企业专属信贷产品，让他们的生意再次“支棱”起来。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/小微贷助推公益梦以广告之力撑起城市面子">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">“小微贷”助推公益梦，以广告之力撑起“城市面子”</h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 25, 2022</h6>
                    <h6 className="source">北青金融</h6>
                  </div>
                  <p className="intro">
                    极推科技积极响应“惠企贷款”政策，助力小微创业，点亮每一个小微梦想，旗下还呗信贷平台针对资金流动效率要求高的小微企业主，提供更有针对性的小微企业专属信贷产品，帮助他们的创业梦想破土发芽。
                  </p>
                </div>
              </div>
            </a>
            <a href="/newsmedias/小微贷帮扶小生意人-把全球货物运到大江南北">
              <div className="media">
                <div className="media-body">
                  <h4 className="media-heading">“小微贷”帮扶小生意人 把全球货物运到大江南北</h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 18, 2022</h6>
                    <h6 className="source">北青金融</h6>
                  </div>
                  <p className="intro">
                    疫情发生以来，那些没有资产抵押的小本生意由于资金周转困难而举步维艰。为了帮助他们维持运转，极推科技积极响应“惠企贷款”政策，旗下还呗信贷平台针对资金流动效率要求高的小微企业主，提供更有针对性的小微企业专属信贷产品，帮助他们度过难关。
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div id="tech" className="tab-pane fade">
            <a href="/newsmedias/基于-redis-的序列号服务的设计">
              <div className="media">
                <div className="media-left">
                  <img src="/static/img/news/g1.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">基于 Redis 的序列号服务的设计</h4>
                  <div className="clearfix">
                    <h6 className="date">Dec. 5, 2017</h6>
                    <h6 className="source">泛金融技术</h6>
                  </div>
                  <p className="intro">
                    本文讲述基于 Redis
                    的序列号服务的设计，主要从序列号服务的概念、需求以及服务的设计思路与详细设计等方面对其进行阐述。
                  </p>
                </div>
              </div>
            </a>

            <a href="/newsmedias/浅谈调度工具airflow">
              <div className="media">
                <div className="media-left">
                  <img src="/static/img/news/g2.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">浅谈调度工具——Airflow</h4>
                  <div className="clearfix">
                    <h6 className="date">Nov. 24, 2017</h6>
                    <h6 className="source">泛金融技术</h6>
                  </div>
                  <p className="intro">
                    本文将介绍 Airflow 这一款优秀的调度工具。主要包括 Airflow 的服务构成、Airflow 的
                    Web 界面、DAG 配置、常用配置以及 Airflow DAG Creation Manager Plugin 这一款
                    Airflow 插件。
                  </p>
                </div>
              </div>
            </a>

            <a href="/newsmedias/基于redis的限流系统的设计">
              <div className="media">
                <div className="media-left">
                  <img src="/static/img/news/g3.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">基于Redis的限流系统的设计</h4>
                  <div className="clearfix">
                    <h6 className="date">Nov. 17, 2017</h6>
                    <h6 className="source">泛金融技术</h6>
                  </div>
                  <p className="intro">
                    本文讲述基于Redis的限流系统的设计，主要会谈及限流系统中限流策略这个功能的设计；在实现方面，算法使用的是令牌桶算法来，访问Redis使用lua脚本。
                  </p>
                </div>
              </div>
            </a>

            <a href="/newsmedias/prestohive统一账户体系及查询监控轻型解决方案">
              <div className="media">
                <div className="media-left">
                  <img src="g4.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">Presto+Hive统一账户体系及查询监控轻型解决方案</h4>
                  <div className="clearfix">
                    <h6 className="date">Oct. 12, 2017</h6>
                    <h6 className="source">泛金融技术</h6>
                  </div>
                  <p className="intro">
                    本文将介绍如何利用这些组件搭建及管理大数据交互平台，主要包括两节内容。
                  </p>
                </div>
              </div>
            </a>

            <a href="/newsmedias/谈谈基于-openresty-的接口网关设计">
              <div className="media">
                <div className="media-left">
                  <img src="g5.jpeg" />
                </div>

                <div className="media-body">
                  <h4 className="media-heading">谈谈基于 OpenResty 的接口网关设计</h4>
                  <div className="clearfix">
                    <h6 className="date">Sept. 13, 2017</h6>
                    <h6 className="source">泛金融技术</h6>
                  </div>
                  <p className="intro">
                    本文讲述基于 OpenResty 的接口网关设计，主要谈及接口网关的请求路由与安全认证（IP
                    与 URI 白名单、加解密与验签名流程等）这两部分内容
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

Newsmedias.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default Newsmedias
