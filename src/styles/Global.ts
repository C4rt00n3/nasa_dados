import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  /*Primary Palette*/

  --Color-primary: #2417B4;
  --Color-primary-50: #93d7af;
  --Color-secondary: #eb5757;

  /*Grey Scale Palette*/

  --Grey100: #1E1E1E;
  --Grey50: #2E2F35;

  --Grey40:#1E1E1E;
  --Grey20: #423F44;
  --Grey0: #f5f5f5;
  --Withe: #ffff;

  /*Feedback Palette*/

  --Negative: #e60000;
  --Warning: #ffcd07;
  --Sucess: #168821;
  --Information: #155bcb;

  /*Linear gradientw */

  --Logo:#EB5757;

  

}
button{
  cursor: pointer;
}
body {
  font-family: "Inter", sans-serif;
  height: 100vh;

  background-color: var(--Grey100);
  color: var(--Withe);
}
/* Text sizes */
  .Heading1{
    font-size: 26px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
  }
  .Heading2{
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;

  }
  .Heading3{
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0em;
  }
  .Heading4{
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  .Headline{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  .Caption{
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
}
.Simples{
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

}
.label{
  height: 15px;
  width: 34px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;



}


  
`;
