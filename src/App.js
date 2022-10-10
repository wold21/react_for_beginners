import "./App.css";
import ClickCounter from "./components/ClickCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";

function App() {
    return (
        <div className="App">
            {/* <ClickCounter name={"Tazo"} />
            <HoverCounter />
            <ClickCounterTwo />
            <HoverCounterTwo />
            <User render={(isLoggedIn) => (isLoggedIn ? "Tazo" : "Guest")} />*/}
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounterTwo count={count} incrementCount={incrementCount} />
                )}
            </Counter>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounterTwo count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
