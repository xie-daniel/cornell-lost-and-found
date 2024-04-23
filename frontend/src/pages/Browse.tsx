import {Card} from "@mantine/core";

type Item = {
    itemName: string;
    location: string;
    dateReported: Date;
    claimed: boolean;
    description: string
}

const BrowsePage = () => {
    const lostItems: Item[] = [
        {
            itemName: "Water Bottle",
            location: "Duffield Atrium",
            dateReported: new Date('April 18, 2023 03:00:00'),
            claimed: false,
            description: "Pink Hydroflask found on one of the tables near Mattin's Cafe. I left it under the table."
        },
        {
            itemName: "Laptop",
            location: "Cocktail Lounge",
            dateReported: new Date('April 22, 2023 01:00:00'),
            claimed: true,
            description: "MacBook Air, found on one of the sofas of the cocktail lounge. Contact me at placeholder@gmail.com to get it back."
        },
        {
            itemName: "Student ID",
            location: "Olin Library",
            dateReported: new Date('April 21, 2023 01:00:00'),
            claimed: false,
            description: "Found an ID with the name \"Daniel Xie\" and gave it to the librarian. Speak to the Olin front desk to get it back."
        },
        {
            itemName: "Apple Watch with blue wristband",
            location: "RPCC",
            dateReported: new Date('April 11, 2023 01:00:00'),
            claimed: true,
            description: "I found it in an RPCC study pod. I gave it to the service center, talk to them to get it back."
        },
        {
            itemName: "Black Sweatshirt",
            location: "Crossings Cafe",
            dateReported: new Date('April 13, 2023 01:00:00'),
            claimed: true,
            description: "I left it at the tables outside Crossings because they were about to close."
        }
    ]

    return (
    <div style={{display:"flex", justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
        <h1>Browse Lost Items</h1>
        <div style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(2, 1fr)"}}>
            {lostItems.map((item) => <Card style={{border: "1px solid black", width: "600px", height: "250px", position: "relative"}}>
                <strong>{item.itemName}</strong>
                <p>Found at: {item.location}</p>
                <p>Found on: {item.dateReported.toDateString()}</p>
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

