import { useState } from "react"
import "./lottery.css";
import { genticket,sum } from "./helper";

export default function lottery() {
    let [ticket, setTicket] = useState(genticket(3));
    let iswinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genticket(3))
    }


   return(
     <div>
    <h1>Lottery Game!</h1> 
    <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
    
    </div>

    <h3>{iswinning && "congurations, yo u won!"}</h3>
    <br />
    <button onClick={buyTicket}>Buy new Ticket</button>
   </div>) 
}