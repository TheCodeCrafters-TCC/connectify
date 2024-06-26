import { EmptyNotify } from "@/assets";
import { colors, poppins } from "@/styles/global";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const In_App = () => {
  return (
    <StyledIn>
      <StyledImage src={EmptyNotify} alt="Notify" priority />
      <p className={poppins.className}>No in-app Notification</p>
    </StyledIn>
  );
};

export default In_App;

export const StyledIn = styled.div`
  width: 100%;
  padding: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: ${colors.primaryGray};
    /* color: ${({ theme }) => theme.colors.nav}; */
    font-size: 17px;
  }
`;
export const StyledImage = styled(Image)`
  width: 160px;
  height: 160px;
`;
