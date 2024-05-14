import Navbar from './Navbar'

const Dasboard = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
          <div className='flex gap-3 px-5'>

            <div className=' bg-white mt-5  rounded-lg w-[25%]'>
                <div className='flex py-4 justify-between'>
                          <div className='inline-grid ml-4'>
                              <span className='font-bold'>₦2,500,000</span>
                              <span className='font-thin text-xs'>Current gross salary</span>
                          </div>
                          <img src='/public/Images/Frame 66.svg' className=' size-8 mt-2 mr-5 '/>
                </div>

            </div>

            <div className=' bg-white mt-5  rounded-lg w-[25%]'>
                <div className='flex py-4 justify-between'>
                          <div className='inline-grid mt-1 ml-4'>
                              <span className='font-bold'>₦300,000</span>
                              <span className='font-thin text-xs'>Current net salary</span>
                          </div>
                          <img src='/public/Images/Frame 66 (1).svg' className='mr-6 size-8 mt-2 '/>
                </div>

            </div>

            <div className=' bg-white mt-5  rounded-lg w-[25%]'>
                <div className='flex py-4 justify-between'>
                          <div className='inline-grid mt-1 ml-4'>
                              <span className='font-bold'>₦25,000</span>
                              <span className='font-thin text-xs'>Current deductions</span>
                          </div>
                          <img src='/public/Images/Frame 66 (2).svg' className='mr-6 size-8 mt-2 '/>
                </div>

            </div>

            <div className=' bg-white mt-5 rounded-lg w-[25%]'>
                <div className='flex py-4  justify-between'>
                          <div className='inline-grid mt-1 ml-4'>
                              <span className='font-bold'>31st July</span>
                              <span className='font-thin text-xs'>Next pay date</span>
                          </div>
                          <img src='/public/Images/Frame 66 (3).svg' className='mr-6 size-8 mt-2 '/>
                </div>

            </div>

          </div>



          <div className='mt-5 px-5'>

<div className='p-5 rounded-lg bg-white flex justify-between'>
<span className='font-semibold'>Pay Slip</span>
<div className='items-center'>
  <select name="" id="" placeholder='Big T' className='bg-gray-100'>
    <option value=""></option>
    <option value="asdf">asdf</option>
    <option value="asdf">asdf</option>
    <option value="asdf">asdf</option>
    <option value="asdf">asdf</option>
  </select>
</div>
</div>

<div className='px-5 bg-white rounded-lg mt-5'>

        <div className='pt-4'>
            <div className='font-semibold text-sm flex justify-between px-5 py-4 border'>
              <span className=''>Pay Slip for july 2023</span>
            <img src='/public/Images/Minus.svg' className=''/>
            </div>
        </div>



      <div className=' border'>
          <div className='space-y-5 mt-5 w-[70%]'>

              <div className='px-5 flex justify-between'>
                  <div className='space-x-3'>
                    <span className='text-black font-thin'>Employee name :</span>
                    <span className=''>Annabel M. Okafor</span>
                  </div>

                  <div className='space-x-3'>
                    <span className=' font-thin'>Pay period :</span>
                    <span className=''>July 2023</span>
                  </div>

              </div>


              <div className='px-5 flex justify-between'>
                  <div className='space-x-3'>
                    <span className='text-black font-thin'>Department :</span>
                    <span className=''>IT Department</span>
                  </div>

                  <div className=' space-x-3'>
                    <span className=' font-thin'>Pay date :</span>
                    <span className=''>31/07/2023</span>
                  </div>

              </div>


              <div className=' px-5 flex justify-between'>
                  <div className=' space-x-3'>
                    <span className='text-black font-thin'>Employee type :</span>
                    <span className=''>Full Time</span>
                  </div>

                  <div className='space-x-3'>
                    <span className='font-thin'>Work day :</span>
                    <span className=''>July 2023</span>
                  </div>

              </div>
          </div>


          <div className='flex space-x-10'>

          <div className=' w-[35%]'>

          <div className='border ml-4 mt-3  space-y-2 '>
              <div className=' font-medium bg-gray-100'>
                <div className='py-2 px-5'>
                  Income
                </div>
              </div>

              


                    <div className='border-b flex justify-between py-1 px-5'>
                      <div className=''>Description</div>
                      <div className=''>Amount (₦)</div>
                    </div>

                        <div className='space-y-2 px-5 mt-2'>

                            <div className='flex justify-between'>
                              <div className=''>Basic Salary</div>
                              <div>75,000.00</div>
                            </div>

                            <div className='flex justify-between'>
                              <div className=''>House Allowance</div>
                              <div>10,000.00</div>
                            </div>

                            <div className='flex justify-between'>
                              <div className=''>Transport Allowance</div>
                              <div>15,000.00</div>
                            </div>

                            <div className='flex justify-between'>
                              <div className=''>Others</div>
                              <div>5,000.00</div>
                            </div>

                            <div className='flex justify-between'>
                              <div className=' font-medium'>TOTAL</div>
                              <div className='font-medium'>105,000.00</div>
                            </div>
                        </div>

              </div>

          </div>

          <div className=' w-[35%]'>
          <div className='border mt-3  space-y-2'>
              <div className=' font-medium bg-gray-100'>
                <div className='py-2 px-5'>
                  Deduction
                </div>
              </div>


              <div className=''>

                  <div className='border-b flex justify-between  py-1 px-5'>
                    <div className=''>Description</div>
                    <div className=''>Amount (₦)</div>
                  </div>

                      <div className='space-y-2 mt-2 px-5'>

                          <div className='flex justify-between'>
                            <div className=''>Income Tax</div>
                            <div>15,000.00</div>
                          </div>

                          <div className='flex justify-between'>
                            <div className=''>PAYE</div>
                            <div>5,000.00</div>
                          </div>

                          <div className='flex justify-between'>
                            <div className=''>Pension</div>
                            <div>10,000.00</div>
                          </div>

                          <div className='flex justify-between'>
                            <div className=''> Health Insurance</div>
                            <div>15,000.00</div>
                          </div>

                          <div className='flex justify-between'>
                            <div className='font-medium'>TOTAL</div>
                            <div className='font-medium'>45,000.00</div>
                          </div>
                      </div>

              </div>

          </div>

          </div>


          </div>

              <div className='bg-gray-100 mt-5 w-[80%] flex gap-20 ml-4'>
                  <div className='px-5 py-2'>
                    Gross Salary <span className='font-semibold text-lg'>₦150,000</span>
                  </div>

                  <div className='ml-5 py-2'>
                    Gross Salary <span className='font-semibold text-lg'>₦150,000</span>
                  </div>
              </div>

              <button className=' bg-amber-500 text-white text-sm font-thin py-1 px-5 rounded-md ml-4 mt-4 mb-2'> Download Pay Slip </button>

      </div>

      <div className='mt-5 space-y-3'>

      <div className='border py-3 flex justify-between px-5'> <span>Pay Slip for June 2023</span> <img src='/public/Images/Plus.svg'/> </div>
      <div className='border py-3 flex justify-between px-5'> <span>Pay Slip for June 2023</span> <img src='/public/Images/Plus.svg'/> </div>
      <div className='border py-3 flex justify-between px-5'> <span>Pay Slip for June 2023</span> <img src='/public/Images/Plus.svg'/> </div>

      </div>


      




    </div>
</div>







    </div>



  )
}

export default Dasboard