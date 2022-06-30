import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '제주 우동 맛집';
  let [글제목, 글제목변경]=useState(['여자코트추천', '리액트기초', '10주차회고']);
  let [따봉, 따봉변경]= useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button onClick={ ()=>{ 
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy)
    } }> 가나다순 </button>

      {/* <div className = "list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉}</h4>
        <p>6월 16일 발행</p>
      </div>
      <div className = "list">
        <h4>{글제목[1]}</h4>
        <p>6월 16일 발행</p>
      </div>
      <div className = "list">
        <h4>{글제목[2]}</h4>
        <p>6월 16일 발행</p>
      </div> */}
      {
        글제목.map(function(a, i){
          return(
          <div className = "list">
            <h4 onClick={()=>{setModal(!modal)}}>{a} <span onClick={(e)=>{
              e.stopPropagation();
              let like = [...따봉];
              like[i] = like[i]+1
              따봉변경(like)
            }}>👍🏻</span> {따봉[i]}</h4>
            <p>6월 16일 발행</p>
            <button onClick={()=>{
              let copy=[...글제목];
              copy.splice(i,1)
              글제목변경(copy);
            }}>삭제</button>
          </div>
          )
        })
      }
      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>
      <button onClick={()=>{
        let copy=[...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>등록</button>
      {
        modal === true ? <Modal 글제목={글제목}/> : null
      }
      
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
    <h4>{props.글제목[0]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}




export default App;
