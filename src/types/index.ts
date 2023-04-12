export interface ButtonProps {
  children: string | React.ReactElement | string[];
  customVariant: 'white' | 'blue';
}

export interface FadeInProps {
  children: any;
  id?: string;
  translateLeft?: boolean;
  translateRight?: boolean;
  duration?: number;
  delay?: number;
}
