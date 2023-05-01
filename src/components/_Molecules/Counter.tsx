import CircleButton from "../_Atoms/CircleButton";
import Text from "../_Atoms/Text";

interface IProps {
  state: number;
  setState: (e: number) => void;
}

function Counter({ state, setState }: IProps) {
  const countUp = () => {
    if (state >= 10) {
      return;
    }
    setState(state + 1);
  };

  const countDown = () => {
    if (state <= 0) {
      return;
    }
    setState(state - 1);
  };

  return (
    <div className="counter">
      <CircleButton iconType="remove" onClick={countDown} />
      <Text text={state.toString()} />
      <CircleButton iconType="add" onClick={countUp} />
    </div>
  );
}

export default Counter;
