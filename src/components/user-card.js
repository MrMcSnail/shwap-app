import AddKudos from "./add-kudos";
import { useState } from "react";

export default function UserCard({username, avatar_url, kudos}) {
  const [kudosChange, setKudosChange] = useState([])
  
  return <li>
    <img width='300' height='300' src={avatar_url} alt={username} />
    <h2>{username}</h2>
    <p>Kudos: {kudos + kudosChange}</p>
    <AddKudos username={username} setKudosChange={setKudosChange}/>
    </ li>
}