import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

const testdata = {
  id: 1,
  name: "best friends group",
  members: [
    {
      id: 1,
      username: "friend1",
    },
    {
      id: 2,
      username: "friend2",
    },
  ],
  movierecommendations: [
    {
      id: 1,
      title: "The Empire Strikes Back",
      runtime: 124,
      release_date: "1980-05-20",
      genres: "Adventure, Action, Science Fiction",
      overview:
        "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
      poster_path:
        "https://image.tmdb.org/t/p/w154/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
      providers: [
        {
          name: "Disney+",
          logo_path:
            "https://www.themoviedb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg",
        },
      ],
      tagline: "The Adventure Continues...",
      trailer: "https://youtu.be/XgB4gaY2dWE",
      vote_average: 84,
    },
    {
      id: 2,
      title: "Star Wars",
      runtime: 121,
      release_date: "1977-05-25",
      genres: "Adventure, Action, Science Fiction",
      overview:
        "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      poster_path:
        "https://image.tmdb.org/t/p/w154/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      providers: [
        {
          name: "Disney+",
          logo_path:
            "https://www.themoviedb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg",
        },
      ],
      tagline: "A long time ago in a galaxy far, far away...",
      trailer: "https://youtu.be/XgB4gaY2dWE",
      vote_average: 82,
    },
  ],
  tvrecommendations: [
    {
      backdrop_path: "/AdJgkXb8oLI8e4rsk8XzkvABIuw.jpg",
      first_air_date: "2014-10-13",
      genre_ids: [10759, 16],
      id: 60554,
      name: "Star Wars Rebels",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Star Wars Rebels",
      overview:
        "Set between the events of Star Wars: Episodes III and IV, the story unfolds during a dark time when the evil Galactic Empire is tightening its grip of power on the galaxy. Imperial forces have occupied a remote planet and are ruining the lives of its people. The motley but clever crew of the starship Ghost — cowboy Jedi Kanan, ace pilot Hera, street-smart teenager Ezra, the “muscle” Zeb, warrior firebrand Sabine, and cantankerous old astromech droid Chopper — is among a select few who are brave enough to stand against the Empire. Together, they will face threatening new villains, encounter colorful adversaries, embark on thrilling adventures, and become heroes with the power to ignite a rebellion.",
      popularity: 59.403,
      poster_path:
        "https://image.tmdb.org/t/p/w154/vOUxo5sfXyQPIoF8rtYK1OVVBPi.jpg",
      vote_average: 7.7,
      vote_count: 468,
    },
    {
      backdrop_path: "/m6eRgkR1KC6Mr6gKx6gKCzSn6vD.jpg",
      first_air_date: "2008-10-03",
      genre_ids: [10759, 16, 10765],
      id: 4194,
      name: "Star Wars: The Clone Wars",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Star Wars: The Clone Wars",
      overview:
        "Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
      popularity: 74.21,
      poster_path:
        "https://image.tmdb.org/t/p/w154/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
      vote_average: 8.5,
      vote_count: 1256,
    },
  ],
};

function FriendGroupCard({ friendGroup = testdata }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{friendGroup.name}</Typography>
        {friendGroup.members.map((m) => (
          <Typography variant="body1">{m.username}</Typography>
        ))}
      </CardContent>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">Movie Recommendations</Typography>
        {friendGroup.movierecommendations.map((r) => (
          <ItemCard item={r} />
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">TV Recommendations</Typography>
        {friendGroup.tvrecommendations.map((r) => (
          <ItemCard item={r} />
        ))}
      </Box>
    </Card>
  );
}

export default FriendGroupCard;
