import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useParams, Link } from "react-router-dom";
import { useMisery } from "../App";

import { getCharacterData } from "../api/battlenet";

const GoBack = styled(Link)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 120px;
  height: 50px;
  background: lightblue;
  text-decoration: none;
  color: black;
  margin-top: 15px;
`;

const Name = styled.h1``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div``;

const CharacterPage = () => {
  const { name } = useParams();
  const { token } = useMisery();

  const [character, setCharacter] = useState();

  useEffect(() => {
    handleGetCharacterData();
    //eslint-disable-next-line
  }, []);

  const handleGetCharacterData = async () => {
    const data = await getCharacterData(token, name);
    setCharacter(data);
  };

  if (character) {
    console.log(character);
  }

  return (
    <Wrapper>
      <Content>
        {character && (
          <>
            <Name>{character.name}</Name>
            {character.average_item_level}
          </>
        )}
        <GoBack to={"/"}>Go back</GoBack>
      </Content>
    </Wrapper>
  );
};

export default CharacterPage;
