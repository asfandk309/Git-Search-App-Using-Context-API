import axios from "axios";
import { useEffect, useState } from "react";
// import Card from "./Card";
// import Header from "./Header";
// import Search from "../../Components/Search";
import Search from '../../Components/Search/Search';
import Card from '../../Components/Card/Card';
import Header from "../../Components/Header/Header";


const API = "https://api.github.com/users/";

function Main() {

    const [text, setText] = useState("muhammadumair11");
    const [user, setUser] = useState("muhammadumair11");
    const [error, setError] = useState("")

    useEffect(() => {
        handleSearch();
        setText("");
    }, [])

    const handleSearch = () => {
        axios.get(`${API}${text}`)
            .then((resp) => {
                setUser(resp.data);
                setError("");
            })
            .catch((error) => {
                setError("No match");
            })
    }

    return (
        <div>
            <Header />
            <Search
                handleSearch={handleSearch}
                text={text}
                setText={setText}
                error={error}
            />
            <Card
                user={user}
            />
        </div>
    )
}

export default Main;



