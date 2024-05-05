import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { WeatherResponse } from "@full-stack/types";
import { db } from "./firebase";

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

const itemCollectionRef = db.collection("testing");

const addItem = async (item: LostAndFoundItem) => {
  const newDoc = itemCollectionRef.doc(item.id);
  return await newDoc.set(item);
};

let lostItems: LostAndFoundItem[] = [];

app.get("/lost-items", async (req, res) => {
  const allItems = await itemCollectionRef.get();
  let items: LostAndFoundItem[] = [];

  allItems.forEach((item) => items.push(item.data() as LostAndFoundItem));

  res.status(200).send({
    message: "SUCCESS: Got all items in the items collection.",
    data: items,
  });
});

app.post("/lost-items", async (req, res) => {
  const newItem = req.body;
  const firebaseItem = {
    id: `${Math.random()}`,
    ...newItem,
    claimed: false,
  };
  const newDoc = await itemCollectionRef.doc(firebaseItem.id).set(firebaseItem);
  res.status(200).send({
    message: "SUCCESS: Added new item to firebase.",
  });
  // add(firebaseItem);
});

// app.put("/api/lost-items/:id", (req, res) => {
//   const itemId = req.params.id;
//   const updatedItem: LostAndFoundItem = req.body;
//   const index = lostItems.findIndex((item) => item.id === itemId);
//   if (index !== -1) {
//     lostItems[index] = updatedItem;
//     res.json(lostItems[index]);
//   } else {
//     res.status(404).json({ error: "Lost item not found" });
//   }
// });

app.put("/api/lost-items/:id", async (req, res) => {
  const itemId = req.params.id;
  const index = lostItems.findIndex((item) => item.id === itemId);
  const snapshot = await itemCollectionRef
    .doc(itemId)
    .update({ claimed: true });
  res.status(200).send({
    message: "SUCCESS: update item to claimed",
  });
});

app.delete("/api/lost-items/:id", async (req, res) => {
  const itemId = req.params.id;
  const index = lostItems.findIndex((item) => item.id === itemId);
  // if (index !== -1) {
  //   const deletedItem = lostItems.splice(index, 1)[0];
  //   res.json(deletedItem);
  // } else {
  //   res.status(404).json({ error: "Lost item not found" });
  // }
  const snapshot = await itemCollectionRef.doc(itemId).delete();
  res.status(200).send({
    message: "SUCCESS: update item to claimed",
  });
});

app.listen(port, () => {
  console.log(port + " Listening to this message");
});
