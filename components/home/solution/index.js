import Tabs, { TabPane } from 'rc-tabs'
import 'rc-tabs/assets/index.css'
import P1 from './p1'
import P2 from './p2'

function Solution() {
  const items = [
    {
      label: '热门产品',
      key: '1',
      children: <P1 />,
    },
    {
      label: '平台产品',
      key: '2',
      children: <P2 />,
    },
    // {
    //   label: '通用应用产品',
    //   key: '3',
    //   children: <P1 />,
    // },
    // {
    //   label: '行业产品',
    //   key: '4',
    //   children: <P1 />,
    // },
    // {
    //   label: '热门服务',
    //   key: '5',
    //   children: <P1 />,
    // },
  ]

  return (
    <div className="products">
      <div className="products-services wrap-width">
        <div className="common-title">
          <h2 className="title">产品与服务</h2>
          <p className="tips">行业痛点解决方案</p>
        </div>
        <Tabs items={items} />
      </div>
    </div>
  )
}

export default Solution
