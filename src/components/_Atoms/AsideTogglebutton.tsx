import { useRecoilState } from "recoil";

import { ReactComponent as ShowListIcon } from "assets/icons/list.svg";
import { ReactComponent as CloseListIcon } from "assets/icons/close_list.svg";

import { showAsideAtom } from "store";

function AsideToggleButton() {
  const [showAside, setShowAside] = useRecoilState(showAsideAtom);

  return (
    <button
      className="aside-toggle-btn"
      type="button"
      onClick={() => setShowAside((prev) => !prev)}
      aria-label={showAside ? "Hide aside" : "Show aside"}
    >
      {showAside ? (
        <CloseListIcon fill="#777" />
      ) : (
        <>
          <div className="aside-toggle-btn-bg" />
          <ShowListIcon fill="#777" />
        </>
      )}
    </button>
  );
}

export default AsideToggleButton;
