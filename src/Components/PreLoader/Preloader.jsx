import React, { useState, useEffect } from "react";
import { Watch } from "react-loader-spinner";
import { PreLoaderStyle, PreLoaderText } from "./PreLoader.styled";

const PreLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Добавьте строки ниже
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <PreLoaderStyle>
      <Watch
        height="100"
        width="100"
        radius="48"
        color="rgba(255,255,255,1)"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <PreLoaderText>Загрузка...</PreLoaderText>
    </PreLoaderStyle>
  );
};

export default PreLoader;
