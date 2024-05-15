import Navbar from "../components/Navbar";

function Credit() {
    return (
        <>
        <Navbar />
        <article>
            <h2 className="text-2xl text-center">만든 사람들</h2>
            <article className="grid grid-cols-1 place-items-center p-14 space-y-10">
                <section className="w-2/3">
                    <h3 className="text-xl text-center">자료 조사 및 교정</h3>
                    <ul className="m-3">
                        <li>20107 민경조</li>
                        <li>20321 유현우</li>
                        <li>20322 이재영</li>
                        <li>20429 최현석</li>
                        <li>20505 김성진</li>
                        <li>20808 김범수</li>
                    </ul>
                </section>
                <section className="w-2/3">
                    <h3 className="text-xl text-center">팜플렛 제작</h3>
                    <ul className="m-3">
                        <li>송요한 선생님</li>
                        <li>20203 김강석</li>
                    </ul>
                </section>
                <section className="w-2/3">
                    <h3 className="text-xl text-center">웹페이지 제작</h3>
                    <ul>
                        <li>20628 최지완</li>
                        <li>20730 최현우</li>
                        <li>20823 정승용</li>
                        <li>20829 탁준호</li>
                    </ul>
                </section>

                <section className="w-2/3">
                    <h3 className="text-xl text-center">일러스트</h3>
                    <ul>
                        <li>20107 민경조</li>
                    </ul>
                </section>


                <section className="w-2/3">
                    <h3 className="text-xl text-center">지도교사</h3>
                    <ul>
                        <li>송요한 선생님</li>
                        <li>황승근 선생님</li>
                        <li>민동훈 선생님</li>
                    </ul>
                </section>
            </article>
        </article>
        </>
    )
}

export default Credit;