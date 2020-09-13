import React, { useState } from "react";
export default () => {
  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const item = Array.from(
            new FormData(e.currentTarget).values()
          )[0] as string;
          setList((prev) => {
            if (prev.includes(item)) {
              return prev;
            } else {
              return [...prev, item];
            }
          });
        }}
      >
        <input type="text" name="app" />
        <button>add</button>
      </form>
      <div>
        {list.map((item) => {
          return (
            <button
              key={item}
              onClick={() => {
                setList((prev) => prev.filter((i) => i !== item));
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
