/**
 * Home Screen
 */
import React, { useReducer } from "react";
import { Container } from "./styled";
import reducer, { initialState } from "./reducer";
import Button from "@material-ui/core/Button";
import { TEST_REDUCER } from "./constants";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleOnClick = () =>
    dispatch({ type: TEST_REDUCER, testValue: "USE REDUCER HOOK" });
  const { testValue } = state;
  return (
    <Container>
      <Button onClick={handleOnClick} variant="contained" color="primary">
        {testValue}
      </Button>
    </Container>
  );
};

export const Usage = () => {
  return <Home />;
};
Home.title = "HomeUsage";

export default Home;
