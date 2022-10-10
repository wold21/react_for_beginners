import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UseGreeting from "./components/UseGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import Fragment from "./components/Fragment";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";

function App() {
    return (
        <div className="App">
            {/* <Greet name="T" nickName="O">
                <p>This is children element</p>
            </Greet>
            <Greet name="A" nickName="Z">
                <button>Action</button>
            </Greet>
            <Greet name="Z" nickName="A" />
            <Greet name="O" nickName="T" />
            <Welcome name="T" nickName="O" />
            <Welcome name="T" nickName="O" />
            <Welcome name="T" nickName="O" />
            <Message />
            <FunctionClick />
            <ClassClick /> 
            <EventBind />
            <ParentComponent />
            <UseGreeting />
            <NameList />
            <Form />
            <LifecycleA />
            <Fragment />
            <Table />
            <ParentComp />
            <RefsDemo />
            <FocusInput />
            <FRParentInput />*/}
            <PortalDemo />
        </div>
    );
}

export default App;
