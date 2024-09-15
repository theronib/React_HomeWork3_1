import { useState } from "react";


function RegistrationPage() {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("sex");

    const getIsFormValid = () => {
        return (
            username &&
            sex !== "sex"
        );
    };

    const clearForm = () => {
        setUsername("");
        setAge("");
        setEmail("");
        setSex("sex");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <>
            <h1>Sign Up</h1>
            <div id="register">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="Field">
                            <label>
                                Username <sup>*</sup>
                            </label>
                            <input
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                placeholder="Username"
                            />
                        </div>

                        <div className="Field">
                            <label>Age</label>
                            <input
                                value={age}
                                onChange={(e) => {
                                    setAge(e.target.value);
                                }}
                                placeholder="Age"
                            />
                        </div>

                        <div className="Field">
                            <label>
                                Email address <sup>*</sup>
                            </label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email address"
                            />
                        </div>

                        <br></br>
                        <div className="Field">
                            <label>
                                Sex <sup>*</sup>
                            </label>

                            <select value={sex} onChange={(e) => setSex(e.target.value)}>
                                <option value="sex">Sex</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Prefer not to say</option>
                            </select>
                        </div>
                        <br></br>
                        <button class="btn btn-sm btn-outline-secondary" type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button>
                    </fieldset>
                </form>
                <br></br>
                <button class="btn btn-sm btn-outline-secondary" onClick={clearForm}>
                    Clear form
                </button>
            </div>
        </>

    );
}

export default RegistrationPage; 