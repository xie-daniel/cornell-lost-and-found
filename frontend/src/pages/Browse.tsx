import {Card} from "@mantine/core";
import { useState, useEffect } from "react";
// type Item = {
//     itemName: string;
//     location: string;
//     dateReported: Date;
//     claimed: boolean;
//     description: string
// }

type Item = {
    id : string; 
    name: string;
    description: string;
    locationFound: string;
    date: {
        month: number;
        day: number;
        year: number;
    };
    claimed: boolean;
}

const BrowsePage = () => {

    const BACKEND_BASE_PATH = 'http://localhost:8080'

    // let lostItems: Item[] = []

    // const getLostItems = async () => {
    //     const res = await fetch(`${BACKEND_BASE_PATH}/lost-items`);
    //     const d = await res.json();
    //     lostItems = d;
    //     console.log(lostItems);
    // };

    const [lostItems, setLostItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/lost-items`)
        .then((res) => res.json())
        .then((d) => setLostItems(d));
        console.log("hi")
    }, []);
    // getLostItems();

    return (
    <div style={{display:"flex", justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
        <h1>Browse Lost Items</h1>
        <div style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(2, 1fr)"}}>
            {lostItems.map((item) => <Card style={{border: "1px solid black", width: "600px", height: "250px", position: "relative"}}>
                <strong>{item.name}</strong>
                <p>Found at: {item.locationFound}</p>
                <p>Found on: {item.date.month}/{item.date.day}/{item.date.year}</p>
                <p>Claimed? {item.claimed ? "Yes" : "No"}</p>
                <p>Description: {item.description}</p>
                <div style={{position: "absolute", top: "25px", right: "25px"}}>
                    {!item.claimed && <button>Claim</button>}
                </div>
            </Card>)}
        </div>
    </div>
)};

export default BrowsePage;

