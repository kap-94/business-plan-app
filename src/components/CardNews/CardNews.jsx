import React from "react";

import * as S from "./CardNews.styles";

const CardNews = ({ news }) => {
  const { urlToImage, url, title, description, source } = news;

  const image = urlToImage ? (
    <S.CardImage src={urlToImage} alt={title} />
  ) : null;

  return (
    <div>
      <S.Card>
        {image}

        <S.CardBody>
          <p>{source.name}</p>
          <S.CardTitle>{title}</S.CardTitle>
          <p>{description}</p>
        </S.CardBody>

        <S.CardFooter>
          <S.CardLink href={url} target="_blank" rel="noopener noreferrer">
            See full news
          </S.CardLink>
        </S.CardFooter>
      </S.Card>
    </div>
  );
};
export default CardNews;
