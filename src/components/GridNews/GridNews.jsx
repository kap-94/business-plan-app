import React from "react";
import CardNews from "../CardNews/CardNews";

import * as S from "./GridNews.style";

const GridNews = ({ news }) => {
  return (
    <S.GridNews>
      {news.map((n) => (
        <CardNews key={n.url} news={n} />
      ))}
    </S.GridNews>
  );
};

export default GridNews;
