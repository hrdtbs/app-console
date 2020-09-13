/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";

export const Button: React.FC<
  React.HTMLProps<HTMLButtonElement> & {
    /**
     * @default filled
     */
    variant?: "outlined" | "filled";
  }
> = ({ type, variant, ...props }) => {
  return (
    <button
      {...props}
      css={css`
        box-sizing: border-box;
        border-radius: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        overflow: visible;
        text-transform: none;
        outline: none;
        cursor: pointer;
        border: 1px solid coral;
        background-color: ${variant === "outlined" ? "white" : "coral"};
        color: ${variant === "outlined" ? "coral" : "white"};
        box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
          0px 3px 4px 0px rgba(0, 0, 0, 0.14),
          0px 3px 3px -2px rgba(0, 0, 0, 0.12);
      `}
    />
  );
};
export default () => {
  const [list, setList] = useState<string[]>([]);
  return (
    <div
      css={css`
        font-family: cursive;
      `}
    >
      <form
        css={css`
          display: grid;
          grid-template-columns: 200px 50px;
          gap: 1ch;
          margin-bottom: 1ch;
        `}
        onSubmit={(e) => {
          e.preventDefault();
          const item = Array.from(
            new FormData(e.currentTarget).values()
          )[0] as string;
          setList((prev) => {
            if (item === "" || prev.includes(item)) {
              return prev;
            } else {
              return [...prev, item];
            }
          });
        }}
      >
        <input
          type="text"
          name="app"
          css={css`
            box-sizing: border-box;
            border-radius: 0;
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            overflow: visible;
            text-transform: none;
            outline: none;
            border: 1px solid #4d4d4d;
          `}
        />
        <Button>add</Button>
      </form>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          /** Not Safari Supported 202009 */
          gap: 1ch;
        `}
      >
        {list.map((item) => {
          return (
            <Button
              variant="outlined"
              key={item}
              onClick={() => {
                setList((prev) => prev.filter((i) => i !== item));
              }}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
