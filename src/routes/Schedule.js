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
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyNDA1MjBfMTgg/MDAxNzE2MTMzNDIwNTE5.jcA0GmLGK10LEeUa6OejaGH8aPKrhGnIhrHlVX0I88gg.NZ4gtqFtVnIPPygAcgTxOmoducpp5aROzAiwh1Be2d4g.JPEG/%EC%9D%BC%EC%A0%95_A.jpg?type=w800" alt="A조 일정"/>      
            </article>}
            {team === "2" && <article>B조
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyNDA1MjBfMTU4/MDAxNzE2MTMzNzg4NzM1.yrIZdVFuddYk7EUiZWB22yW3gAYoY0m3mrO42XZbd8sg.E_kIfu9TekzHZ6vBPLQKfTPjDcVuXvSyv4VBVq9yBNUg.JPEG/%EC%9D%BC%EC%A0%95_B.jpg?type=w800" alt="B조 일정"/>      
            </article>}
            {team === "3" && <article>C조
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyNDA1MjBfMjc5/MDAxNzE2MTM0MDYxMDYw.ijcsmjGzjk0Wb-1leC-0AMkzGWTmdzHaxFnJ2qHuGvgg.Wd3AfvEZkD-MdswtQTqVttIY9zK0-dSTvy-aXC6VZpIg.JPEG/%EC%9D%BC%EC%A0%95_C.jpg?type=w800" alt="C조 일정"/>    
            </article>}
        </div>
    </div>
    </>)
}

export default Schedule;