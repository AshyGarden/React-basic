import React from 'react'

const Fooditem = ({foodId: id, foodName: name, price: price}) => {

    console.log(id, name, price);
  return (
    <li id='{id}'>{name} ({price}원)</li>
  )
}

export default Fooditem;