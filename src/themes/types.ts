export interface AppTheme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string; // buttons, links, highlights
    background: string; // page background
    text: string; // main text color
  };
  font: string;
  emoji: {
    icon: string; // shown in the logo and the picker
    dog: string;
    treat: string;
    celebrate: string;
  };
}
