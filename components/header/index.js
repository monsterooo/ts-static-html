import { useState, useEffect } from 'react'
import Link from 'next/link'
import cls from 'classnames'

function Header() {
  const [pathname, setPathname] = useState('')
  const isActivity = (path) => {
    return pathname === path
  }

  useEffect(() => {
    setPathname(location.pathname)
  })

  return (
    <header className="container-fluid Header">
      <div classNameName="row">
        <nav className="navbar hidden-xs">
          <div className="container">
            <div className="navbar-header"></div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className={cls({ active: isActivity('/') })}>
                  <Link href="/">首页</Link>
                </li>
                <li className={cls('product dropdown', { active: isActivity('/huanbei') })}>
                  <a href="#" className="dropdown-toggle">
                    旗下产品<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-left">
                    <li className="hide-ifocusu">
                      <Link href="/ifocusu">首页</Link>
                    </li>
                    <li>
                      <Link href="/huanbei">首页</Link>
                    </li>
                    {/* <li>
                      <a href="/hxh">还享花</a>
                    </li>

                    <li>
                      <a href="/fintech">小店邦</a>
                    </li> */}
                  </ul>
                </li>
                <li className={cls('dropdown', { active: isActivity('/product') })}>
                  <a className="dropdown-toggle">
                    产品介绍<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-left">
                    <li>
                      <Link href="/product">公司产品</Link>
                    </li>
                  </ul>
                </li>
                <li className={cls('dropdown', { active: isActivity('/about') })}>
                  <a className="dropdown-toggle">
                    关于极推科技<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-left">
                    <li>
                      <Link href="/about">公司简介</Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="dropdown ">
                  <a className="dropdown-toggle">
                    公司动态<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-left">
                    <li>
                      <a href="/newsmedias#news">媒体报道</a>
                    </li>}
                  </ul>
                </li> */}
                {/* <li className="">
                  <a href="https://shuhezhaopin.zhiye.com/">加入我们</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
