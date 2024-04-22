import {Card} from "@mantine/core";

const BrowsePage = () => {
    const lostItems = ["Water Bottle", 'Backpack','iPhone 13', 'AirPods', 'Student ID', 'Hydroflask', 'Necklace', 'Ring'];
    
    return (
    <div style={{display:"flex", justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
        <h1>Browse Lost Items</h1>
        <div style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(3, 1fr)"}}>
            {lostItems.map((item) => <Card style={{border: "2px solid black", width: "400px", height: "250px"}}>
                <h3>{item}</h3>
            </Card>)}
        </div>
    </div>
)};

export default BrowsePage;
