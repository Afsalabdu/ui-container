import { HeaderMenuType } from "@costco/merch-ui-components/dist/types/types/organisms.types";
export interface HeaderMenuOption {
  customMenu?: React.ReactNode;
  id: string;
  helperText?: string;
  href?: string;
  label?: string;
  labelKey?: string;
  menuType?: HeaderMenuType;
  options?: HeaderMenuOption[];
  type?: string;
  value?: string | number;
}
