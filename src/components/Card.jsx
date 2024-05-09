import React from "react";
import {
  CardContainer,
  ContentContainer,
  ButtonContainer,
} from "./styles/Container.styles";
import { H1, Image, P, Tag } from "./styles/Elements";
import Button from "./Button";
import { StyledTitle } from "./styles/Custom.styles";
import ThemeButton from "./ThemeButton";
import { useTheme } from "styled-components";

function Card() {
  const theme = useTheme();

  return (
    <CardContainer>
      <ButtonContainer>
        <ThemeButton
          onClick={theme.setCurrentTheme}
          text={`To ${theme.cardtheme.currentTheme}`}
        ></ThemeButton>
      </ButtonContainer>

      <ContentContainer>
        <Tag color="#4361ee">Exclusive</Tag>
        <H1>
          <StyledTitle text="Hello Fellow Tech Enthusiast !" color="blue"></StyledTitle>
        </H1>
        <P>
          This "React" card is able to switch theme color !
        </P>
        <ButtonContainer>
          <Button text="Portfolio" link="www.facebook.com"></Button>
          <Button text="GitHub" link="https://github.com/ashraful66alam"></Button>
        </ButtonContainer>
      </ContentContainer>
      {theme.cardtheme.currentTheme==="dark" ? (
        <Image
          src="https://images.pexels.com/photos/21674955/pexels-photo-21674955/free-photo-of-half-moon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></Image>
      ) : (
        <Image
          src="https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></Image>
      )}
    </CardContainer>
  );
}

export default Card;
