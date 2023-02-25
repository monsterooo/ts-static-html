import siteMetadata from '@/data/siteMetadata'
import Footer from './footer'
import Header from './header'
import Contact from './home/contact'
import { PageSEO } from './SEO'

const LayoutWithNav = ({ children }) => {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="home-index">
        <Header />
        <div className="main">
          <div className="home">
            {children}
            {/* <Contact /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWithNav
