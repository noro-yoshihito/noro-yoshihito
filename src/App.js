import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);

  // const onClickOpen = () => {
  //   setOpen(!open);
  // };

  const onClickOpen = useCallback(() => setOpen(!open), [setOpen]);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // const onClickClose = () => {
  // setOpen(false);
  // };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <br />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
