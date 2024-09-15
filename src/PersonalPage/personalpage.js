import { useState } from "react";

const PersonalPage = () => {

    const initialState = {
        name: "Баранівський Ярослав Дмитрович",
        age: "19 років",
        phonenumber: "+380956842311",
        email: "yaroslav.baranivskyy@gmail.com",
        town: "Біла Церква",
        birth: "17 червня 2004р."
    };

    const [formData, setData] = useState(initialState);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({
            ...formData,
            [name]: value
        })
    }

    const handleReset = () => {
        setData(initialState);
    };

    return (
        <>
            <h1><u>Personal Page</u></h1>
            <br></br>
            <div id="resume">
                <label for="name">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
                <br></br>
                <label for="age">Age:</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange}></input>
                <br></br>
                <label for="phonenumber">Phone number:</label>
                <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange}></input>
                <br></br>
                <label for="email">Email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                <br></br>
                <label for="town">Town:</label>
                <input type="text" name="town" value={formData.town} onChange={handleChange}></input>
                <br></br>
                <label for="birth">Date of birth:</label>
                <input type="text" name="birth" value={formData.birth} onChange={handleChange}></input>
                <br></br><br></br>

                <div id="options">
                    <button class="btn btn-sm btn-outline-secondary" onClick={ () => alert("Success!")}>Change info</button>
                    <button class="btn btn-sm btn-outline-secondary" onClick={handleReset}>Undo</button>
                </div>
            </div>
        </>
    )
}

export default PersonalPage;