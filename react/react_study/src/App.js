import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import InputSample from "./pages/InputSample/InputSample";
import UserList from "./pages/UserList/UserList";
// import TodoList from "./pages/TodoList(PR)/TodoList";
import { reset } from "./styles/Global/reset";
import Todo from "./pages/Todo/Todo";
import NumberCounter from "./pages/NumberCounter/NumberCounter";

function Test1() {
  return (<h1>test1</h1>);
}

function Test2() {
  return (<h1>test2</h1>);
}

// route를 사용하기 위해서 Routes안에 컴포넌트들이 들어가게 됨.
function App() {
  return (
    <>
      {/* <Link to={"/t1"}>T1</Link><br />
      <Link to={"/t2"}>T2</Link><br />
    <Link to={"/sample/input/1"}>InputSimple</Link><br /> */}
      <Global styles={reset}/>  
      <MainAside />
      <Routes>
        <Route path="/t1" Component={Test1}/>
        <Route path="/t2" Component={Test2}/>
        <Route path="/sample/input/1" Component={InputSample}/>
        <Route path="/users" Component={UserList}/>
        <Route path="/todo" Component={Todo} />
        <Route path="/number/counter" Component={NumberCounter} />
      </Routes>
    </>
  );
}

export default App;
