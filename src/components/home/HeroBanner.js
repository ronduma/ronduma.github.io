import styles from './styles.module.css'

function HeroBanner() {
  return (
    <>
      <div className={`${styles.banner} text-4xl text-left m-5 mt-0`}>
        Hi, I&apos;m 
        <br/>
        Ron Dumalagan.
      </div>
    </>
  )
}

export default HeroBanner;