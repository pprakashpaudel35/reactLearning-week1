import Buttons from './components/buttons';
import { useState } from 'react';
import './App.css';
import { DataNodes } from './components/data';

function App() {
  const [finalvalue , modifiedvalue] = useState()

  function btnselected(parameter){
    modifiedvalue(parameter)
    console.log(parameter)
  }

  return(
    <div id="pageOne">
      <div className="navBar">
        <Buttons 
          afterSelect={finalvalue==='prakash'}
          onSelect={()=>btnselected('prakash')}>PRAKASH
        </Buttons>

        <Buttons 
          afterSelect={finalvalue==='monisha'}
          onSelect={()=>btnselected('monisha')}>MONISHA
        </Buttons>

        <Buttons 
          afterSelect={finalvalue==='pradeep'}
          onSelect={()=>btnselected('pradeep')}>PRADEEP
        </Buttons>

        <Buttons 
          afterSelect={finalvalue==='sharmila'}
          onSelect={()=>btnselected('sharmila')}>SHARMILA
        </Buttons>

        <Buttons 
          afterSelect={finalvalue==='brindaa'}
          onSelect={()=>btnselected('brindaa')}>BRINDAA
        </Buttons>

        <Buttons 
          afterSelect={finalvalue==='roshini'}
          onSelect={()=>btnselected('roshini')}>ROSHINI
        </Buttons>

        <Buttons 
          afterSelect={finalvalue==='priyanka'}
          onSelect={()=>btnselected('priyanka')}>PRIYANKA
        </Buttons>
      </div>

      {finalvalue ? <div className="content">
        <h2>{DataNodes[finalvalue].name}</h2>
        <p>{DataNodes[finalvalue].description}</p>
      </div> : <p className='content'>SELECT ANY TO VIEW INFO</p>}

      
    </div>
  )
}

export default App;
