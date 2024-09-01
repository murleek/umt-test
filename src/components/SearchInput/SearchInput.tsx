import { ChangeEvent, ChangeEventHandler, useState } from "react";
import styles from "./SearchInput.module.css";

export default function SearchInput({
  name,
  onChange,
}: {
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const [text, setText] = useState("");

  const onChangeMiddleware = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className={styles.searchInputWrap}>
      <span
        className={"material-symbols-rounded " + styles.searchIconPlaceholder}
      >
        search
      </span>
      <input
        className={styles.searchInput}
        placeholder={name}
        value={text}
        onChange={onChangeMiddleware}
      />
      <button className={styles.clearText} onClick={() => setText("")}>
        <span className="material-symbols-rounded">close</span>
      </button>
    </div>
  );
}
