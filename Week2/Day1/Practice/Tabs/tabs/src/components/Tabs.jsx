import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const tabItems = [
    {
      label: 'Tab 1',
      content: 'This is the content of Tab 1',
    },
    {
      label: 'Tab 2',
      content: 'This is the content of Tab 2',
    },
    {
      label: 'Tab 3',
      content: 'This is the content of Tab 3',
    },
  ];

  const [tabs, setTabs] = useState([{label : 'Tab 1', content : 'This is the content of Tab 1'}])
  // const handleSub = (index)=>{
  //   const tabUpdated = tabs.filter((_, i) => i === index)

  //   setTabs(tabUpdated)
  //   console.log(tabs)
  // }
  const handleTab1 = () => {
    const updatedTab = [...tabItems]
    const tab1 = updatedTab.filter((_, i) => {
      return i === 0
    })
    setTabs(tab1)

  }
  const handleTab2 = () => {
    const updatedTab = [...tabItems]
    const tab2 = updatedTab.filter((_, i) => {
      return i === 1
    })
    setTabs(tab2)

  }
  const handleTab3 = () => {
    const updatedTab = [...tabItems]
    const tab3 = updatedTab.filter((_, i) => {
      return i === 2
    })
    setTabs(tab3)

  }


  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        {JSON.stringify(tabs)}
        {/* <div>
          {tabs.map((oneTab, index)=>{
            return(
              <div key={index}>
              <button onClick={()=>{handleSub(index)}}>{oneTab.label}</button>
              <p>{oneTab.content}</p>
              </div>
            )

          })}
        </div> */}
        <div>
          <button onClick={() => { handleTab1() }}>tab1</button>
          <button onClick={() => { handleTab2() }}>tab2</button>
          <button onClick={() => { handleTab3() }}>tab3</button>
        </div>
        <div>
            {tabs.map((oneTab, index) => (
              <div key={index}>
                <p>{oneTab.content}</p>
              </div>
            ))}
          </div>


      </fieldset>
    </div>
  );
}

export default App;
