import React from 'react'
import Fooditem from './Fooditem';

const Foodlist = () => {

    //fetch문을 통해 서버에서 음식목록을 json으로 받기
    const food = {
        id: 327432,
        foodList : [
            {
                fName: '짜장면',
                price: 6000,
                id: 'chinese'
            },
            {
                fName: '해물파전',
                price: 12000,
                id: 'korean'
            },
            {
                fName: '가츠동',
                price: 8000,
                id: 'japanese'
            },
            {
                fName: '김치찌개',
                price: 5000,
                id: 'korean'
            },
            {
                fName: '탕수육',
                price: 20000,
                id: 'chinese'
            },
    
        ]
      }

  return (
    <ul>
        {/* <Fooditem foodName='짜장면' price={6000} foodId = 'chinese'/>
            <Fooditem foodName='해물파전' price={12000} foodId = 'korean'/>
            <Fooditem foodName='가츠동' price={8000} foodId = 'japanese'/> */}
            {
                food.foodList.map(f => <Fooditem foodName={f.fName} price={f.price} foodId={f.id}/>)
            }
    </ul>




  );
}

export default Foodlist