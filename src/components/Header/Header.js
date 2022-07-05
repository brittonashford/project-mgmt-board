import styled from 'styled-components';

function Header() {

    const HeaderWrapper = styled.div`
        background-color: blue;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    `;

    return (
        <HeaderWrapper>
            <h1>Project Management Board</h1>
        </HeaderWrapper>
    )
}

export default Header;