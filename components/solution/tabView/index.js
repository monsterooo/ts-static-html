import { useState } from 'react'
import { content } from 'tailwind.config'
import styles from './index.module.scss'
import cn from 'classnames'

export default function TabView({ tabs }) {
  const [checkedTab, setCheckedTab] = useState(0)

  const onChange = (checkedTab, index, content) => {
    setCheckedTab(index)
  }

  return (
    <div className={styles.taberContainer}>
      <div className={styles.taber}>
        {tabs.map((item, index) => (
          <div
            key={item.key}
            className={[
              styles.tabItem,
              checkedTab === index ? styles.tabItemChecked : styles.tabItemNotChecked,
            ].join(' ')}
            onClick={() => onChange(item, index)}
          >
            {item.title}
          </div>
        ))}
        <div
          className={styles.tabBar}
          style={{
            width: tabs[checkedTab]?.title.length * 14,
            transform: `translateX(${checkedTab * 124}px)`,
          }}
        />
      </div>
      <div className={cn(styles.content)}>
        <h2 className={styles.description}>{tabs[checkedTab]?.description}</h2>
        <div className={cn(styles.contentBox)}>
          {tabs.map((item, index) => {
            return (
              <div className={cn(styles.handleBox)} key={index}>
                <div className={styles.imgBox}>
                  <img src="https://startdt.com/_nuxt/img/advantage_icon_1@2x.2be030a.png" />
                </div>
                <div>
                  <h4 className={styles.contentTitle}>{item.title}</h4>
                  <ul>
                    <li>
                      <p className={styles.point}>
                        <b></b>
                      </p>
                      <p className={styles.text}>{item.description}</p>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
