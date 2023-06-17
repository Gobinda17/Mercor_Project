import Image from 'next/image';
import styles from "./header.module.css"

export default function HeadComponent() {
    return (
        <div className={styles.header}>
            <div className="d-flex align-items-center justify-content-between">
                <div className={styles.searchField}>
                    <div className={styles.inputGroup}>
                        <span className="input-group-text" id="addon-wrapping">
                            <Image src="/search-normal.svg" width="22" height="22" alt="Search Icon"></Image>
                        </span>
                        <input type="text" className={styles.input} placeholder='Search for anything...'></input>
                    </div>
                </div>
                <div className="d-flex gap-1">
                    <div className='d-flex align-items-center gap-4 pe-5'>
                        <Image src="/calendar-2.svg" width={24} height={24} alt="Calendar Icon"></Image>
                        <Image src="/message-question.svg" width={24} height={24} alt="Message Icon"></Image>
                        <Image src="/notification.svg" width={24} height={24} alt="Notification Icon"></Image>
                    </div>
                    <div className='d-flex flex-column align-self-center'>
                        <p className={styles.profileName}>
                            Anima Agarwal
                        </p>
                        <p className={styles.profileAdd}>
                            U.P., India
                        </p>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <Image className={styles.profilePic} src="/profile.jpeg" width={38} height={38} alt='Profile Pic'></Image>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}