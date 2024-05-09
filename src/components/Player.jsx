import { useState } from "react";

const Player = ({initialName , symbol ,isActive , onChangeName}) => {
    const [playerName, setplayerName] = useState(initialName)
    const [isEditing, setisEditing] = useState(false);

    const handleEditClick =()=>{
        setisEditing((Editing)=> !Editing);
        
        if(isEditing){
          onChangeName(symbol,playerName);
        }
    
    }
    const handleChande =(event)=>{
        setplayerName(event.target.value)
    }
     
    let editablePLayerName = <span className="player-name">{playerName}</span>
    
    if(isEditing){
        editablePLayerName = <input type="text" required value={playerName} onChange={handleChande}/>
    }
  return   (
    <li className={isActive? 'active':undefined}>
  <span className="player">
        {editablePLayerName}
     <span className="player-symbol">{symbol}</span>
  </span>
   <button onClick={handleEditClick}>
    {isEditing ? 'Save': 'Edit'}
   </button>
   </li>
  )
  
}

export default Player;