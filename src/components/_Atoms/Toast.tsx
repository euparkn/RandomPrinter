import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toastAtom } from "store";

function Toast() {
  const [toast, setToast] = useRecoilState(toastAtom);

  useEffect(() => {
    if (toast.state) {
      setTimeout(() => setToast({ text: "", state: false }), 1000);
    }
  }, [toast.state]);

  return <div className={`toast ${toast.state && "on"}`}>{toast.text}</div>;
}

export default Toast;
