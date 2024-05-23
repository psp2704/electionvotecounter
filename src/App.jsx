import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [item, setItem] = useState([{
    id: 0,
    name: "BJP",
    vote: 0,
    percent: "0.00"
  }, {
    id: 1,
    name: "AAP",
    vote: 0,
    percent: "0.00"
  }, {
    id: 2,
    name: "CONGRESS",
    vote: 0,
    percent: "0.00"
  }, {
    id: 3,
    name: "OTHERS",
    vote: 0,
    percent: "0.00"
  }]);

  const handleClick = (id) => {
    const newCount = count + 1;
    setCount(newCount);

    setItem(prevItems =>
      prevItems.map(ele =>
        ele.id === id ? { ...ele, vote: ele.vote + 1, percent: ((ele.vote + 1) / newCount * 100).toFixed(2) } : { ...ele, percent: ((ele.vote) / newCount * 100).toFixed(2) }
      )
    );
  };

  return (
    <>
      <h1 className='text-4xl bg-blue-900 px-3 py-2 text-white mb-5'>Election Summary</h1>
      <section>
        <a href="#" className=" w-100 mb-5 block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Votes</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 font-bold">  <span className='font-bold'>{count} </span></p>
        </a>
      </section>
      <section className='flex flex-wrap gap-2 '>
        {
          item.map(ele => {
            return (
              <div key={ele.id} className="sm:w-full  text-left w-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">{ele.name}</h5>
                </a>
                <p href="#">
                  <h6 className="mb-2 text-2xl   tracking-tight text-gray-900 dark:text-white">{ele.percent} %</h6>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Count of Vote : <span className='font-bold'> {ele.vote}</span></p>
                <a href="#" onClick={() => handleClick(ele.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Vote
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default App
