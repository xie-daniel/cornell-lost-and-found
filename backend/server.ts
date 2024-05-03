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
  date: {
    month: number;
    day: number;
    year: number;
  };
  claimed: boolean;
};

//replace later, for now just empty

let lostItems: LostAndFoundItem[] = [];

app.get("/lost-items", async (req, res) => {
  res.json(lostItems);
});

app.post("/lost-items", (req, res) => {
  const newItem = req.body;
  lostItems.push(newItem);
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
  console.log("Listening");
});
