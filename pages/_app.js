// import '@/css/tailwind.css'
// import '@/css/prism.css'
// import '@/css/app.scss'
// import '@/css/font.css'
import '@/css/bootstrap.css'
import '@/css/animate.min.css'
import '@/css/base.css'
import '@/css/huanbei.css'
import '@/css/about.css'
import '@/css/news.css'
// import 'katex/dist/katex.css'
// import '@fontsource/inter/variable-full.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
