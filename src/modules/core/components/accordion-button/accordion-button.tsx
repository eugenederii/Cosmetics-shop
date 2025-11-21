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

  // When interactive is false, do not add .isOpen/.isClosed classes
  // CSS will handle state via :global([data-state="open"]) and :global([data-state="closed"])
  // This prevents hydration mismatches with Radix UI Accordion
  return (
    <div
      onClick={handleClick}
      className={clsx(
        styles.container,
        // Only apply state classes when interactive (standalone mode)
        interactive && (isOpen ? styles.isOpen : styles.isClosed),
      )}
    >
      <div className={styles.menuBar}></div>
      <div className={styles.menuBar}></div>
      <div className={styles.menuBar}></div>
    </div>
  );
};
