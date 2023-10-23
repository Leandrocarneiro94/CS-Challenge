import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchWrapper = styled.header`
  align-items: center;
  background-color: grey;
  display: flex;
  gap: 0.625rem;
  height: 9.375rem;
  justify-content: center;
  width: 100vw;
`;

export const SearchField = styled.input`
  background: lightgrey;
  border-color: black;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0.0625rem;
  font-size: 1.25rem;
  height: 3.125rem;
  padding-left: 1.25rem;
  width: 31.25rem;
`;

export const SearchButton = styled(Link)`
font-size:1.25rem;
`;
