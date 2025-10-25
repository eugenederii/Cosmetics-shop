"use client";

import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

// Device breakpoints
const BREAKPOINTS = {
  mobile: 600,
  tablet: 1200,
  desktop: 1920,
} as const;

export type DeviceType = "mobile" | "tablet" | "desktop";

export const useDeviceType = (): DeviceType => {
  const { width } = useWindowSize();

  return useMemo<DeviceType>(() => {
    // During SSR or when width is 0, return desktop as fallback
    if (width === 0) {
      return "desktop";
    }

    if (width <= BREAKPOINTS.mobile) {
      return "mobile";
    } else if (width <= BREAKPOINTS.tablet) {
      return "tablet";
    } else {
      return "desktop";
    }
  }, [width]);
};
