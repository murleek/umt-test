import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import styles from "./SearchInput.module.css";

export default function SearchInput({
  name,
  value,
  setValue,
  onChange,
}: {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className={styles.searchInputWrap}>
      {!value && (
        <span
          className={"material-symbols-rounded " + styles.searchIconPlaceholder}
        >
          search
        </span>
      )}
      <input
        className={styles.searchInput}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
      {value && (
        <button className={styles.clearText} onClick={() => setValue("")}>
          <span className="material-symbols-rounded">close</span>
        </button>
      )}
    </div>
  );
}
