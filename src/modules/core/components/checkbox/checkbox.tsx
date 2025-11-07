import { forwardRef } from "react";

import clsx from "clsx";

import type { CheckboxProps } from "./checkbox.interface";

import styles from "./checkbox.module.scss";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, onChange, value, classes, error, size = "medium" }, ref) => {
    const isChecked = value ?? false;
    const isControlled = onChange !== undefined;

    return (
      <label
        className={clsx(
          styles.container,
          {
            [styles.container_disabled]: disabled,
            [styles.container_error]: error,
          },
          classes?.root,
        )}
      >
        <input
          className={styles.input}
          type="checkbox"
          {...(isControlled
            ? { checked: isChecked, onChange }
            : { defaultChecked: isChecked })}
          disabled={disabled}
          ref={ref}
        />
        <span
          className={clsx(
            styles.checkmark,
            { [styles.checkmark_active]: isChecked },
            { [styles.small]: size === "small" },
            { [styles.medium]: size === "medium" },
            classes?.checkmark,
          )}
        />
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
