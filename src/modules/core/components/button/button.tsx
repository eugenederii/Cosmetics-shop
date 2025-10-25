"use client";

import { useDeviceType } from "../../hooks/use-device-type";

export const Button = () => {
  const deviceType = useDeviceType();

  return (
    <div>
      <button className="text-red-600">fdfrf</button>
      {deviceType === "mobile" && (
        <button className="text-green-500">BHBHB</button>
      )}
    </div>
  );
};
