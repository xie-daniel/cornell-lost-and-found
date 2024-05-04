import {Card} from "@mantine/core";
import { useState, useEffect } from "react";

type Item = {
    id : string; 
    name: string;
    description: string;
    locationFound: string;
    date: string;
    claimed: boolean;
}

const BrowsePage = () => {

    const BACKEND_BASE_PATH = 'http://localhost:8080'

    const [lostItems, setLostItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/lost-items`)
        .then((res) => res.json())
        .then((d) => setLostItems(d));
        console.log("hi")
    }, []);
    
    function claimItem(id : string, name : string) {
        fetch(`http://localhost:8080/api/lost-items/${id}`, {
            method: 'PUT'
        })
        alert(`Successfully claimed ${name}!`)
    }

    function deleteItem(id : string, name : string) {
        fetch(`http://localhost:8080/api/lost-items/${id}`, {
            method: 'DELETE'
        })
        alert(`Successfully deleted ${name}!`)
    }

    return (
    <div style={{display:"flex", justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
        <h1>Browse Lost Items</h1>
        <div style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(2, 1fr)"}}>
            {lostItems.map((item) => <Card style={{border: "1px solid black", width: "600px", height: "250px", position: "relative"}}>
                <strong>{item.name}</strong>
                <p>Found at: {item.locationFound}</p>
                <p>Found on: {item.date}</p>
                <p>Claimed? {item.claimed ? "Yes" : "No"}</p>
                <p>Description: {item.description}</p>
                <div style={{position: "absolute", top: "25px", right: "25px"}}>
                    {!item.claimed && <button onClick={() => claimItem(item.id, item.name)} >Claim</button>}
                </div>
                <div style={{position: "absolute", bottom: "25px", right: "25px"}}>
                    {item.claimed && <button style={{color:'red'}} onClick={() => deleteItem(item.id, item.name)} >Delete</button>}
                </div>
            </Card>)}
        </div>
    </div>
)};

export default BrowsePage;

