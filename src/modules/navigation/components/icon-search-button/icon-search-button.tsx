// components/SearchIconButton.tsx
"use client";
import { type FC, useRef, useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/modules/core/components/button";
import { SearchIconButtonProps } from "./icon-search-button.interface";
import styles from "./icon-search-button.module.scss";
import { useBoolean } from "usehooks-ts";

export const SearchIconButton: FC<SearchIconButtonProps> = ({
  href,
  text,
  onActiveChange,
  isActive: externalIsActive,
}) => {
  // Use external state if provided, otherwise use internal state
  const {
    value: internalIsActive,
    setTrue: openInput,
    setFalse: closeInput,
  } = useBoolean(false);

  const isActive =
    externalIsActive !== undefined ? externalIsActive : internalIsActive;

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Notify parent about active state changes
  useEffect(() => {
    if (externalIsActive === undefined) {
      onActiveChange?.(isActive);
    }
  }, [isActive, onActiveChange, externalIsActive]);

  // Auto-focus input when it becomes active
  useEffect(() => {
    if (isActive) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isActive]);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (externalIsActive === undefined) {
      openInput();
    } else {
      onActiveChange?.(true);
    }
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Якщо фокус не залишається всередині контейнера, деактивуємо
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      // Якщо input порожній, закриваємо і показуємо кнопку
      if (!value.trim()) {
        if (externalIsActive === undefined) {
          closeInput();
        } else {
          onActiveChange?.(false);
        }
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setValue("");
    if (externalIsActive === undefined) {
      closeInput();
    } else {
      onActiveChange?.(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.searchIconButton} ${isActive ? styles.active : ""}`}
    >
      {!isActive && (
        <a href={href} onClick={handleButtonClick} className={styles.iconLink}>
          <Search className={styles.icon} />
          {text && <span className={styles.iconText}>{text}</span>}
        </a>
      )}
      {isActive && (
        <Button
          onClick={handleClose}
          icon="close"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 w-[30px] h-[30px] z-10 pointer-events-auto text-[#f32ec8] border-0 [&_svg]:text-[#f32ec8] [&_svg]:transition-all [&_svg]:duration-500 hover:bg-transparent hover:border-0 hover:text-[#f32ec8] hover:[&_svg]:text-[#f32ec8] hover:[&_svg]:-translate-y-px hover:[&_svg]:scale-[1.125] hover:[&_svg]:drop-shadow-[0_0_8px_rgba(243,46,200,0.6),0_0_15px_rgba(243,46,200,0.4),0_0_22px_rgba(243,46,200,0.3)]"
          aria-label="Закрити пошук"
        />
      )}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={text || "Пошук"}
        className={styles.searchInput}
      />
    </div>
  );
};
