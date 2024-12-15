import React from 'react'

const News = () => {
  return (
    <>

        {/* <div className='py-12 bg-[#F9F9F9] text-[#2A254B] mt-12'>
          <div className='w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-white mx-auto flex justify-center items-center flex-col px-4'>
            <h1 className='text-2xl md:text-4xl text-center'>
              Join the club and get the benefits
            </h1>
            <h2 className='text-center py-4 text-sm md:text-base'>
              Sign up for our newsletter and receive exclusive offers on new
              <br /> ranges, sales, pop-up stores, and more.
            </h2>
            <div className='mt-4 w-full'>
              <form action="" className='flex flex-col md:flex-row items-center justify-center'>
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] outline-none mb-4 md:mb-0"
                />
                <button className='p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px]'>
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div> */}
          <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-[#2A254B;] h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default News;
