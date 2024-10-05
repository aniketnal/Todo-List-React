import React from 'react'

const Main = () => {
  return (
    <div>
      <div className="container mx-auto font-display">
          <div className='flex flex-col bg-violet-600 mx-[4rem] max-sm:mx-[1rem] border-x-4 border-b-4 rounded-b-xl '>
            <div className="input max-sm:flex-col flex items-center justify-center gap-5">
              <label className=' text-sm max-sm:text-sm mt-2 text-white' htmlFor="">Enter Todo:</label>
              <input type="text" className='bg-slate-300 my-3 max-sm:my-1 rounded-sm w-[60%] px-2'/>
              <button className='bg-green-600 max-sm:mb-2 px-2 py-1 rounded-lg text-center font-medium '>Add Todo</button>
            </div>
            <div className="list bg-violet-200 p-4">

              <h1 className='text-xl font-semibold ml-2 mb-2'>YOUR TODOS</h1>
              <div className='todo  p-2 flex items-center'>
                <div className="1 flex gap-4 w-[90%]">
                  <input type="checkbox" />
                  <span>Organize your study materials.</span>
                </div>
                <div className="2 flex gap-4 items-center">
                  <button className='bg-blue-400 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Edit</button>
                  <button className='bg-red-600 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Delete</button>
                </div>
              </div>

              <div className='todo p-2 flex items-center'>
                <div className="1 flex gap-4 w-[90%]">
                  <input type="checkbox" />
                  <span>Research a new web development framework.</span>
                </div>
                <div className="2 flex gap-4 items-center">
                  <button className='bg-blue-400 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Edit</button>
                  <button className='bg-red-600 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Delete</button>
                </div>
              </div>
              
              <div className='todo p-2 flex items-center'>
                <div className="1 flex gap-4 w-[90%]">
                  <input type="checkbox" />
                  <span>Do a quick coding challenge (30 minutes).</span>
                </div>
                <div className="2 flex gap-4 items-center">
                  <button className='bg-blue-400 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Edit</button>
                  <button className='bg-red-600 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Delete</button>
                </div>
              </div>

              <div className='todo p-2 flex items-center'>
                <div className="1 flex gap-4 w-[90%]">
                  <input type="checkbox" />
                  <span>Write down 3 goals for next month.</span>
                </div>
                <div className="2 flex gap-4 items-center">
                  <button className='bg-blue-400 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Edit</button>
                  <button className='bg-red-600 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Delete</button>
                </div>
              </div>

              <div className='todo p-2 flex items-center'>
                <div className="1 flex gap-4 w-[90%]">
                  <input type="checkbox" />
                  <span>Take a 10-minute walk to refresh your mind.</span>
                </div>
                <div className="2 flex gap-4 items-center">
                  <button className='bg-blue-400 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Edit</button>
                  <button className='bg-red-600 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Delete</button>
                </div>
              </div>

              <div className='todo p-2 flex items-center'>
                <div className="1 flex gap-4 w-[90%]">
                  <input type="checkbox" />
                  <span>Explore a cybersecurity news article.</span>
                </div>
                <div className="2 flex gap-4 items-center">
                  <button className='bg-blue-400 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Edit</button>
                  <button className='bg-red-600 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Delete</button>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Main
