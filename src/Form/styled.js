import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.lightBrown};
    color: ${({ theme }) => theme.color.black};
    height: 80vh;
    font-size: 25px;
    padding: 10px;
    margin: auto;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.color.maroon};;
    text-align: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(8, 1fr);
`;

export const StyledHeader = styled.h1`
    background-color: transparent;
    grid-area: 2 / 1 / 3 / -1;
    font-size: 40px;
    font-weight: bold;
    text-shadow: ${({theme}) => theme.color.black};
    color: ${({ theme }) => theme.color.maroon};
`;

export const StyledInfo = styled.p`
    font-size: 20px;
`;

export const StyledField = styled.select`
    width: 200px;
    align-items: right;
    border-radius: 5px;
    text-align: center;
`;

export const StyledInput = styled.input`
    width: 200px;
    align-items: right;
    border-radius: 5px;
    text-align: center;
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.maroon};
    color: ${({theme}) => theme.color.white};
    font-size: 25px;
    grid-area: 4 / 1 / 5 / -1;
    margin-top: 5px;
    padding: 10px 30px;
    border: 2px solid ${({ theme }) => theme.color.white};
    box-shadow: 0px 0px 3px ${({theme}) => theme.color.maroon};
    border-radius: 10px;
`;

export const StyledLabel = styled.span`
    color: ${({ theme }) => theme.color.maroon};
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.maroon};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.red};
`;
