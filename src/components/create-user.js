import { createNewUser } from "../api";
import { useState } from "react";

const CreateUser = () => {
    const [username, setUsername] = useState("");
    const [avatarURL, setAvatarURL] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        createNewUser({
            username: username,
            avatar_url: avatarURL,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                />
                <br />
                <label for="avatarURL">Avatar URL: </label>
                <input
                    type="url"
                    id="avatarURL"
                    onChange={(event) => setAvatarURL(event.target.value)}
                    value={avatarURL}
                /><br/>
                <button type="submit">Create Userprofile</button>
            </form>
        </>
    );
};

export default CreateUser;
