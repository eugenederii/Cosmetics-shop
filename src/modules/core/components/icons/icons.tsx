"use client";

import { FC, memo } from "react";

import SettingsIcon from "@/assets/icons/lol.svg?icon";
import NoImage from "@/assets/icons/image-not-found.svg";
import CloseIcon from "@/assets/icons/close.svg";

import { SVGComponentElement } from "./icons.interface";

export const icons = {
  settings: SettingsIcon,
  noImage: NoImage,
  close: CloseIcon,
} satisfies Record<string, FC<SVGComponentElement>>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
} & SVGComponentElement;

const Icon: FC<IconProps> = memo(({ name, ...props }) => {
  const IconElement = icons[name];

  if (!IconElement) {
    const ImageNotFoundIconElement = icons["noImage"];

    return <ImageNotFoundIconElement {...props} />;
  }

  return <IconElement {...props} />;
});

Icon.displayName = "Icon";

export { Icon };
