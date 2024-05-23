# React + Vite
## README

### Election Summary App

This React application allows users to vote for different political parties and see the total vote count as well as the percentage of votes each party has received from the total votes.

### Features

- **Vote Counting**: Each party starts with zero votes. Users can increment the vote count by clicking on the "Vote" button.
- **Percentage Calculation**: The app calculates and displays the percentage of total votes each party has received.
- **Total Votes**: The app displays the total number of votes cast.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/election-summary-app.git
   cd election-summary-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npm start
   ```

### Usage

1. Open the app in your browser at `http://localhost:3000`.
2. You will see a list of parties (BJP, AAP, CONGRESS, OTHERS).
3. Click the "Vote" button next to any party to increment its vote count.
4. The app will update the total vote count and recalculate the percentage of votes for each party in real-time.

### Code Overview

#### State Initialization

The state is initialized with the total vote count (`count`) and an array of party objects (`item`). Each party object contains an `id`, `name`, `vote`, and `percent` property.

```javascript
const [count, setCount] = useState(0);

const [item, setItem] = useState([
  { id: 0, name: "BJP", vote: 0, percent: "0.00" },
  { id: 1, name: "AAP", vote: 0, percent: "0.00" },
  { id: 2, name: "CONGRESS", vote: 0, percent: "0.00" },
  { id: 3, name: "OTHERS", vote: 0, percent: "0.00" }
]);
```

#### Vote Handling

The `handleClick` function is called when a vote button is clicked. It increments the total vote count and updates the vote count and percentage for the selected party.

```javascript
const handleClick = (id) => {
  const newCount = count + 1;
  setCount(newCount);

  setItem(prevItems =>
    prevItems.map(ele =>
      ele.id === id
        ? { ...ele, vote: ele.vote + 1, percent: ((ele.vote + 1) / newCount * 100).toFixed(2) }
        : { ...ele, percent: ((ele.vote) / newCount * 100).toFixed(2) }
    )
  );
};
```

#### Rendering

The component renders the total votes and a list of parties. Each party displays its name, vote count, and percentage of total votes. A "Vote" button is provided for each party to increment its vote count.

```javascript
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
      {item.map(ele => (
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
      ))}
    </section>
  </>
);
```

### Technologies Used

- React
- CSS (using TailwindCSS for styling)

### License

This project is licensed under the MIT License.

### Acknowledgements

Thanks to all the contributors and open-source projects that made this project possible.

### Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/your-username/election-summary-app).
