// components/IconButton.tsx
"use client";
import { type FC } from "react";
import { User } from "lucide-react";
import { UserIconButtonProps } from "./icon-user-button.interface";
import styles from "./icon-user-button.module.scss";

export const UserIconButton: FC<UserIconButtonProps> = ({
  href,
  text,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className={styles.userIconButton}>
      <a href={href} onClick={handleClick} className={styles.iconLink}>
        <User className={styles.icon} />
        {text && <span className={styles.iconText}>{text}</span>}
      </a>
    </div>
  );
};
