import React from 'react'

const ClickEvent = () => {

    const greeting = () =>{
        alert('greeting!');
    }

    const changeBox = e =>{
        const $box = document.querySelector('.box');
        $box.style.background  = 'skyblue';
        $box.style.width = '200px';
        $box.style.height = '200px';
    }

  return (
    <>
        <button id='btn1' onClick={ ()=>alert('good~') }>click me!</button><br></br>
        <button id='btn2' onClick={ greeting }>greeting!</button><br></br>
        <button id='btn3' onMouseOver={ changeBox }>Over Me!</button>

        <div className='box'></div>
    </>
  );
}

export default ClickEvent;