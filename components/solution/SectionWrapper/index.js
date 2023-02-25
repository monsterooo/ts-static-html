import cn from 'classnames'
import styles from './index.module.scss'

const SectionWrapper = ({ title, children, className, bgColor, sectionClass, titleClasss }) => {
  return (
    <section
      className={cn('flex justify-center', { [sectionClass]: sectionClass })}
      style={{ backgroundColor: bgColor || '#f7f9fc' }}
    >
      <section
        className={cn(styles.container, {
          [className]: !!className,
        })}
      >
        <h2 className={cn(styles.title, { [titleClasss]: titleClasss })}>{title}</h2>
        {/* <p className={styles.desc}></p> */}
        <div className={styles.content}>{children}</div>
      </section>
    </section>
  )
}

export default SectionWrapper
