import React from "react";
import React, { Fragment, useState, useEffect } from "react";

import GridNews from "../GridNews/GridNews";
import SearchForm from "../SearchForm/SearchForm";

const NewsPage = function () {
  const [category, setCategory] = useState("business");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=a7109a1278f6449bb70515917ac09475`;

      const response = await fetch(url);
      const news = await response.json();

      setNews(news.articles);
    };

    fetchNews();
  }, [category]);

  return (
    <Fragment>
      <SearchForm setCategory={setCategory} />
      <GridNews news={news} />
    </Fragment>
  );
};

export default NewsPage;
