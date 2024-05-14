import Navbar from "../components/Navbar";

function Credit() {
    return (
        <>
            <Navbar />
            <article>
                <h2>만든 사람들</h2>
                <article>
                    <section>
                        <h3>자료 조사 및 교정</h3>
                        <ul>
                            <li>20000 홍길동</li>
                        </ul>
                    </section>

                    <section>
                        <h3>웹페이지 제작</h3>
                        <ul>
                            <li>20628 최지완</li>
                            <li>20730 최현우</li>
                            <li>20823 정승용</li>
                            <li>20829 탁준호</li>
                        </ul>
                    </section>

                    <section>
                        <h3>일러스트</h3>
                        <ul>
                            <li>20107 민경조</li>
                        </ul>
                    </section>


                    <section>
                        <h3>지도교사</h3>
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