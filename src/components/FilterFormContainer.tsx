import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FilterFormContainerType = {
  questionText?: string;
  questionNumberText?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
};

const FilterFormContainer: FunctionComponent<FilterFormContainerType> = ({
  questionText,
  questionNumberText,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="absolute top-[247.313rem] left-[42.688rem] w-[40rem] h-[4.813rem] text-left text-[1.25rem] text-white font-shojumaru"
      style={frameDivStyle}
    >
      <div className="absolute top-[-0.062rem] left-[-0.062rem] rounded-xl bg-gray-200 box-border w-[40.125rem] h-[4.938rem] border-[1px] border-solid border-crimson" />
      <div className="absolute top-[1.688rem] left-[7.563rem]">
        {questionText}
      </div>
      <div
        className="absolute top-[1.688rem] left-[2.5rem] text-[1.125rem]"
        style={divStyle}
      >
        {questionNumberText}
      </div>
      <img
        className="absolute top-[1.75rem] left-[36.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
        alt=""
        src="/eparrowdownbold.svg"
      />
    </div>
  );
};

export default FilterFormContainer;
