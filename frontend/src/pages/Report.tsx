const Report = () => {
    
    return (
        <form action="/lost-items" method="post">
            <div className="center">
                <h1>    Submit Lost and Found Entry</h1>

                <h2>    Name of Item
                    <div></div>
                <input type="text" 
                placeholder = {"E.g Water Bottle, Basketball, Airpods ..."} 
                style={{width: "370px", fontSize: 14}}/>
                </h2>

                <h2>    Description of Item
                    <div></div>
                <input type="text" 
                placeholder = {"E.g Blue 64oz Hydro Flask"} 
                style={{width: "370px", fontSize: 14}}/>
                </h2>

                <h2>    Location Found
                    <div></div>
                <input type="text" 
                placeholder = {"E.g Helen Newman Hall"} 
                style={{width: "370px", fontSize: 14}}/>
                </h2>

                <h2>    Date Found
                <div></div>
                <input type="text" placeholder = {"MM/DD/YYYY"} 
                style={{fontSize: 14}}/>
                </h2>

            <button type="submit">Submit!</button>
            </div>
        </form>
    );
};

export default Report;
