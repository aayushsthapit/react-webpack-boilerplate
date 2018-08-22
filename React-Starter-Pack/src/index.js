import React from 'react'
import ReactDOM from 'react-dom'
const ShowHello=()=>{
    return <div>Wddup!</div>
}

import(/*webpackChunkName:'test'*/'./test').then(TestComponent=>{
    ReactDOM.render(<TestComponent.default/>,document.getElementById('index'))
})



if(module.hot)
{
    module.hot.accept()
}