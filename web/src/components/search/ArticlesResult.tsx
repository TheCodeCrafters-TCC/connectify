import { articlesdata } from "@/data/article";
import { poppins } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import AResultItem from "./AResultItem";
import { useRouter } from "next/router";
import { SearchProps } from "./interface";

const ArticlesResult: React.FC<SearchProps> = ({ searchQuery }) => {
  const router = useRouter();

  const filteredArticles = articlesdata.filter((art) => {
    const desc = art.desc.toLowerCase();
    const queried = searchQuery?.toLowerCase();
    return queried && desc.includes(queried as string);
  });
  return (
    <ResultContainer>
      {filteredArticles.map((art, index) => (
        <AResultItem art={art} key={index} />
      ))}
    </ResultContainer>
  );
};

export default ArticlesResult;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
