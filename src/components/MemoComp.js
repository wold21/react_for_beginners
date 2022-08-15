import React from "react";

function MemoComp({ name }) {
    console.log("rendering memo component");
    return <div>{name}</div>;
}

export default React.memo(MemoComp);

/**
 * PureComponent와 비슷한 점이 있다.
 * 자세한 내용은 이후 영상에 있음.
 * 대신 React 16.6 이상과 일반 Component에서 작동한다.
 */
