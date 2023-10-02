import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchWrapper = styled.header`
  width: 100%;
  background-color: grey;
  height: 150px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.input`
  width: 400px;
  height: 30px;
  padding-left: 10px;
`;

export const SearchButton = styled(Link)`
  width: 80px;
  height: 30px;
`;
