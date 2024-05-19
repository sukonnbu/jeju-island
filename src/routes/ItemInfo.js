import Navbar from "../components/Navbar";
import Item from "../components/Item";
import MoveToTop from "../components/MoveToTop";

function ItemInfo() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col font-NanumGothic">
      <h1 className="text-3xl p-5 text-center">특산물 & 기념품</h1>
      <details className="border-2 m-3 p-2">
        <summary className="text-xl text-center">목차</summary>
        <ul className="grid grid-cols-3 justify-items-center content-center pt-3">
          <li><a href="#감귤">감귤</a></li>
          <li><a href="#흑돼지">흑돼지</a></li>
          <li><a href="#말고기">말고기</a></li>
          <li><a href="#초콜릿">초콜릿</a></li>
        </ul>
      </details>
      
      <div className="grid grid-cols-1 justify-items-center">
        <Item title="감귤" image="https://t4.ftcdn.net/jpg/05/60/45/61/360_F_560456158_9tOeFKxQN95njuYWaOI0Scamxntbw3Se.jpg" id="감귤">
          <p>
            제주도하면 딱 귤이 떠오르는 사람들이 있을 것이다. 유명한 감귤류로는 귤 이외에도 한라봉, 천혜향, 레드향 등이 있는데 이의 차이점을 알아보자.
            <br />
            레드향은 껍질의 빛이 붉어 레드향이라고 이름 붙여졌다. 껍질이 두껍고 울퉁불퉁하다는 특징이 있다. 제철은 1월~3월이다.
            천혜향은 향이 천리를 간다고 하여 천혜향이라고 이름 붙여졌다. 껍질이 얇은 편이라는 특징이 있다. 제철은 1월~4월이다.
            한라봉은 톡 튀어나온 꼭지 부분이 한라산을 닮아 한라봉이라고 이름 붙여졌다.
            껍질이 두껍고, 레드향 및 천혜향 대비 아삭한 과육과 풍부한 과즙을 가지고 있다는 특징이 있다. 제철은 12월~3월이다
          </p>
        </Item>
        <Item title="흑돼지" id="흑돼지">
          <p>
            제주 흑돼지의 기원은 2세기~5세기 경 야생 멧돼지를 잡아 키운 것이 기원이며 현재 대한민국 천연기념물 제550호로 지정되어 있다.
            과거에는 돔베고기라고 불리는 제주도식 수육을 멜젓에 찍어먹는 방식이 유행하였으나 현재는 주로 구이를 많이 먹는다.
            돼지 껍데기가 있는 제주 흑돼지 삼겹살이 서울로 진출하며 '오겹살'의 원조가 되었다.
            제주 흑돼지는 체질이 강건하고 질병저항성이 강한 특성을 가지고 있으며
            현재는 260여마리를 제주축산진흥원에서 보존관리 중이다.
          </p>
        </Item>
        <Item title="말고기" id="말고기">
          <p>
            제주 말고기는 대표적인 조선시대 진상품 중 하나였다.
            현재 제주도에는 40~50곳의 말고기 음식점이 있으며 이마트에서도 말고기를 구할 수 있다.
            제주 중문에 있는 한 말고기 음식점은 미슐랭 가이드에도 소개된 적이 있다.
            말고기는 육회, 찜, 구이 등 다양한 형태로 먹을 수 있으며 대체적으로 소고기로 만드는 모든 요리가 말고기로도 가능하고 한다.
          </p>
        </Item>
        <Item title="초콜릿" id="초콜릿" image="https://i.namu.wiki/i/xUgsBWQtvQFmSHjH5GGzLIjQ4VGXB5ZZoBZdeuyVSRJ9eVyGKEHnFN5nLk1054qse4JVcrVr60lU1EWO5Cf9oQ.webp">
          <p>
            제주도에 다녀오면 어김없이 꼭 사오는 기념품 중 하나가 한라봉, 녹차 등 제주도 특산물이 들어간 초콜릿이다.
            종류가 많기에 아래에서는 '제주 초콜릿'으로 통칭하겠다.
            제주 초콜릿의 역사는 2001년으로 거슬러 올라가야 한다.
            이 당시 감귤 농사가 풍년을 이루어 감귤 가격 폭락을 막기 위해 제주도에서 감귤 농축액 공장을 설립하였고 이곳에 초콜릿을 만드는 민간기업을 유치하였다.
            그 결과 처음 감귤초콜릿이 만들어졌으며 현재는 다양한 회사에서 감귤뿐 아니라 한라봉, 녹차, 백년초 등 다양한 제주도 특산물을 활용하여 초콜릿을 만들고 있다.
          </p>
        </Item>
      </div>
      <MoveToTop onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}} />
    </div>
    </>
  );
}

export default ItemInfo;