
import { patchKudos } from "../api"


export default function AddKudos({username, setKudosChange}) {

function handleClick() {
  setKudosChange((currentSetKudos) => currentSetKudos += 1)
  
  return patchKudos({"username":username, "kudos_inc": 1}).catch((err)=> {setKudosChange((currentSetKudos) => currentSetKudos + 1)})
}

  return <button onClick={handleClick}>Give this user Kudos</button>
}
