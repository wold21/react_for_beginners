import React from "react";
import Person from "./Person";

function NameList() {
    const names = ["kim", "park", "kang", "kim"];
    const persons = [
        {
            id: 1,
            name: "kim",
            age: 26,
            skill: "A",
        },
        {
            id: 2,
            name: "park",
            age: 27,
            skill: "B",
        },
        {
            id: 3,
            name: "choi",
            age: 28,
            skill: "C",
        },
        {
            id: 4,
            name: "kang",
            age: 29,
            skill: "D",
        },
    ];
    // const personList = persons.map((person) => (
    //     <Person key={person.id} person={person} />
    // ));
    const nameList = names.map((name, index) => (
        <h2 key={index}>
            {index} {name}
        </h2>
    ));
    return <div>{nameList}</div>;
}

export default NameList;

// 고유한 어떤 데이터든 키가 될 수 있다.
