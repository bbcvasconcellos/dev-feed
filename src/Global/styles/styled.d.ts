import "styled-components";
import theme from "./darkTheme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {
    title: string;
    colors: {
      red_danger: string;
      green_dark: string;
      green_light: string;

      card: string;
      divider: string;
      background: string;
      placeholder: string;

      text: string;
      white: string;
      text_titles: string;
      support_text: string;
    };
  }
}
