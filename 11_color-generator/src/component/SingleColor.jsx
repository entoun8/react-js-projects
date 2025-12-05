import { useEffect, useState } from "react";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <div
      className={`h-48 p-2 cursor-pointer ${index >= 10 ? "text-white" : ""}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(bcg);
      }}
    >
      <p>{weight}%</p>
      <p>rgb({bcg})</p>
      {alert ? "COPIED TO CLIPBOARD" : ""}
    </div>
  );
};

export default SingleColor;
