import Link from 'next/link'

function Footer() {
  return (
    <footer className="container-fluid Footer hidden-xs">
      <div className="row content">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                {/* <div className="col-sm-3">
                  <h4>公司产品</h4>
                  <p className="hide-ifocusu">
                    <a href="/ifocusu">分众专享</a>
                  </p>
                  <p>
                    <Link href="/huanbei">还呗</Link>
                  </p>
                  <p>
                    <a href="/hxh">还享花</a>
                  </p>

                  <p>
                    <a href="/fintech">小店邦</a>
                  </p>
                </div> */}
                {/* <div className="col-sm-3">
                  <h4>关于我们</h4>
                  <p>
                    <Link href="/about">团队介绍</Link>
                  </p>
                  <p>
                    <Link href="/newsmedias">媒体报道</Link>
                  </p>
                  <p>
                    <a href="https://shuhezhaopin.zhiye.com/social">社会招聘</a>
                  </p>
                  <p>
                    <a href="https://shuhezhaopin.zhiye.com/campus">校园招聘</a>
                  </p>
                </div> */}
                {/* <div className="col-sm-3">
                  <a href="https://shuhezhaopin.zhiye.com/">
                    <h4>加入我们</h4>
                  </a>
                  <p>
                    <a href="https://shuhezhaopin.zhiye.com/social">社会招聘</a>
                  </p>
                  <p>
                    <a href="https://shuhezhaopin.zhiye.com/campus">校园招聘</a>
                  </p>
                </div> */}
                <div className="col-sm-3">
                  <h4>友情链接</h4>
                  <p>
                    <a href="http://www.focusmedia.cn">分众传媒</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <h4>联系我们</h4>
              <p>胡先生：16601289991（电话）</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row copyright text-center">
        极推科技信息科技有限公司 Copyright©2015-2021 备案/许可证编号：
        <a id="icp" href="https://beian.miit.gov.cn/state/outPortal/loginPortal.action">
          京ICP备19015022号-1
        </a>{' '}
        |
        <a
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502014974"
        >
          <img
            src="/static/images/ico_record.png"
            alt=""
            width="29"
            height="30"
            className="footer-image"
          />
          <span style={{ margin: '0 0 0 5px' }}>公安备案号11010502050504</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
