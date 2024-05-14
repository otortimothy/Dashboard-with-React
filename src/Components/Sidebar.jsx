

const Sidebar = () => {
  return (
    <div >
    <div className='fixed h-screen bg-white w-[20%]'>
      <div>
          <img src='/public/Images/Logo.png' className='ml-5 mt-5 '/>

      </div>
      <hr/>
      <ul className='mt-16 space-y-3 justify-center'>
      <li>
          <a href="#" className='flex'>
            <img src='/public/Images/Dashboard (1).svg' className='mr-2 ml-6'/>
            Dashboard
            </a>
        </li>

        <li>
          <a href="#" className='flex'>
            <img src='/public/Images/Performance.svg' className='mr-2 ml-6'/>
            Performance
            </a>
        </li>

        <li>
          <a href="#" className='flex'>
            <img src='/public/Images/Projects.svg' className='mr-2 ml-6'/>
            Projects
            </a>
        </li>

        <li>
          <a href="#" className='flex'>
            <img src='/public/Images/Attendance.svg' className='mr-2 ml-6'/>
            Attendance & Leave
            </a>
        </li>

        <li className='bg-gradient-to-r from-amber-700  via-amber-850 to-black  rounded-lg p-2 ml-3 mr-3 text-white'>
          <a href="#" className='flex'>
            <img src='/public/Images/Payroll.svg' className='mr-2'/>
            Pay Slips
            </a>
        </li>

        <li>
          <a href="#" className='flex'>
            <img src='/public/Images/Notice Board.svg' className='mr-2 ml-6'/>
            Notice Board
            </a>
        </li>

        <li>
          <a href="#" className='flex'>
            <img src='/public/Images/Awards.svg' className='mr-2 ml-6'/>
            Awards
            </a>
        </li>

        <li>
          <a href="#" className='flex'>
            <img src='/public/Images/Settings.svg' className='mr-2 ml-6'/>
            Settings
            </a>
        </li>
        </ul>
    </div>
    </div>
  )
}

export default Sidebar