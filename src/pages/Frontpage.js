import React, { useState, useEffect } from "react";
import { getGuildRoster } from "../api/battlenet";
import { useMisery } from "../App";

import { Link } from "react-router-dom";

import styled from "styled-components";

const classColors = [
  { playableClass: "Death Knight", hex: "#C41E3A" },
  { playableClass: "Demon Hunter", hex: "#A330C9" },
  { playableClass: "Druid", hex: "#FF7C0A" },
  { playableClass: "Hunter", hex: "#AAD372" },
  { playableClass: "Mage", hex: "#3FC7EB" },
  { playableClass: "Monk", hex: "#00FF98" },
  { playableClass: "Paladin", hex: "#F48CBA" },
  { playableClass: "Priest", hex: "#FFFFFF" },
  { playableClass: "Rogue", hex: "#FFF468" },
  { playableClass: "Shaman", hex: "#0070DD" },
  { playableClass: "Warlock", hex: "#8788EE" },
  { playableClass: "Warrior", hex: "#C69B6D" },
];

const Character = styled(Link)`
  border: 1px solid black;
  padding: 10px;
  height: 20px;
  margin: 5px;
  background: ${(props) => props.bg};
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const CharacterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
  padding: 20px;
  margin-top: 0;
`;

const Wrapper = styled.div`
  background: #c669a5;
`;

const Frontpage = () => {
  const { token } = useMisery();
  const [guildData, setGuildData] = useState();

  useEffect(() => {
    getGuildCharacter();
    //eslint-disable-next-line
  }, []);

  const getGuildCharacter = async () => {
    const data = await getGuildRoster(token);
    data.sort((a, b) =>
      a.playableClass.class > b.playableClass.class ? 1 : -1
    );
    setGuildData(data);
  };

  return (
    <Wrapper>
      <Header>Misery-guild EU lol</Header>
      {guildData && (
        <CharacterArea>
          {guildData.map((member) => {
            if (member.level < 60) {
              return null;
            }

            return (
              <Character
                bg={
                  classColors.find(
                    (cc) => cc.playableClass === member.playableClass.class
                  ).hex
                }
                key={member.id}
                to={"/character/" + member.name.toLowerCase()}
              >
                {member.name}
              </Character>
            );
          })}
        </CharacterArea>
      )}
    </Wrapper>
  );
};

export default Frontpage;
