import Image from 'next/image';
import styles from "./kanban.module.css"

export default function Kanban() {
    return (
        <div className={styles.kanbanWrapper}>
            <div className='d-flex align-items-center justify-content-between gap-4'>
                <div className='d-flex align-items-center gap-4'>
                    <h1 className={styles.kanbanHeader}>Mobile App</h1>
                    <div className='d-flex gap-3'>
                        <a href='#'>
                            <Image src="/arrow-square-up.svg" width={30} height={30} alt='Edit Icon'></Image>
                        </a>
                        <a href='#'>
                            <Image src="/Group-626.svg" width={30} height={30} alt='Group Icon'></Image>
                        </a>
                    </div>
                </div>

                <div className='d-flex align-items-center gap-2'>
                    <a href='#'>
                        <Image src="/add-square-blue.svg" width={18} height={18} alt='Add Icon'></Image>
                    </a>
                    <p className={styles.inviteTitle}>
                        Invite
                    </p>
                    <div className="d-flex align-items-center">
                        <Image className={styles.profilePic} src="/profile.jpeg" width={50} height={50} alt='Profile Pic'></Image>
                        <Image className={styles.profilePic} src="/profile-pic2.jpg" width={50} height={50} alt='Profile Pic'></Image>
                        <Image className={styles.profilePic} src="/profile.jpeg" width={50} height={50} alt='Profile Pic'></Image>
                        <Image className={styles.profilePic} src="/profile-pic2.jpg" width={50} height={50} alt='Profile Pic'></Image>
                        <div className={styles.profilePic}>
                            <span>+2</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.filterSection}>
                <div className='d-flex gap-3'>
                    <div className="btn-group">
                        <button type="button" className={`${styles.filterBtn} btn dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                            <Image src="/filter.svg" width={16} height={16} alt='Filter Icon'></Image>
                            <span className='m-2'>Filter</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button type="button" className={`${styles.filterBtn} btn dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                            <Image src="/calendar.svg" width={16} height={16} alt='Calendar Icon'></Image>
                            <span className='m-2'>Today</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                </div>

                <div className='d-flex gap-3'>
                    <div className="btn-group">
                        <button type="button" className={`${styles.filterBtn} btn dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                            <Image src="/profile-3user.svg" width={16} height={16} alt='Share Icon'></Image>
                            <span className='m-2'>Share</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                    <hr className={styles.line} />
                    <div className="btn-group">
                        <button type="button" className={`${styles.gridView} btn`}>
                            <Image src="/pause.svg" width={20} height={20} alt='Pause Icon'></Image>
                        </button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">
                            <Image src="/menu.svg" width={20} height={20} alt='Menu Icon'></Image>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}