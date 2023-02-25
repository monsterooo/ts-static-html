import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'

const NewsList = ({ posts, title, initialDisplayPosts = [], pagination }) => {
  const news = [
    {
      date: '2021-05-02T00:00:00.000Z',
      draft: false,
      slug: 'nested-route/introducing-multi-part-posts-with-nested-routing',
      summary:
        'The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!',
      tags: ['multi-author', 'next-js', 'feature'],
      title: 'Introducing Multi-part Posts with Nested Routing',
    },
  ]
  const [sliceIndex, setSliceIndex] = useState(9)
  const [list, setList] = useState(posts.slice(0, sliceIndex))
  const [show, setShow] = useState(null)
  const scrollTop = useRef(0)
  const router = useRouter()

  const Item = ({ item, index }) => {
    const { title, summary, slug } = item
    return (
      <div className={cn(styles.blog)}>
        <a
          className={cn(styles.blogContent)}
          onMouseEnter={() => setShow(index)}
          onClick={() => {
            router.push(`/blog/${slug}`)
          }}
        >
          <img src={item?.cover} className={cn(styles.img)} />
          <div className={cn(styles.info)}>
            <div className={cn(styles.title)}>{title}</div>
            <div className={cn(styles.desc)} style={{ display: show !== index ? 'block' : 'none' }}>
              {summary}
            </div>
            <div className={cn(styles.btn)} style={{ display: show == index ? 'block' : 'none' }}>
              查看详情
            </div>
          </div>
        </a>
      </div>
    )
  }

  useLayoutEffect(() => {
    window.scrollTo({
      top: scrollTop.current,
      behavior: 'instant',
    })
  }, [list])

  const showMore = () => {
    scrollTop.current = document.querySelector('html').scrollTop
    setList(list.concat(posts.slice(sliceIndex, sliceIndex + 9)))
    setSliceIndex(sliceIndex + 9)
  }

  if (initialDisplayPosts.length <= 0) {
    return null
  }

  return (
    <>
      <div className={cn(styles.container)} onMouseLeave={() => setShow(null)}>
        {list.map((item, index) => {
          return <Item item={item} index={index} key={index} />
        })}
      </div>
      {list.length < posts.length && (
        <div className={cn(styles.mainMoreBrn)} onClick={showMore}>
          查看更多案例
        </div>
      )}
    </>
  )
}

export default NewsList
