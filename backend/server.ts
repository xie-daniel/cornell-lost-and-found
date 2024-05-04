import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { WeatherResponse } from "@full-stack/types";

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());

type LostAndFoundItem = {
  id: string;
  name: string;
  description: string;
  locationFound: string;
  date: string;
  claimed: boolean;
};

//replace later, for now just empty

let lostItems: LostAndFoundItem[] = [];

// app.get("/lost-items", async (req, res) => {
//   // console.log("HELLO WORLD!");
//   console.log(req.body);
//   res.json([
//     {
//       id: "1",
//       name: "Water Bottle",
//       description:
//         "Pink Hydroflask found on one of the tables near Mattin's Cafe. I left it under the table.",
//       locationFound: "Duffield Atrium",
//       date: "4/20/2024",
//       claimed: false,
//     },
//     {
//       id: "2",
//       name: "Laptop",
//       description:
//         "MacBook Air, found on one of the sofas of the cocktail lounge. Contact me at placeholder@gmail.com to get it back.",
//       locationFound: "Cocktail Lounge",
//       date: "4/22/2024",
//       claimed: true,
//     },
//     {
//       id: "3",
//       name: "Student ID",
//       description:
//         'Found an ID with the name "Daniel Xie" and gave it to the librarian. Speak to the Olin front desk to get it back.',
//       locationFound: "Olin Library",
//       date: "4/22/2024",
//       claimed: true,
//     },
//     {
//       id: "4",
//       name: "Apple Watch with blue wristband",
//       description:
//         "I found it in an RPCC study pod. I gave it to the service center, talk to them to get it back.",
//       locationFound: "RPCC",
//       date: "4/15/2024",
//       claimed: true,
//     },
//     {
//       id: "5",
//       name: "Black Sweatshirt",
//       description:
//         "I left it at the tables outside Crossings because they were about to close.",
//       locationFound: "Crossings Cafe",
//       date: "4/23/2024",
//       claimed: false,
//     },
//   ]);
// });

app.get("/lost-items", (req, res) => {
  res.json(lostItems);
});

app.post("/lost-items", (req, res) => {
  const newItem = req.body;
  lostItems.push({ id: `{lostItems.length+1}`, ...newItem, claimed: false });
  res.json(lostItems);
});

app.put("/api/lost-items/:id", (req, res) => {
  const itemId = req.params.id;
  const updatedItem: LostAndFoundItem = req.body;
  const index = lostItems.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    lostItems[index] = updatedItem;
    res.json(lostItems[index]);
  } else {
    res.status(404).json({ error: "Lost item not found" });
  }
});

app.delete("/api/lost-items/:id", (req, res) => {
  const itemId = req.params.id;
  const index = lostItems.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    const deletedItem = lostItems.splice(index, 1)[0];
    res.json(deletedItem);
  } else {
    res.status(404).json({ error: "Lost item not found" });
  }
});

app.listen(port, hostname, () => {
  console.log(port + " Listening to this message");
});
