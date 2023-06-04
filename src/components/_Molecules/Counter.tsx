import CircleButton from "../_Atoms/CircleButton";
import Text from "../_Atoms/Text";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";

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
      <CircleButton onClick={countDown} backgroundColor="#ddd">
        <RemoveIcon fill="#333" />
      </CircleButton>
      <Text text={state.toString()} />
      <CircleButton onClick={countUp} backgroundColor="#ddd">
        <AddIcon fill="#333" />
      </CircleButton>
    </div>
  );
}

export default Counter;
