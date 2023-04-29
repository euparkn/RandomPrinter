import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as SkipIcon } from "../../assets/icons/skip.svg";

import { IconTypes } from "../../types/svgIconTypes";

function SvgIcon({ type }: { type?: IconTypes }) {
  const undefinedType = <span />;

  switch (type) {
    case "add":
      return <AddIcon />;
    case "remove":
      return <RemoveIcon />;
    case "close":
      return <CloseIcon />;
    case "skip":
      return <SkipIcon />;
    default:
      return undefinedType;
  }
}

export default SvgIcon;
