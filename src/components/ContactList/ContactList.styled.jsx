import styled from "styled-components";

export const ContactOrder = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -10px;
    margin-left: -10px;
`
export const ContactLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid black;
     flex-basis: calc((100% - 20px) / 5);
    padding: ${p => p.theme.space[3]}px;
    margin-top: 10px;
    margin-left: 10px;
`