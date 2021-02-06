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

export const getAllGuildData = async (token, guildName) => {
  let guild = {};
  const guildRoster = await getGuildRoster(token, guildName);

  guild.characterList = [];
  guild.inactiveList = [];

  for (let i = 0; i < guildRoster.length; i++) {
    if (guildRoster[i].character.level > 10) {
      try {
        const character = await getCharacterData(
          token,
          guildRoster[i].character.name.toLowerCase()
        );

        guild.characterList.push(character);
      } catch (e) {
        guild.inactiveList.push(guildRoster[i].character);
      }
    }
  }

  console.log(guild);
};

// TODO: Learn how to deal with errors in a promise all
// const getAllCharacterData = async (token, memberList, allCharacters) => {
//   return Promise.all(
//     memberList.map(async (member) => {
//       const fetchedCharacter = await getCharacterData(
//         token,
//         member.name.toLowerCase()
//       );
//       allCharacters.push(fetchedCharacter);
//     })
//   );
// };

export const getGuildRoster = async (token, guildName) => {
  const uri = `https://eu.api.blizzard.com/data/wow/guild/terenas/${guildName}/roster?namespace=profile-eu&locale=en_GB&access_token=${token.access_token}`;
  const { data } = await axios.get(uri, {
    headers: {
      Authorization: "Bearer " + token.access_token,
    },
  });

  return data.members;
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
