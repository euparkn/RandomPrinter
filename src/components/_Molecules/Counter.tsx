import { SetStateAction } from "react";
import CircleButton from "../_Atoms/CircleButton";
import Text from "../_Atoms/Text";

interface IProps {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
}

function Counter({ count, setCount }: IProps) {
  const countUp = () => {
    if (count >= 10) {
      return;
    }
    setCount((prev) => prev + 1);
  };

  const countDown = () => {
    if (count <= 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  return (
    <div className="counter">
      <CircleButton iconType="remove" onClick={countDown} />
      <Text text={count.toString()} />
      <CircleButton iconType="add" onClick={countUp} />
    </div>
  );
}

export default Counter;
