import { colors, getDevice } from "@/styles/global";
import styled from "styled-components";

export const AInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-start;
`;

export const ALabel = styled.label`
  font-size: 13px;
  margin-left: 4px;
`;

export const AInputContainer = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  background: ${colors.softGray};
  color: ${colors.primaryGray};
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: ${getDevice("xl")}) {
    width: 550px;
    height: 75px;
    padding: 16px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 420px;
    height: 65px;
    padding: 16px;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    width: 310px;
    height: 65px;
    padding: 16px;
  }
  @media screen and (max-width: ${getDevice("sm")}) {
    width: 380px;
    height: 65px;
    padding: 16px;
  }
`;

export const AInput = styled.input`
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  ::placeholder {
    color: ${colors.primaryGray};
  }
  &:focus {
    caret-color: ${colors.primaryColor};
  }
`;

export const ButtonInterFace = styled.button`
  height: 50px;
  color: white;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.75;
  }

  @media screen and (max-width: ${getDevice("xl")}) {
    height: 75px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    height: 65px;
  }
`;

export const QText = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  font-size: 12px;
  justify-content: center;

  span {
    color: ${colors.primaryColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledToast = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  position: fixed;
  z-index: 400;
  display: flex;
  /* padding: 16px; */
  flex-direction: column;
  gap: 6px;
  cursor: pointer;

  .close {
    cursor: pointer;
    color: white;
  }

  p {
    font-size: 14px;
  }

  /* Load effect */
  .loadToast {
    animation: load 3s ease infinite;
  }

  @keyframes load {
    0% {
      width: 300px;
    }
    7.14% {
      width: 278.57px;
      border-bottom-right-radius: 0px;
    }
    14.28% {
      width: 257.14px;
      border-bottom-right-radius: 0px;
    }
    21.42% {
      width: 235.71px;
      border-bottom-right-radius: 0px;
    }
    28.56% {
      width: 214.28px;
      border-bottom-right-radius: 0px;
    }
    35.70% {
      width: 192.85px;
      border-bottom-right-radius: 0px;
    }
    42.84% {
      width: 171.42px;
      border-bottom-right-radius: 0px;
    }
    49.98% {
      width: 149.99px;
      border-bottom-right-radius: 0px;
    }
    57.12% {
      width: 128.56px;
      border-bottom-right-radius: 0px;
    }
    64.26% {
      width: 107.13px;
      border-bottom-right-radius: 0px;
    }
    71.40% {
      width: 85.7px;
      border-bottom-right-radius: 0px;
    }
    78.54% {
      width: 64.27px;
      border-bottom-right-radius: 0px;
    }
    85.68% {
      width: 42.84px;
      border-bottom-right-radius: 0px;
    }
    92.82% {
      width: 21.41px;
      border-bottom-right-radius: 0px;
    }
    100% {
      width: 1px;
    }
  }
`;

export const IToast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToastLoder = styled.div`
  height: 7px;
  width: auto;
  transform: translateY(-9.5px);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const DSearchContainer = styled.div`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.search};
  color: ${colors.primaryGray};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DSearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;

  ::placeholder {
    color: ${colors.primaryGray};
  }
  &:focus {
    caret-color: ${colors.primaryColor};
  }
`;