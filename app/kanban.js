'use client'
import Image from 'next/image';
import styles from "./kanban.module.css";
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const kanbanCard = [
    {
        id: '1',
        name: 'Brainstorming',
        content: "Brainstorming brings team members' diverse experience into play.",
        images: ["/profile.jpeg", "/profile-pic2.jpg", "/profile.jpeg"],
    },
    {
        id: '2',
        name: 'Research',
        content: "User research helps you to create an optimal product for users.",
        images: ["/profile.jpeg", "/profile-pic2.jpg", "/profile.jpeg"],
    },
]

export default function Kanban() {
    const [characters, updateCharacters] = useState(kanbanCard);

    return (
        <div className={styles.kanbanWrapper}>
            <div className='d-flex align-items-start align-items-lg-center justify-content-between flex-column flex-lg-row gap-4'>
                <div className='d-flex align-items-start align-items-md-center flex-column flex-md-row gap-4'>
                    <h1 className={styles.kanbanHeader}>Mobile App</h1>
                    <div className='d-flex gap-3'>
                        <a href='#'>
                            <Image src="/Mercor_project/arrow-square-up.svg" width={30} height={30} alt='Edit Icon'></Image>
                        </a>
                        <a href='#'>
                            <Image src="/Mercor_project/Group-626.svg" width={30} height={30} alt='Group Icon'></Image>
                        </a>
                    </div>
                </div>

                <div className='d-flex align-items-center gap-2'>
                    <a href='#'>
                        <Image src="/Mercor_project/add-square-blue.svg" width={18} height={18} alt='Add Icon'></Image>
                    </a>
                    <p className={styles.inviteTitle}>
                        Invite
                    </p>
                    <div className="d-flex align-items-center">
                        <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={50} height={50} alt='Profile Pic'></Image>
                        <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={50} height={50} alt='Profile Pic'></Image>
                        <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={50} height={50} alt='Profile Pic'></Image>
                        <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={50} height={50} alt='Profile Pic'></Image>
                        <div className={styles.profilePic}>
                            <span>+2</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.filterSection} flex-column flex-md-row gap-2`}>
                <div className='d-flex gap-3'>
                    <div className="btn-group">
                        <button type="button" className={`${styles.filterBtn} btn dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                            <Image src="/Mercor_project/filter.svg" width={16} height={16} alt='Filter Icon'></Image>
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
                            <Image src="/Mercor_project/calendar.svg" width={16} height={16} alt='Calendar Icon'></Image>
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
                            <Image src="/Mercor_project/profile-3user.svg" width={16} height={16} alt='Share Icon'></Image>
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
                            <Image src="/Mercor_project/pause.svg" width={20} height={20} alt='Pause Icon'></Image>
                        </button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">
                            <Image src="/Mercor_project/menu.svg" width={20} height={20} alt='Menu Icon'></Image>
                        </button>
                    </div>
                </div>
            </div>

            <DragDropContext>
                <div className='row g-4 mt-4'>
                    <Droppable droppableId="kanbanCard" direction='horizontal'>
                        {(provided) => (
                            <div className='col-12 col-lg-6 col-xl-4' {...provided.droppableProps} ref={provided.innerRef}>
                                <div className={`${styles.kanabanMainCard} card`}>
                                    <div className={`${styles.kanabanMainCardHeader} card-header violet-dot d-flex align-items-center justify-content-between gap-2 violet-border`}>
                                        <div className='d-flex align-items-center gap-3 w-100'>
                                            <p className={`${styles.kanbanCardHead} mb-0`}>
                                                To Do
                                            </p>
                                            <p className={`${styles.counter} mb-0`}>
                                                <span>4</span>
                                            </p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <a href="#">
                                                <Image src="/Mercor_project/add-square-blue.svg" width={24} height={24} alt='Add Icon'></Image>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='card-body p-0 overflow-scroll'>
                                        {characters.map(({ id, name, content, images }, index) => {
                                            return (
                                                <Draggable key={id} draggableId={id} index={index}>
                                                    {(provided) => (
                                                        <div className={`${styles.kanbancard} card`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <div className='card-body'>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <p className={styles.kanabanLowPriority}>
                                                                        <span>Low</span>
                                                                    </p>
                                                                    <a href="#">...</a>
                                                                </div>
                                                                <h2>{name}</h2>
                                                                <p>{content}</p>
                                                            </div>
                                                            <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                                                <div className="d-flex align-items-center">
                                                                    <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                                                    <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                                                    <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <a href="#">
                                                                        <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                                        <span className='ps-2'>12 Comments</span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                                        <span className='ps-2'>0 files</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* <div className={`${styles.kanbancard} card`}>
                                                        <div className='card-body'>
                                                            <div className='d-flex align-items-center justify-content-between'>
                                                                <p className={styles.kanabanHighPriority}>
                                                                    <span>High</span>
                                                                </p>
                                                                <a href="#">...</a>
                                                            </div>
                                                            <h2>Research</h2>
                                                            <p>User research helps you to create an optimal product for users.</p>
                                                        </div>
                                                        <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                                            <div className="d-flex align-items-center">
                                                                <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                                                <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                                                <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                                            </div>
                                                            <div className='d-flex align-items-center gap-3'>
                                                                <a href="#">
                                                                    <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                                    <span className='ps-2'>12 Comments</span>
                                                                </a>
                                                                <a href="#">
                                                                    <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                                    <span className='ps-2'>0 files</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.kanbancard} card`}>
                                                        <div className='card-body'>
                                                            <div className='d-flex align-items-center justify-content-between'>
                                                                <p className={styles.kanabanHighPriority}>
                                                                    <span>High</span>
                                                                </p>
                                                                <a href="#">...</a>
                                                            </div>
                                                            <h2>Wireframes</h2>
                                                            <p>Low fidelity wireframes include the most basic content and visuals.</p>
                                                        </div>
                                                        <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                                            <div className="d-flex align-items-center">
                                                                <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                                                <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                                                <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                                            </div>
                                                            <div className='d-flex align-items-center gap-3'>
                                                                <a href="#">
                                                                    <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                                    <span className='ps-2'>12 Comments</span>
                                                                </a>
                                                                <a href="#">
                                                                    <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                                    <span className='ps-2'>0 files</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </Draggable>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Droppable>

                    <div className='col-12 col-lg-6 col-xl-4'>
                        <div className={`${styles.kanabanMainCard} card`}>
                            <div className={`${styles.kanabanMainCardHeader} card-header orange-dot d-flex align-items-center justify-content-between gap-2 orange-border`}>
                                <div className='d-flex align-items-center gap-3 w-100'>
                                    <p className={`${styles.kanbanCardHead} mb-0`}>
                                        On Process
                                    </p>
                                    <p className={`${styles.counter} mb-0`}>
                                        <span>4</span>
                                    </p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <a href="#">
                                        <Image src="/Mercor_project/add-square-blue.svg" width={24} height={24} alt='Add Icon'></Image>
                                    </a>
                                </div>
                            </div>
                            <div className='card-body p-0 overflow-scroll'>
                                <div className={`${styles.kanbancard} card`}>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className={styles.kanabanLowPriority}>
                                                <span>Low</span>
                                            </p>
                                            <a href="#">...</a>
                                        </div>
                                        <h2>Onboard Illustrations</h2>
                                        <div className='d-flex align-items-center gap-3'>
                                            <Image className={styles.kanbanPic} src="/Mercor_project/illustration.png" width={100} height={100} alt="Kanban Picture"></Image>
                                        </div>
                                    </div>
                                    <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                        <div className="d-flex align-items-center">
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                        </div>
                                        <div className='d-flex align-items-center gap-3'>
                                            <a href="#">
                                                <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>12 Comments</span>
                                            </a>
                                            <a href="#">
                                                <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>0 files</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.kanbancard} card`}>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className={styles.kanabanHighPriority}>
                                                <span>High</span>
                                            </p>
                                            <a href="#">...</a>
                                        </div>
                                        <h2>Moodboard</h2>
                                        <div className='d-flex align-items-center flex-column flex-lg-row gap-3'>
                                            <Image className={styles.kanbanPic} src="/Mercor_project/pic-1.png" width={100} height={100} alt="Kanban Picture"></Image>
                                            <Image className={styles.kanbanPic} src="/Mercor_project/pic-2.png" width={100} height={100} alt="Kanban Picture"></Image>
                                        </div>
                                    </div>
                                    <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                        <div className="d-flex align-items-center">
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                        </div>
                                        <div className='d-flex align-items-center gap-3'>
                                            <a href="#">
                                                <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>12 Comments</span>
                                            </a>
                                            <a href="#">
                                                <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>0 files</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.kanbancard} card`}>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className={styles.kanabanHighPriority}>
                                                <span>High</span>
                                            </p>
                                            <a href="#">...</a>
                                        </div>
                                        <h2>Wireframes</h2>
                                        <p>Low fidelity wireframes include the most basic content and visuals.</p>
                                    </div>
                                    <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                        <div className="d-flex align-items-center">
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                        </div>
                                        <div className='d-flex align-items-center gap-3'>
                                            <a href="#">
                                                <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>12 Comments</span>
                                            </a>
                                            <a href="#">
                                                <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>0 files</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 col-xl-4'>
                        <div className={`${styles.kanabanMainCard} card`}>
                            <div className={`${styles.kanabanMainCardHeader} card-header green-dot d-flex align-items-center justify-content-between gap-2 green-border`}>
                                <div className='d-flex align-items-center gap-3 w-100'>
                                    <p className={`${styles.kanbanCardHead} mb-0`}>
                                        Done
                                    </p>
                                    <p className={`${styles.counter} mb-0`}>
                                        <span>4</span>
                                    </p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <a href="#">
                                        <Image src="/Mercor_project/add-square-blue.svg" width={24} height={24} alt='Add Icon'></Image>
                                    </a>
                                </div>
                            </div>
                            <div className='card-body p-0 overflow-scroll'>
                                <div className={`${styles.kanbancard} card`}>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className={styles.kanabanDonePriority}>
                                                <span>Completed</span>
                                            </p>
                                            <a href="#">...</a>
                                        </div>
                                        <h2>Onboard Illustrations</h2>
                                        <div className='d-flex align-items-center gap-3'>
                                            <Image className={styles.kanbanDonePic} src="/pic-3.jpg" width={100} height={250} alt="Kanban Picture"></Image>
                                        </div>
                                    </div>
                                    <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                        <div className="d-flex align-items-center">
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                        </div>
                                        <div className='d-flex align-items-center gap-3'>
                                            <a href="#">
                                                <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>12 Comments</span>
                                            </a>
                                            <a href="#">
                                                <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>0 files</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.kanbancard} card`}>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className={styles.kanabanDonePriority}>
                                                <span>Completed</span>
                                            </p>
                                            <a href="#">...</a>
                                        </div>
                                        <h2>Design System</h2>
                                        <p>It just needs to adapt the UI from what you did before.</p>
                                    </div>
                                    <div className={`${styles.kanbanCardFooter} card-footer d-flex flex-column gap-2 flex-md-row align-items-md-center flex-md-wrap justify-content-between`}>
                                        <div className="d-flex align-items-center">
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile-pic2.jpg" width={30} height={30} alt='Profile Pic'></Image>
                                            <Image className={styles.profilePic} src="/Mercor_project/profile.jpeg" width={30} height={30} alt='Profile Pic'></Image>
                                        </div>
                                        <div className='d-flex align-items-center gap-3'>
                                            <a href="#">
                                                <Image src="/Mercor_project/message.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>12 Comments</span>
                                            </a>
                                            <a href="#">
                                                <Image src="/Mercor_project/files.svg" width={16} height={16} alt="Message Icon" />
                                                <span className='ps-2'>0 files</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </DragDropContext>
        </div >
    )
}