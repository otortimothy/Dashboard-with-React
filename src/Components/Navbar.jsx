

const Navbar = () => {
  return (
    <div className=''>
    <nav className=' px-5 py-6 flex justify-between border-b w-full'>
      <div className='flex'>
          <img src='/public/Images/Payroll (1).svg' className='-mt-4'/>
          <div className='inline-grid'>
          <span className='font-bold'>Pay Slips</span>
          <div className='text-xs -ml-5'>View all your pay slips</div>
          </div>


      </div>



      <div className='flex gap-3'>
      <img src='/public/Images/Notification.svg' className=''/>
      <img src='/public/Images/Ellipse 1 (2).svg' className="" />
      <div>
        <span className='font-medium text-sm'>Annabel M. Okafor</span>
        <div className='font-light text-xs'>UI/UX Designer | IT  Dept</div>
      </div>
      <img src='/public/Images/Chevron Down.svg' className=''/>
      </div>
    </nav>
    </div>
  )
}

export default Navbar