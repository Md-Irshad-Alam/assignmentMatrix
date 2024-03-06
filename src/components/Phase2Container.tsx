import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Phase2ContainerType = {
  phaseDescription?: string;
  phaseTitle?: string;
  initiativeDescription?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const Phase2Container: FunctionComponent<Phase2ContainerType> = ({
  phaseDescription,
  phaseTitle,
  initiativeDescription,
  propLeft,
  propWidth,
}) => {
  const linkStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const increaseLiquidityAndStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[0rem] left-[19.175rem] rounded-[13.17px] w-[14.819rem] flex flex-row items-start justify-start max-w-[41.485rem] text-left text-[1.369rem] text-white font-inter"
      style={linkStyle}
    >
      <div className="w-[14.956rem] absolute !m-[0] top-[-0.069rem] left-[-0.069rem] rounded-[13.17px] [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] h-[21.95rem] z-[0]" />
      <div className="w-[14.681rem] absolute !m-[0] top-[0.069rem] left-[0.069rem] rounded-[13.17px] bg-gray-300 h-[21.675rem] z-[1]" />
      <img
        className="w-[14.819rem] relative rounded-[17.56px] h-[21.813rem] overflow-hidden shrink-0 object-cover z-[2]"
        alt=""
        src={phaseDescription}
      />
      <div className="w-full absolute !m-[0] h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[13.17px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(10,_28,_61,_0.2)_70%,_rgba(237,_1,_55,_0.09))] z-[3]" />
      <div className="w-[calc(100%_-_144.2px)] !m-[0] absolute h-[calc(100%_-_249.8px)] top-[14.219rem] right-[7.531rem] bottom-[1.394rem] left-[1.481rem] flex flex-col items-start justify-start gap-[0.823rem_0rem] z-[4]">
        <b className="relative leading-[2.058rem]">{phaseTitle}</b>
        <div
          className="w-[11.044rem] relative text-[1.1rem] leading-[1.646rem] font-manrope text-darkgray flex items-center"
          style={increaseLiquidityAndStyle}
        >
          {initiativeDescription}
        </div>
      </div>
    </div>
  );
};

export default Phase2Container;
