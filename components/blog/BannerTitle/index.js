import styles from './index.module.scss'
import cn from 'classnames'

const BannerTitle = ({ bgImg, title, description, style }) => {
  return (
    <section
      className={cn(styles.container)}
      style={{ ...style, backgroundImage: `url(${bgImg})` }}
    >
      <div className="wrap-width">
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
        <a className={styles.btn} href="#">
          联系我们
        </a>
      </div>
    </section>
  )
}

export default BannerTitle
