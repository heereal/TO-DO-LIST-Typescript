import Router from "./shared/Router";
import styled from "styled-components";

function App () {
  return (
    <Wrap>
      <Router />
    </Wrap>
  );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default App; 