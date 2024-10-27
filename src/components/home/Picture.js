import styles from './styles.module.css'

import Image from 'next/image'

function Picture() {
  return (
    <>
      <Image 
        // src="/imgs/my-new-character.jpg" 
        src="/imgs/pfp.png" 
        width={295}
        height={472}
        className={styles.picture}
        alt="Ron circa 2024" />
    </>
  )
}

export default Picture;