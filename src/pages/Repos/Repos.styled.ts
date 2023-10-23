import styled from 'styled-components';

export const Container = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    font-size: 1.5625rem;
    gap: 2rem;
    height: 100vh;
    list-style: none;
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: 1.875rem;
`

export const FilterContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    gap: 2rem;
    list-style: none;
`;

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: center;
    gap: 0.625rem;
    
    button {
        background-color: transparent;
        border-radius: 0.625rem;
        cursor: pointer;
        font-size: 1.125rem;
        padding: 0.3125rem 0.625rem;
    }
`;
