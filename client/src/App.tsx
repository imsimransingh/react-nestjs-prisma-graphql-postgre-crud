import React, { useState } from "react";

import styled from "styled-components";

import TableComponent from "./components/tables/TableComponent";

import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
 
 
const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #cccccc;
`;

const AppHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

const HeaderText = styled.h1`
  font-family: "Roboto", sans-serif;
`;

const Username = styled.span`
  font-family: "Roboto", sans-serif;
`;

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  React.useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((results) => results.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <AppWrapper>
      <AppHeader>
        <HeaderText>Short Url Library</HeaderText>
        <Username>Welcome, {user ? user.firstName : "Guest"}!</Username>
      </AppHeader> 
      <Container>
        <TableComponent />
      </Container>
    </AppWrapper>
  );
};

export default App;
