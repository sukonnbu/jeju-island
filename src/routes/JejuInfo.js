import Navbar from "../components/Navbar";
import Info from "../components/Info";

function JejuInfo() {
  return (
    <>
    <Navbar />
    <article id="top" className="font-NanumGothic">
      <h1 className="text-3xl text-center p-5">제주도 소개</h1>
      <details className="border-2 m-3 p-2">
        <summary className="text-xl text-center">목차</summary>
        <ul className="grid grid-cols-3 justify-items-center content-center pt-3">
          <li className="text-lg"><a href="#화산섬">화산섬</a></li>
          <li className="text-lg"><a href="#삼다삼무도">삼다도&삼무도</a></li>
          <li className="text-lg"><a href="#제사음식">제사 음식</a></li>
          <li className="text-lg"><a href="#요괴">제주도 요괴</a></li>
          <li className="text-lg"><a href="#돌하르방">돌하르방</a></li>
          <li className="text-lg"><a href="#사투리">사투리</a></li>
        </ul>
      </details>
      <div className="grid grid-cols-1 justify-items-center">
        <Info title="화산섬 제주도" id="화산섬">
          <p>
            AI 왈, 화산섬은 제주도의 중심지인 제주시의 화산섬이다.
          </p>
        </Info>

        <Info title="삼다도 & 삼무도" id="삼다삼무도">
          <p>
            바람,여자,돌이 많다는 의미로 삼다도라 불리기도 한다.
            <br />
            대한민국 최남단이라 타 지역보다 태풍의 피해를 많이 입어서 바람
            <br />
            남자들이 바닷일을 하다가 죽는일이 많아 성비가 불균형나서 여자
            <br />
            화산섬이라 자연스레 돌이 많이생겨서 돌
            <br />
            이런 의미로 삼다도지만, 이젠 여자보다 남자가 더 많다고 한다.
          </p>

          <p>
            도둑,거지,대문이 없다는 의미로 삼무도라 불리기도 한다.
            <br />
            외부와 교류가 많지 않아서 주민끼리 대부분 한 다리 건너 아는 사이라 세가지가 자연스레 없어졌다.
            <br />
          </p>
        </Info>

        <Info title="독특한 제사 음식" id="제사음식" image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDJfMjE4%2FMDAxNjQzODAxNDM5NzI1.DqD0OlQdciP1Amhnf8evnjQpem6GnbsuINsl9YpQVLQg.z6BthhTzNYG3VekJ_BrPUMRc7THFyNaLJmCiWui_BOIg.JPEG.gonlog%2F20220201%25A3%25DF102549.jpg&type=sc960_832">
          <p>
            제주도는 육지와 분리되어 있어 특별한 제사 문화를 보인다. 이는 특히 독특한 제사 음식으로서 나타난다.
            <br />
            제주도의 특색 있는 제사 음식들은 다음과 같다.
            <ol>
              <li><big>빵</big> - 제주도는 현무암 지대이므로 쌀을 재배하기 어려워 재배할 수 있는 밀을 사용한 빵이 올라간다.</li>
              <li><big>과일</big> - 아열대 기후를 띠는 제주도는 귤과 열대 과일(바나나, 애플망고, 파인애플 등)이 자라기 쉬워 자연스레 제사상에 올라가게 되었다</li>
              <li><big>옥돔</big> - 옥돔이라는 생선을 굽거나 탕으로 하여, 또는 말려서 올렸다고 한다.</li>
              <li><big>이색 술</big> - 과거에는 감주를 만들어서 올렸지만, 요즘에는 귤 주스를 사용하기도 한다.</li>
            </ol>
          </p>
        </Info>

        <Info title="제주도 요괴" id="요괴" image="https://search.pstatic.net/sunny/?src=https%3A%2F%2Ftimg.humoruniv.com%2Fthumb_crop_resize.php%3Furl%3Dhttps%3A%2F%2Fdown.humoruniv.com%2F%2Fhwiparambbs%2Fdata%2Feditor%2Ffear%2Fe_scd2e34002_2a9987691002565588518127a3e4e2079f7075d8.png%3FSIZE%3D680x685&type=a340">
          <p>
            이름은 그슴새라고 한다. 옳지 못하다는 말을 뜻하는 그름과 비슷한 그슴과, 불길하고 악독한 기운을 뜻하는 새를 합친 것이다.
            그슴새는 비바람을 조정하는 능력이 있어서 출몰할 때 먹구름이 끼고 비가 온다고 한다. 영혼을 홀려 정신이 나가게 하고 공포심을 증가시켜 스스로 죽게 만든다고 한다.
            낮과 밤 상관없이 혼자있는 사람에게 간다고 한다.
            그슴새는 제주도 전통 우비인 주젱이를 입고있다.
            <br />
            과거에 살인범들에게 주젱이를 씌웠는데, 살인범이 죽고 악귀가 되어 그슴새가 되었다고 한다.
          </p>
        </Info>
        <Info title="돌하르방" id="돌하르방" image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMTlfODAg%2FMDAxNzAyOTEyODQ1MzM3.9wgcrpzE0meVlZq9Q96fzXnlXouBBDM7mFu-Lv5I3b4g.DFzUs-IP68Ua21hLo6O6TGD6I4tmjJpPMctGdy3pmtIg.PNG.cpgja0012%2FIMG_7919.PNG&type=a340">
          <p>
            돌하르방은 손의 위치에 따라 상징하는 인물이 달라진다.
            <br /> 
            오른손이 왼손보다 위에 놓인 돌하르방은 문인을 상징한다.
            <br />
            왼손이 위에 놓인 돌하르방은 무인을 상징한다.
            <br />
            양손이 평등한 돌하르방은 평민 또는 근래에 만들어진 것이다.
          </p>
        </Info>

        <Info title="제주도 사투리" id="사투리" image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjFfMTM0%2FMDAxNjc5MzI3NzkyNDc1.OaSiAyKu2x12izDjAnaqmzBnBRrrN6ZV7ndUBiMMRVUg.05YJtsGsuE3mbZ2J7dQomJvSEiDKGVOGAhuMraa8Pk8g.JPEG.sayloveme12%2FIMG_1318.JPG&type=sc960_832">
          <p>
            제주 사투리는 타 지역에서는 볼 수 없는 중세 한국어 모습을 많이 유지하고 있다.
            동시에 제주도만의 고유한 문법적 특징을 갖고 있어서 별개의 언어처럼 여겨진다.
          </p>
        </Info>
      </div>
    </article>
    </>
  );
}

export default JejuInfo; 