import React from 'react';
import styled from 'styled-components';

const MiddleBlock = styled.div`
    div {
        display: flex;
        flex: 1;
        height: 500px;
        background-color: greenyellow;
    }
`;
const Middle = () => {
    return (
        <MiddleBlock>
            <div>PC Middle</div>
        </MiddleBlock>
    )
}

export default Middle;