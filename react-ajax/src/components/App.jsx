import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" }
];


function App(props) {
  const [stateData, setStateData] = useState([]);
  //control form
  const [queryInput, setQueryInput] = useState('bootstrap');

  const initialValues = props.value;


  useEffect(function(){
    //code to run only once
    console.log("running effect hook");
    const initUrl = "https://api.github.com/search/repositories?q="+"react"+"&sort=stars";
    //when the buzzer goes off, do something
    fetch(initUrl)
      .then(function(response) {
        const jsonBuzzer = response.json();
        return jsonBuzzer;
      })
      .then((data) => {
        console.log(data);
        setStateData(data.items)
      })
      .catch((error) => {
        console.log("got an error");
        console.log(error);
      });
  

  }, []);




  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitting form");

    // let data = null;
    // try {
    //   const response = await fetch(url);
    //   data = await response.json();
    //   console.log(data);
    // } catch(error) {
    //   data = [];
    // }
    const url = "https://api.github.com/search/repositories?q="+queryInput+"&sort=stars";
    //when the buzzer goes off, do something
    fetch(url)
      .then(function(response) {
        const jsonBuzzer = response.json();
        return jsonBuzzer;
      })
      .then((data) => {
        console.log(data);
        setStateData(data.items)
      })
      .catch((error) => {
        console.log("got an error");
        console.log(error);
      });




    // //when the buzzer goes off, do something
    // buzzerPromise.then(function(response) {
    //   console.log("buzzer buzzed - response ready");
    //   console.log(response);
    //   console.log(response.status);

    //   const jsonBuzzer = response.json();
    //   jsonBuzzer.then((data) => {
    //     console.log("json buzzer buzzed - data ready");
    //     console.log(data);
    //   })

    // })


    //when a button is clicked, do something
    //addEventListener('click', function(){})
    console.log("after request sent");



    //do something with form input!

  }


  //render the data
  const dataElemArray = stateData.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  console.log("rendering content");

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" 
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
        <button type="submit" className="btn btn-primary">Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;