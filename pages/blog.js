import { useEffect } from 'react'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import LayoutWithNav from '@/components/LayoutWithNav'
import BannerTitle from '@/components/blog/BannerTitle'
import NewsList from '@/components/blog/NewsList'

export const POSTS_PER_PAGE = 5
const BANNER_IMA = 'https://startdt.com/_nuxt/img/swipe.5cefcc6.png'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

function Blog({ posts, initialDisplayPosts, pagination }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [])
  return (
    <>
      <BannerTitle
        title="ThingsWorld博客"
        description={`全面解析数据中台，加速企业数智化转型`}
        bgImg={BANNER_IMA}
        style={{ height: 737 }}
      />
      <NewsList posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />
    </>
  )
}

Blog.getLayout = function getLayout(page) {
  return <LayoutWithNav>{page}</LayoutWithNav>
}

export default Blog
