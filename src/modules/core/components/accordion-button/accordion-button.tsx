"use client";
import { type FC } from "react";
import { useBoolean } from "usehooks-ts";
import clsx from "clsx";
import { AccordionButtonProps } from "./accordion-button.interface";
import styles from "./accordion-button.module.scss";

export const AccordionButton: FC<AccordionButtonProps> = ({
  interactive = true,
}) => {
  const { value: isOpen, toggle } = useBoolean(false);

  const handleClick = () => {
    if (interactive) {
      toggle();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(styles.container, {
        [styles.isOpen]: interactive && isOpen,
        [styles.isClosed]: interactive && !isOpen,
      })}
    >
      <div className={styles.menuBar}></div>
      <div className={styles.menuBar}></div>
      <div className={styles.menuBar}></div>
    </div>
  );
};
