import React from "react";

const SelectButtons = ({goodIncrement, neutralIncrement, badIncrement, countTotalFeedback}) => {
  return (
    <>
      <button onClick={() => {
        goodIncrement()
        countTotalFeedback()
      }}>Good
      </button>
      <button onClick={() => {
        neutralIncrement()
        countTotalFeedback()
      }}>Neutral
      </button>
      <button onClick={() => {
        badIncrement()
        countTotalFeedback()
      }}>Bad
      </button>
    </>

  )
}
export default SelectButtons