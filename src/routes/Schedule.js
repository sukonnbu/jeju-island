import Navbar from "../components/Navbar";
import RadioButton from "../components/RadioButton";
import { useState } from "react";

function Schedule () {
    const [team, setTeam] = useState(1);
    return (
    <>
    <Navbar />
    <div>
        <div className="flex justify-center p-5">
            <fieldset className="flex flex-row justify-evenly items-center border-4 border-black w-96 h-20">
                <legend className="text-lg text-center px-3">조를 선택하세요</legend>
                <RadioButton value="1" onChange={setTeam} checked={team}>A조</RadioButton>
                <RadioButton value="2" onChange={setTeam} checked={team}>B조</RadioButton>
                <RadioButton value="3" onChange={setTeam} checked={team}>C조</RadioButton>
            </fieldset>
        </div>
        <div className="flex flex-col items-center">
            {team === "1" && <article>A조
            <img src="../images/schedule/일정_A.jpg" alt="A조 일정"/>      
            </article>}
            {team === "2" && <article>B조
            <img src="../images/schedule/일정_B.jpg" alt="B조 일정"/>      
            </article>}
            {team === "3" && <article>C조
            <img src="../images/schedule/일정_C.jpg" alt="C조 일정"/>    
            </article>}
        </div>
    </div>
    </>)
}

export default Schedule;