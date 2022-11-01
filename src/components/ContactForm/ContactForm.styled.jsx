import styled from "styled-components";

export const Input = styled.input`
    margin-top: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    display: block;
    width: 200px;
    height: calc(2.25rem + 2px);
    padding-left: ${p => p.theme.space[4]}px;
    font-size: 1rem;
    font-weight: 400;
    color: ${p => p.theme.colors.gray};
`

export const Button = styled.button`
    border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    border-style: solid;
    border-width: 1px;
    padding: 5px 10px;
    cursor: pointer;
    margin: 10px;
`

export const AddButton = styled.button`
    border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    border-style: solid;
    border-width: 1px;
    padding: 5px 10px;
    cursor: pointer;
    margin: 10px auto;
    display: block;
`

