import './main'
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dasboard';


function App () {


  return (

    <div className='w-full flex bg-gray-100'>
{/* <img src='/public/Images/Logo.png'/>
<img src='/public/Images/Dashboard (1).svg'/>
<img src='/public/Images/Performance.svg'/>
<img src='/public/Images/Projects.svg'/>
<img src='/public/Images/Attendance.svg'/>
<img src='/public/Images/Payroll.svg'/>
<img src='/public/Images/Notice Board.svg'/>
<img src='/public/Images/Awards.svg'/>
<img src='/public/Images/Settings.svg'/> */}
        <div className='w-[20%]'><Sidebar /></div>
        <div className='w-[80%]'><Dashboard /></div>
    </div>

  );
}

export default App;
