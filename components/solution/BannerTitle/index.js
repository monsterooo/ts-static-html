import styles from './index.module.scss'
import cn from 'classnames'

const BannerTitle = ({ bgImg, title, description, style, consultingLink }) => {
  return (
    <section
      className={cn(styles.container)}
      style={{ ...style, backgroundImage: `url(${bgImg})` }}
    >
      <div className="wrap-width">
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
        <a className={styles.btn} href={consultingLink || '#'}>
          Demo 演示
        </a>
      </div>
    </section>
  )
}

export default BannerTitle
