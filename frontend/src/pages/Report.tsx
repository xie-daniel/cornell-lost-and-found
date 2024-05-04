import { useState } from 'react';

const Report = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        locationFound: '',
        date: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.name !== '' && formData.description !== '' && formData.locationFound !== '' && formData.date !== '') {
            fetch('http://localhost:8080/lost-items', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            alert(`Successfully added ${formData.name} to the lost and found!`)
        } else {
            alert("Please fill out all fields.")
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="center">
                <h1>    Submit Lost and Found Entry</h1>

                <h2>    Name of Item
                    <div></div>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                placeholder = {"E.g Water Bottle, Basketball, Airpods ..."} 
                style={{width: "370px", fontSize: 14}}/>
                </h2>

                <h2>    Description of Item
                    <div></div>
                <input type="text" name="description" value={formData.description} onChange={handleChange}
                placeholder = {"E.g Blue 64oz Hydro Flask"} 
                style={{width: "370px", fontSize: 14}}/>
                </h2>

                <h2>    Location Found
                    <div></div>
                <input type="text" name="locationFound" value={formData.locationFound} onChange={handleChange}
                placeholder = {"E.g Helen Newman Hall"} 
                style={{width: "370px", fontSize: 14}}/>
                </h2>

                <h2>    Date Found
                <div></div>
                <input type="text" name="date" value={formData.date} onChange={handleChange} placeholder = {"MM/DD/YYYY"} 
                style={{fontSize: 14}}/>
                </h2>

            <button type="submit">Submit!</button>
            </div>
        </form>
    );
};

export default Report;
