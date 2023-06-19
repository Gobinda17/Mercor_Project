import Image from 'next/image';
import HeadComponent from './header';
import Kanban from './kanban';

export default function Home() {
  return (
    <div className='card h-100 main_card'>
      <div className='card-body p-0 d-flex'>

        {/* Side Navbar */}
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column h-100" id="sidebar">
          <ul className="nav flex-column w-100">
            <li className="nav-link nav-brand h3 text-white my-2 d-flex align-items-center justify-content-between w-100">
              <div className='d-flex align-items-center'>
                <Image src="/Mercor_project/logo.svg" width={24} height={24} alt="Logo" />
                <span className='mx-2 d-none d-md-block'>Project M.</span>
              </div>
              <a href='#' className='d-none d-md-block'>
                <Image src="/menu-arrow.svg" width={26} height={20} alt="Menu Icon"></Image>
              </a>
            </li>
            <li href="#" className="nav-link pt-3">
              <a className='d-flex align-items-center' href="#">
                <Image src="/category.svg" width={24} height={24} alt="Home Icon" />
                <span className="mx-2 menu_name d-none d-md-block">Home</span>
              </a>
            </li>
            <li href="#" className="nav-link">
              <a className='d-flex align-items-center' href="#">
                <Image src="/message.svg" width={24} height={24} alt="Message Icon" />
                <span className="mx-2 menu_name d-none d-md-block">Message</span>
              </a>
            </li>
            <li href="#" className="nav-link">
              <a className='d-flex align-items-center' href="#">
                <Image src="/task-square.svg" width={24} height={24} alt="Tasks Icon" />
                <span className="mx-2 menu_name d-none d-md-block">Tasks</span>
              </a>
            </li>
            <li href="#" className="nav-link">
              <a className='d-flex align-items-center' href="#">
                <Image src="/profile-2user.svg" width={24} height={24} alt="Members Icon" />
                <span className="mx-2 menu_name d-none d-md-block">Members</span>
              </a>
            </li>
            <li href="#" className="nav-link pb-3">
              <a className='d-flex align-items-center' href="#">
                <Image src="/setting-2.svg" width={24} height={24} alt="Settings Icon" />
                <span className="mx-2 menu_name d-none d-md-block">Settings</span>
              </a>
            </li>
            <li className='d-flex align-items-center justify-content-center'>
              <hr />
            </li>
          </ul>

          <ul className='nav side-menu2 flex-column w-100 d-none d-md-flex'>
            <li className='nav-link d-flex align-items-center justify-content-between'>
              <span>MY PROJECTS</span>
              <Image src='/add-square.svg' width={16} height={16} alt="Add Icon" />
            </li>
            <li className="mx-2 mt-3 nav-link active green-dot">
              <span className='mx-2 menu_name'>
                Mobile App
              </span>
              <a href="#">...</a>
            </li>
            <li className="mx-2 nav-link orange-dot">
              <span className='mx-2 menu_name'>
                Website Redesign
              </span>
              <a href="#" className='d-none'>...</a>
            </li>
            <li className="mx-2 nav-link pink-dot">
              <span className='mx-2 menu_name'>
                Design System
              </span>
              <a href="#" className='d-none'>...</a>
            </li>
            <li className="mx-2 nav-link blue-dot">
              <span className='mx-2 menu_name'>
                Wireframes
              </span>
              <a href="#" className='d-none'>...</a>
            </li>
          </ul>

          <div className='card h-100 ms-md-3 me-md-3 ms-4 me-4 mb-4 notify-card position-relative d-none d-md-flex'>
            <div className='card-header border-0'>
              <div className='lamp-light'>
              </div>
              <Image src="/lamp-on.svg" width={24} height={24} alt="Lamp Icon" />
            </div>
            <div className='card-body mt-3'>
              <p className='notify-head'>
                Thoughts Time
              </p>
              <p className='notify-body'>
                We don’t have any notice for you, till then you can share your thoughts with your peers.
              </p>
              <button className='btn notify-message'>
                Write a message
              </button>
            </div>
          </div>
        </div>
        {/* End of Navbar */}

        <div className='w-100 component-body'>
          {/* Header Section */}
          <HeadComponent></HeadComponent>
          {/* End of Header Section */}

          <div className='container-fluid p-0'>
            {/* Kanban Section */}
            <Kanban ></Kanban>
            {/* End of Kanban Section */}
          </div>
        </div>
      </div>
    </div >
  )
}

