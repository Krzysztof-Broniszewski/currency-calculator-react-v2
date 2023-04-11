import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.ebb};
    color: ${({ theme }) => theme.color.nuttmeg};
    font-size: 25px;
    padding: 10px;
    margin: auto;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.color.nutmeg};;
    text-align: center;
    justify-content: center;
`;

export const StyledHeader = styled.h1`
    background-color: transparent;
    font-size: 40px;
    font-weight: bold;
    text-shadow: black;
    color: ${({ theme }) => theme.color.nutmeg};
`;

export const StyledInfo = styled.p`
    font-size: 20px;
`;

export const StyledField = styled.select`
    border-radius: 5px;
    text-align: center;
`;

export const StyledInput = styled.input`
    border-radius: 5px;
    text-align: center;
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.nutmeg};
    color: white;
    font-size: 25px;
    margin-top: 5px;
    padding: 10px 30px;
    border: 2px solid white;
    border-radius: 10px;
`;

export const StyledLabel = styled.span`
    color: ${({ theme }) => theme.color.nutmeg};
`;

