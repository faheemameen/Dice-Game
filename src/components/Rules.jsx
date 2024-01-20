import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>select any number</p>
        <p>click on dice image</p>
        <p>
          Ater click on dice if selected number is equal todice number you will
          get some points as dice
        </p>
        <p>If you get wrong guess then 2 points will detected </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
