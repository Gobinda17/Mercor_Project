import Image from 'next/image';

export default function Home() {
  return (
    <div className='card h-100 main_card'>
      <div className='card-body p-0'>
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
          <ul className="nav flex-column w-100">
            <li className="nav-link nav-brand h3 text-white my-2">
              <Image src="/logo.svg" width={24} height={24} alert="Logo" />
              <span className='mx-2'>Project M.</span>
            </li>
            <li href="#" className="nav-link pt-3">
              <Image src="/category.svg" width={24} height={24} alt="Home Icon" />
              <span className="mx-2 menu_name">Home</span>
            </li>
            <li href="#" className="nav-link">
              <Image src="/message.svg" width={24} height={24} alt="Message Icon" />
              <span className="mx-2 menu_name">Message</span>
            </li>
            <li href="#" className="nav-link">
              <Image src="/task-square.svg" width={24} height={24} alt="Tasks Icon" />
              <span className="mx-2 menu_name">Tasks</span>
            </li>
            <li href="#" className="nav-link">
              <Image src="/profile-2user.svg" width={24} height={24} alt="Members Icon" />
              <span className="mx-2 menu_name">Members</span>
            </li>
            <li href="#" className="nav-link pb-3">
              <Image src="/setting-2.svg" width={24} height={24} alt="Settings Icon" />
              <span className="mx-2 menu_name">Settings</span>
            </li>
            <li className='d-flex align-items-center justify-content-center'>
              <hr/>
            </li>
          </ul>

          <ul className='nav side-menu2 flex-column w-100'>
            <li className='nav-link d-flex align-items-center justify-content-between'>
              <span>MY PROJECTS</span>
              <Image src='/add-square.svg' width={16} height={16} alt="Add Icon"/>
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

          <div className='card h-100 m-4 notify-card position-relative'>
            <div className='card-header border-0'>
              <Image src="/lamp-on.svg" width={24} height={24} alt="Lamp Icon"/>
            </div>
            <div className='card-body'>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

