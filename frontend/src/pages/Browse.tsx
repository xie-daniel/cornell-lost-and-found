import {Card} from "@mantine/core";

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
    const dummyData: Item[] = [
        {
            id: "1",
            name: "Water Bottle",
            description: "Pink Hydroflask found on one of the tables near Mattin's Cafe. I left it under the table.",
            locationFound: "Duffield Atrium",
            date: {
                month: 4,
                day: 20,
                year: 2024
            },
            claimed: false,
            
        },
        {
            id: "2",
            name: "Laptop",
            description: "MacBook Air, found on one of the sofas of the cocktail lounge. Contact me at placeholder@gmail.com to get it back.",
            locationFound: "Cocktail Lounge",
            date: {
                month: 4,
                day: 22,
                year: 2024
            },
            claimed: true
        },
        {
            id: "3",
            name: "Student ID",
            description: "Found an ID with the name \"Daniel Xie\" and gave it to the librarian. Speak to the Olin front desk to get it back.",
            locationFound: "Olin Library",
            date: {
                month: 4,
                day: 21,
                year: 2024
            },
            claimed: true
        },
        {
            id: "4",
            name: "Apple Watch with blue wristband",
            description: "I found it in an RPCC study pod. I gave it to the service center, talk to them to get it back.",
            locationFound: "RPCC",
            date: {
                month: 4,
                day: 15,
                year: 2024
            },
            claimed: true,
        },
        {
            id: "5",
            name: "Black Sweatshirt",
            description: "I left it at the tables outside Crossings because they were about to close.",
            locationFound: "Crossings Cafe",
            date: {
                month: 4,
                day: 23,
                year: 2024
            },
            claimed: false,
        }
    ]

    const BACKEND_BASE_PATH = 'http://localhost:8080'

    let lostItems: Item[] = []

    const getLostItems = async () => {
        const res = await fetch(`${BACKEND_BASE_PATH}/lost-items`);
        const d = await res.json();
        lostItems = d;
        console.log(lostItems);
    };

    getLostItems();

    return (
    <div style={{display:"flex", justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
        <h1>Browse Lost Items</h1>
        <div style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(2, 1fr)"}}>
            {dummyData.map((item) => <Card style={{border: "1px solid black", width: "600px", height: "250px", position: "relative"}}>
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

