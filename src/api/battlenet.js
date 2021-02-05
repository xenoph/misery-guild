import axios from "axios";

export const playableClasses = [
  { id: 1, class: "Warrior" },
  { id: 2, class: "Paladin" },
  { id: 3, class: "Hunter" },
  { id: 4, class: "Rogue" },
  { id: 5, class: "Priest" },
  { id: 6, class: "Death Knight" },
  { id: 7, class: "Shaman" },
  { id: 8, class: "Mage" },
  { id: 9, class: "Warlock" },
  { id: 10, class: "Monk" },
  { id: 11, class: "Druid" },
  { id: 12, class: "Demon Hunter" },
];

const formData = new FormData();
formData.append("grant_type", "client_credentials");

export const getToken = async () => {
  const { data } = await axios.post(
    "https://eu.battle.net/oauth/token",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      auth: {
        username: process.env.REACT_APP_BLIZZARD_CLIENT_ID,
        password: process.env.REACT_APP_BLIZZARD_CLIENT_SECRET,
      },
    }
  );

  return data;
};

export const getGuildRoster = async (token) => {
  const uri = `https://eu.api.blizzard.com/data/wow/guild/terenas/misery/roster?namespace=profile-eu&locale=en_GB&access_token=${token.access_token}`;
  const { data } = await axios.get(uri, {
    headers: {
      Authorization: "Bearer " + token.access_token,
    },
  });

  let characterList = [];

  data.members.forEach((member) => {
    let mem = {};
    mem.playableClass = playableClasses.find(
      (pc) => pc.id === member.character.playable_class.id
    );
    mem.name = member.character.name;
    mem.level = member.character.level;
    mem.id = member.character.id;
    characterList.push(mem);
  });

  return characterList;
};

export const getSpecializations = async (token) => {
  const uri = `https://us.api.blizzard.com/data/wow/playable-specialization/index?namespace=static-us&locale=en_GB&access_token=${token.access_token}`;
  const { data } = await axios.get(uri, {
    headers: {
      Authorization: "Bearer " + token.access_token,
    },
  });

  return data;
};

export const getCharacterData = async (token, name) => {
  const uri = `https://eu.api.blizzard.com/profile/wow/character/terenas/${name}?namespace=profile-eu&locale=en_GB&access_token=${token.access_token}`;
  const { data } = await axios.get(uri, {
    headers: {
      Authorization: "Bearer " + token.access_token,
    },
  });

  return data;
};
