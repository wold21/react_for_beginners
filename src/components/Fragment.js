import React from "react";

function Fragment() {
    return (
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the Fragment Demo component</p>
        </React.Fragment>
    );
}

export default Fragment;

/**
 * 기본적으로 각 컴포넌트는 JSX의 규칙에 따라 하나의 태그로 둘러싼 JSX를 리턴해야한다.
 * 하지만 테이블 태그의 값을 컴포넌트화 시켜서 할 경우 중간에 의미없는 태그가 들어가게 되는데
 * ex: <tbody>
 *          <tr>
 *              <div>
 *                  <td></td>
 *              </div>
 *          </tr>
 *     </tbody>
 * React.Fragment를 태그로 사용한다면 해당 부분을 해결할 수 있다.
 * 컴포넌트의 조각으로 활용하겠다. 라는 뜻인가보다.
 * 해당 태그를 <></>로 줄여서 사용할 수 있다.
 */
