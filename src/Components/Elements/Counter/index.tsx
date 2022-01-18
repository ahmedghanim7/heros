import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import { ContainerCounter, CounterDiv } from "./counter.style";

interface IPropsCounter {
  counter: number;
  setCounter: Function;
}

const Counter: React.FC<IPropsCounter> = (props: IPropsCounter) => {
  const { setCounter, counter } = props;
  const [count, setstateCount] = useState(counter);
  const increment = () => {
    setstateCount((prev: number) => prev + 1);
  };

  const decrement = () => {
    if (count === 0) return setstateCount(0);
    else setstateCount((prev: number) => prev - 1);
  };
  useEffect(() => {
    setCounter(count);
  }, [count]);

  return (
    <ContainerCounter>
      <Button
        bold={true}
        borderHover={" 1px solid #FCDD06"}
        border={" 1px solid #fcdd0029"}
        borderRaduies={"0px"}
        padding={"0rem .8rem "}
        onClick={decrement}
        backgroundColor={"#fff"}
        type="submit"
        fontSize={"14px"}
        colorHover={"#000"}
        color={"#a29d9d"}
      >
        -
      </Button>

      <CounterDiv>{count}</CounterDiv>
      <Button
        borderHover={"1px solid #FCDD06"}
        borderRaduies={"0px"}
        padding={"0rem .8rem"}
        border={" 1px solid #fcdd0029"}
        backgroundColor={"#fff"}
        type="submit"
        fontSize={"14px"}
        colorHover={"#000"}
        color={"#a29d9d"}
        onClick={increment}
      >
        +
      </Button>
    </ContainerCounter>
  );
};

export default Counter;