"use client";
import { DeviceType } from "@/types";
import { Inter, Poller_One, Poppins, Roboto } from "next/font/google";
import styled, { createGlobalStyle } from "styled-components";
const inter = Inter({ subsets: ["latin"] });
const poppinsLight = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsNormal = Poppins({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const poppinsSemibold = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const pollerOne = Poller_One({ subsets: ["latin"], weight: "400" });

const colors = {
  primaryColor: "#1821F3",
  primaryRed: "#F61B1B",
  softGray: "#F5F5F5",
  primaryGray: "#D9D9D9",
  profileCoverBg: "#F5F5F5",
  mutedGray: "#636C76",
  darkCyan: "#005466",
  bgGray: "#F3F3F3",
  gold: "#FFD700",
  sliver: "#C0C0C0",
  bronze: "#CD7F32",
  fgBlack: "#1F2328",
  white: "#fff",
  black: "#000",
  neutral300: "rgb(212 212 212)",
  neutral400: "rgb(163 163 163)",
  neutral500: "rgb(115 115 115)",
  neutral600: "rgb(82 82 82)",
  neutral700: "rgb(64 64 64)",
  neutral800: "rgb(38 38 38)",
  slateGray: "#2F4F4F",
  darkGray: "#333333",
  charcoal: "#444444",
  lightGray: "#f0f0f0",
  ghostWhite: "#f8f8ff",
  whisper: "#e5e5e5",
  linear: "linear-gradient(to right, #1821F3, #0F0F0F)",
  red500: "rgb(239 68 68)",
  red600: "rgb(220 38 38)",
  star500: "#FFBC00",
  dropBg: "rgb(0,0,0,0.5)",
};

export const getDevice = (size: DeviceType) => {
  switch (size) {
    case "sm":
      return "320px";
    case "md":
      return "480px";
    case "lg":
      return "768px";
    case "tab":
      return "820px";
    case "xl":
      return "1024px";
    case "dxs":
      return "1280px";
    case "dsm":
      return "1366px";
    case "dmd":
      return "1440px";
    case "dlg":
      return "1600px";
    case "dxl":
      return "1680px";
    case "dxxl":
      return "1920px";
  }
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    .nav_bar{
      border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .nav_bar_top{
      border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
      background: ${({ theme }) => theme.colors.background};
    }
    .nav_bot{
      border-top: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .side_nav{
      border-right: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .__dynamic_bar{
      border-left: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .nav_link{
      background: ${({ theme }) => theme.colors.icon};
    }
    .__nav_unactive{
      &:hover{
        background: ${({ theme }) => theme.colors.icon};
      }
    }
    .__divider{
      width: auto;
      height: 1px;
      background: ${({ theme }) => theme.colors.nav};
    }
    .__timestamp{
      color: ${({ theme }) => theme.colors.timestamp}
    }
    .__a_menu{
      border: 1px solid ${({ theme }) => theme.colors.nav};
      background: ${({ theme }) => theme.colors.background};
    }
    ._a_menuItem{
     &:hover{
      background: ${({ theme }) => theme.colors.icon};
     }
     @media screen and (max-width:${getDevice("md")}){
      &:hover{
        background: transparent;
      }
     }
    }
    
    .action-icons >svg {
        cursor: pointer;
        padding: 4px;
        border-radius: 6px;
        &:hover{
          background: ${({ theme }) => theme.colors.icon};
        }
      }
  }

  ::-webkit-scrollbar{
    /* background: ${colors.primaryGray}; */
    background: ${({ theme }) => theme.colors.nav};
    width: 13px;
  }
  ::-webkit-scrollbar-thumb{
    background: ${colors.primaryColor};
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.colors.nav};
  }
  
  `;

function getTheme(systemTheme: string) {
  const defaultTheme = systemTheme === "dark" ? colors.black : colors.white;

  return defaultTheme;
}

export {
  colors,
  inter,
  poppins,
  roboto,
  GlobalStyle,
  getTheme,
  pollerOne,
  poppinsBold,
  poppinsLight,
  poppinsNormal,
  poppinsSemibold,
};

export const lightTheme = {
  primary: colors.primaryColor,
  text: colors.black,
  background: colors.white,
  border: colors.neutral300,
  icon: colors.lightGray,
  nav: colors.neutral300,
  timestamp: colors.primaryGray,
  hero: colors.softGray,
  info: colors.mutedGray,
  search: colors.softGray,
};
export const darkTheme = {
  primary: colors.primaryColor,
  text: colors.white,
  background: colors.black,
  border: colors.neutral700,
  icon: colors.darkGray,
  nav: colors.darkGray,
  timestamp: colors.neutral700,
  hero: colors.darkGray,
  info: colors.neutral500,
  search: colors.darkGray,
};

export const screens = {
  small: "320px",
  medium: "480px",
  large: "768px",
  tablet: "1024px",
  largeTablet: "1200px",
};

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleFlexWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;