import React, {useState, useEffect} from "react";
import axios from "axios";

const ProfileViewer = ({name="elie"}) => {
    const [data, setData] = useState(null)

    // cannot have callback be async, write it as below or use promises
    useEffect(() => {
        async function loadProfile() {
            const res = await axios.get(`https://api.github.com/users/${name}`);
            setData(res.data.name)
        };
        loadProfile();
    }, [name])

    return (
        <div>
            <h1>{data ? data : 'Loading....'}</h1>
        </div>
    )
}

export default ProfileViewer;