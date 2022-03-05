import React from "react";

import CustomButton from "../CustomButton/CustomButton";

import * as S from "./PlanSection.styles";

const BusinessDescription = ({ ...props }) => {
  const { plan, handleInputChange, handleFileChange, handlePictureClick } =
    props;

  return (
    <S.PlanSection>
      <S.InputTitle
        type="text"
        placeholder="Let's make a plan !"
        autoComplete="off"
        value={plan.title}
        name="title"
        onChange={handleInputChange}
      />

      <hr />

      <S.InputGroupMd>
        <label htmlFor="businessDescription-1">
          <strong>Write Here The Business Plan</strong>
        </label>

        <S.InputTextArea
          id="businessDescription-1"
          placeholder="..."
          value={plan.body}
          name="body"
          onChange={handleInputChange}
        ></S.InputTextArea>
      </S.InputGroupMd>

      <S.InputGroupImage>
        <>
          <label htmlFor="productImage">
            <strong>Add the product image</strong>
          </label>
          <input
            id="productImage"
            type="file"
            name="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <CustomButton onClick={handlePictureClick} w="15rem" mb="1rem">
            Picture
          </CustomButton>
        </>

        {plan.url && <S.SectionImage src={plan.url} alt="img" />}
      </S.InputGroupImage>
    </S.PlanSection>
  );
};

export default BusinessDescription;
