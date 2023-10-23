import styled from "styled-components";

export const Results = styled.ul`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    font-size: 1.5625rem;
    height: 100vh;
`;

export const UserInfo = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
`;

export const Avatar = styled.img`
    border-radius: 0.625rem;
    height: 18.75rem;
    width: 18.75rem;
`;


export const UserInfoContainer = styled.div`
    align-items: center;
    display: flex;
`;

export const UserNotFound = styled.div`
    align-items: center;
    display: flex;
    gap: 1.25rem;
    padding: 1.25rem;
`;
