import React, {useState} from 'react';
import './App.css';
import { question } from './question';
import MyAccordion from './MyAccordion'

function App() {
  const [data, setData] = useState(question);
  return (
    <>
    <section className='main-div'>
    <h1>React Interview Questions</h1>
        {
            data.map((curElem) => {
              const {id}  = curElem;
              return <MyAccordion key={id} {...curElem} />
            })
        }
        </section>
    </>
  );
}

export default App;
