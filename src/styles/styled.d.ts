import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      textColor: string;
      bgColor: string;
      accentColor: string;
      sectionColor: string;
    };
    border: {
      borderRadius: string;
      primaryBorder: string;
      secondaryBorder: string;
      tertiaryBorder: string;
    };
    buttonStyle: string;
    containerStyle: string;
    flex: (jc?: string, ai?: string) => string;
    flexColumn: (jc?: string, ai?: string) => string;
  }
}
