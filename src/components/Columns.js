import React from "react";

function Columns() {
    const items = [
        {
            id: 1,
            title: "title",
        },
    ];
    return (
        <>
            <td>name</td>
            <td>Tazo</td>
        </>
    );
}

export default Columns;

{
    /* <React.Fragment>
    {items.map((item) => (
        <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
        </React.Fragment>
    ))}
</React.Fragment> */
}
