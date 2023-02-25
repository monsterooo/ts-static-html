import Image from 'next/image'
import React, { useState } from 'react'
import cn from 'classnames'
import SectionWrapper from '../../SectionWrapper'
import styles from './index.module.scss'

const Approach = ({ data = [], title }) => {
  const [currentItem, setCurrentItem] = useState(data[0])

  const TabNav = ({ item }) => {
    const { title, id } = item
    return (
      <div
        className={cn(styles['el-tabs__item'], { [styles['is-active']]: currentItem.id == id })}
        onClick={() => {
          setCurrentItem(item)
        }}
      >
        <div className={styles['box-left']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['name']}></div>
        </div>
        {currentItem.id == id && (
          <>
            <div className={styles['box-right']}></div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAUCAYAAAD7s6+GAAAAAXNSR0IArs4c6QAAAPVJREFUSEvV10sKwjAQgOF/lu69gzvvUKsHcKWX8Cy68iC69hgiSBEREcUzyMhIFlUSK0KbNJsumsfHNJ1JhEhNVfvAHJiKyL2KIVUd6njvkBugC2yBXERu39aKBc2BNdBxuB0wEJFrCBsFahhVHQKrEnYPZCJy8WGjQQPYwmHPn9io0AD24LCnMjY6NIA9Oqw9Xy0JaABrEbU9axFGVHVWRwr6c84MGJfG2l41bGFQ/XPSpoZZFshaBV02FZqKdR5ADxh5P30iSF8BeP+ZUoB6qlR66cmDTC/he5DpldBWHEpUtR3HvNYcnF1tt6vIApj8chV5AkEndVvaOyNEAAAAAElFTkSuQmCC" />
          </>
        )}
      </div>
    )
  }

  return (
    <SectionWrapper title={title} sectionClass={styles.section} titleClasss={'text-white'}>
      <div className="flex w-full">
        <div className={styles['el-tabs__header']}>
          <div className={styles['el-tabs__nav']}>
            {data.map((item, index) => (
              <TabNav item={item} key={index} />
            ))}
          </div>
        </div>
        <div className={styles['el-tabs__content']}>
          <div className={styles['el-tab-pane']}>
            <div
              className={styles['img-bg']}
              style={{ backgroundImage: `url(${currentItem.img})` }}
            ></div>
            {[currentItem.painPoints, currentItem.solution].map((item, index) => {
              return (
                <div className={'mt-8'} key={index}>
                  <div className={styles['inner_title']}>
                    {index == 0 ? '业务痛点' : '解决方案'}
                  </div>
                  {item.split('split_;')?.map((i, idx) => {
                    return (
                      <div key={idx} className={styles.desc}>
                        <p className={styles.point}>
                          <b></b>
                        </p>
                        <div>{i}</div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Approach
