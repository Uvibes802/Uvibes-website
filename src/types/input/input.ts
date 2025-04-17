export type Inputprops = {
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  htmlFor: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
