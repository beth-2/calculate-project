import React, { useState } from 'react';
import { Button, Input, ButtonP, Div, ButtonR, ButtonW, ButtonWI } from './Calculate.styles';

const Calculater = () => {
  const [ state, setState ] = useState("");

  const handleClick = (e) => {
    setState(state.concat(e.target.name))
  }

  const C = (e) => {
    setState(state.slice(0, - 1))
  }

  const calculate = (e) => {
    try{
      setState(eval(state).toString())
    }catch(err){
      setState('ERROR')
    }
    
  }

  const clear = () => {
    setState('')
  }

  return (
    <div>

     <Div>

     <form>
       <Input type='text' value={state} />
     </form>

      <ButtonWI onClick={clear} >clear</ButtonWI>
      <ButtonW onClick={C} >c</ButtonW>
      <ButtonR name='/' onClick={handleClick} >&divide;</ButtonR>
      <br/>
      <Button name='7' onClick={handleClick} >7</Button>
      <Button name='8' onClick={handleClick} >8</Button>
      <Button name='9' onClick={handleClick} >9</Button>
      <ButtonR name='*' onClick={handleClick} >&times;</ButtonR>
      <br/>
      <Button name='4' onClick={handleClick} >4</Button>
      <Button name='5' onClick={handleClick} >5</Button>
      <Button name='6' onClick={handleClick} >6</Button>
      <ButtonR name='-' onClick={handleClick} >&ndash;</ButtonR>
      <br/>
      <Button name='1' onClick={handleClick} >1</Button>
      <Button name='2' onClick={handleClick} >2</Button>
      <Button name='3' onClick={handleClick} >3</Button>
      <ButtonR name='+' onClick={handleClick} >+</ButtonR>
      <br/>
      <ButtonP name='0' onClick={handleClick} >0</ButtonP>
      <Button name='.' onClick={handleClick} >.</Button>
      <ButtonW onClick={calculate} >=</ButtonW>
      </Div>

    </div>
  )
}

export default Calculater
