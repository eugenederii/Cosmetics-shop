export type SearchIconButtonProps = {
  href?: string;
  text?: string;
  onClick?: () => void;
  onActiveChange?: (isActive: boolean) => void;
  isActive?: boolean;
};
