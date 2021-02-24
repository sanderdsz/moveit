import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
        <img src="https://github.com/sanderdsz.png" alt="Sander"/>
        <div>
          <strong>Sander Zuchinalli</strong>
          <p>
            <img src="icons/level.svg" alt=""/>
            Level 1
          </p>
        </div>
    </div>
  )
}