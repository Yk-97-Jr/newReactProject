import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import RootComponent from "./components/RootComponent"

const Container = styled.div`
  display: block;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <RootComponent/>
    </Container>
  );
}

export default App;
