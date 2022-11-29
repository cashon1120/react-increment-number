# Number Increment Animation

React number increment animation component

### install
`npm install react-increment-number`  
or  
`yarn add vue-increment-number`

[DEMO](https://increment.hi515.cn)
### use
```javascript 
import { useState } from 'react'
import IncrementNumber from "react-increment-number";

const [number, setNumber] = useState(0)
const [speed, setSpeed] = useState(5)

const handleAnimationEnd = (endValue: number) => {
    console.log('animation end', endValue)
}
// to: target number(value must be a number)
// speed: animation speed(1-10) and default value is 5;
<template>
    <IncrementNumber to={number} speed={speed} callback={handleAnimationEnd} />
</template>
```