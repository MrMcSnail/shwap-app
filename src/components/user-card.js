import AddKudos from "./add-kudos";
import { useState } from "react";
import { UserContext } from '../contexts/user';
import { useContext } from 'react';

export default function UserCard({username, avatar_url, kudos, user}) {
  const [kudosChange, setKudosChange] = useState(null)
  const {setUser} = useContext(UserContext)
  return (
  <li>
    <img width='300' height='300' src={avatar_url} alt={username} />
    <h2>{username}</h2>
    <p>Kudos: {(kudos + kudosChange)}</p>
    <AddKudos username={username} setKudosChange={setKudosChange}/>
    <br />
    <button onClick={() => {setUser(user)}}>Select User</button>
  </ li>)
}