import * as S from "./styles";

export function Preloader() {
  return (
    <div className="spinner">
      <S.SkFoldingCube>
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </S.SkFoldingCube>
    </div>
  );
}
