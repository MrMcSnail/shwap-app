import AddKudos from "./add-kudos";
import { useState } from "react";
import { UserContext } from "../contexts/user";
import { useContext } from "react";
import {Button, Card} from "@mui/material";
export default function UserCard({ username, avatar_url, kudos, user }) {
  const [kudosChange, setKudosChange] = useState(null);
  const { setUser } = useContext(UserContext);
  
  const placeholder = 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=';
  
  return (
    <Card variant='outlined' width='33vw'>
      <img width='300' height='300' src={avatar_url.includes('fakercloud')? placeholder : avatar_url} alt={username} />
      <h2>{username}</h2>
      <p>Kudos: {kudos + kudosChange}</p>
      <AddKudos username={username} setKudosChange={setKudosChange} />
      <br />
      <Button
        onClick={() => {
          setUser(user);
        }}
      >
        Select User
      </Button>
    </Card>
  );
}
