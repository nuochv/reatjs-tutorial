/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import HeaderClass from "./components/HeaderClass";
import "./styles/styles.css";
import JSON from "./db.json";
import { useState } from "react";
import NewList from "./components/NewList";

function App() {
    const [news, setNews] = useState(JSON);
    const [text, setOnText] = useState("");
    const onText = (value) => {
        setOnText(value);
    };
    return (
        <div>
            <HeaderClass onText={onText} />
            <NewList news={news} textHH={text} />
        </div>
    );
}

export default App;
