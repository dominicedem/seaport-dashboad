import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
  --black_text_color: #2a2a2a;
  --black_text_color_light: #2a2a2acc;
  --black_text_hover_color: #2a2a2a23;
  --notification_hover_color: #5a5a5a13;
  --range_track_color: #6161616a;
  --app_background_color: #edeff5;
  --sidebar_background_color: #fefefe;
  --ship_hover_color: #3a3a3a99;
  --ship_row_text_color: #444444;
  --nav_background_color: #fefefe;
  --primary_text_color: #f0f0f1;
  --theme_color: #127501;
  --theme_color_hover: #127501dd;
  --theme_background_color: #127501aa;
  --theme_color_light: #12750136;
  --secondary_text_color:#959595;
  --hover_color: #c2c2c2;
  --tertiary_color: #eeef;
  --activeTab_color: #b1a176;
  --red_exit_color: #fa3333;
  --red_exit_color_light: #fa333322;
  --background_color: linear-gradient(135deg, #000 ,#111);
}  


html {
    font-size: 62.5%;
  }

body {
    font-family: sans-serif;
    line-height: 1.2;
  }
  
  *,*::after,*::before,*:focus {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    outline: none;
}

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.active {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .5rem 1rem;
  transition: all 0.2s;
  color: var(--black_text_color);
  font-size: 1.8rem;
  cursor: pointer;
  background:var(--theme_color_light);
  border-right: 4px solid var(--theme_color);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
    
}

.threeRow {
  width: 25%
}
.fourRow {
  width: 25%
}
.one:hover {
  background: var(--theme_color_light);
}
input[type=range] {
  height: 40px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animate: 0.2s;
  background: var(--range_track_color);
  border-radius: 22px;
  border: 1px solid inherit;
}
input[type=range]::-webkit-slider-thumb {
  border: 5px solid var(--theme_color_hover);
  height: 30px;
  width: 8px;
  border-radius: 5px;
  background: var(--theme_color_hover);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background:var(--range_track_color);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animate: 0.2s;
  background: #E0E0E0;
  border-radius: 22px;
  border: 1px solid inherit;
}
input[type=range]::-moz-range-thumb {
  border: 5px solid var(--theme_color_hover);
  height: 30px;
  width: 8px;
  border-radius: 5px;
  background:var(--theme_color_hover);
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #E0E0E0;
  border: 1px solid #FFFFFF;
  border-radius: 44px;
}
input[type=range]::-ms-fill-upper {
  background: #E0E0E0;
  border: 1px solid #FFFFFF;
  border-radius: 44px;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  border: 5px solid var(--theme_color_hover);
  height: 30px;
  width: 8px;
  border-radius: 5px;
  background: var(--theme_color_hover);
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #E0E0E0;
}
input[type=range]:focus::-ms-fill-upper {
  background: #E0E0E0;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--theme_color);
  border-radius: 1rem;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--theme_color_hover);
  border-radius: 1rem;
}
::-webkit-scrollbar-track {
  background-color:transparent;
}

.spinner {
  animation: 2.5s spin infinite linear ;
}

@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

`;
export default GlobalStyle;
