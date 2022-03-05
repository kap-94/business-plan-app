import React from "react";
import { useSelect } from "../../hooks/useSelect";

import * as S from "./SearchForm.styles";

const SearchForm = ({ setCategory }) => {
  const OPTIONS = [
    { value: "business", label: "Business" },
    { value: "technology", label: "Technology" },
    { value: "science", label: "Science" },
    { value: "general", label: "General" },
  ];

  const [category, SelectNews] = useSelect("business", OPTIONS);

  const handleSearchNews = (e) => {
    e.preventDefault();

    setCategory(category);
  };

  return (
    <S.FormContainer>
      <S.SearchForm onSubmit={handleSearchNews}>
        <S.Title>News For Your Reaserch</S.Title>

        <SelectNews />
        <S.SearchInput type="submit" value="Search" />
      </S.SearchForm>
    </S.FormContainer>
  );
};

export default SearchForm;
