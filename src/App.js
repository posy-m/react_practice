import logo from './logo.svg';
import './App.css';
import TabButton from './componenets/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data.js'

// const reactDescriptions = ['우리 다같이', '안녕', '후후']

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1))
// }

// function Header() {
//   const description = reactDescriptions[genRandomInt(2)]
//   return (
//     <header>
//       <h1>React</h1>
//       <p>{description} 다같이 손벽을!</p>
//     </header>
//   )
// }

function App() {

  const [change, setChange] = useState(null)

  function clickHandler(selectedBtn) {
    // console.log(selectedBtn);
    setChange(selectedBtn)

  }
  return (
    <div className="App">
      {/* <Header /> */}

      <section >
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => clickHandler('components')}>Componenets</TabButton>
          <TabButton onSelect={() => clickHandler('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => clickHandler('props')}>Props</TabButton>
          <TabButton onSelect={() => clickHandler('state')}>State</TabButton>
        </menu>
        {!change ? <p>내용을 하나 선택해 주세요</p> : (<div>
          <h3>{EXAMPLES[change].title}</h3>
          <p>{EXAMPLES[change].description}</p>
          <pre>
            <code>
              {EXAMPLES[change].code}
            </code>
          </pre>
        </div>)}

      </section>
    </div>
  );
}

export default App;
