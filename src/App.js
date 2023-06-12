import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import Hello from './Hello';
import ChangeEvent from './component/chap01_event/ChangeEvent';
import ClickEvent from './component/chap01_event/ClickEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';
import Foodlist from './component/chap02_props/Foodlist';

//React에서는 1개의 Component가 여러개의 Element를 반환할수 있다!
//JSX작성시 return문안에 반드시 1개의 최상위 태그가 존재해야함.
//Fragment사용시 의미없는 태그를 줄여 가독성을 좋게함
function App() {

  const looping = () =>{
    const helloList = [];
    for(let i=0; i<5; i++){
      helloList.push(<SayHello/>);
    }
    return helloList;
  }

//JSX문법 에서는 스크립트를 코드로 직접 사용 불가능.
//{}안에서 함수호출문이나 변수참조는 가능!
  return (
    <>
      <Foodlist/>
    </>
  );
}

export default App;
