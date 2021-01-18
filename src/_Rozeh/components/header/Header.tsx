import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    div {
        display: flex;
        flex: 1;
        height: 100px;
        background-color: purple;
    }
`;
const Header = () => {
    return (
        <HeaderBlock>
            <div>PC Header</div>
        </HeaderBlock>
    )
}

export default Header;