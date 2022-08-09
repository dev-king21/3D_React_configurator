import { useState } from "react";
import { CirclePicker } from "react-color";

export default function Colors() {
  const [hex, setHex] = useState("#d0021b");
  return (
    <div className="colorPicker mt-5">
      <CirclePicker
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
}
    