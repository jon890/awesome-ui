import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />

      <section className="pt-[50vh]">
        <h1 className="text-[4rem] text-center">AirMug Pro</h1>
        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </p>
        </div>
        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            주변 맛을 느끼게 해주는
            <br />
            주변 맛 허용 모드
          </p>
        </div>
        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </div>
        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            새롭게 입가를
            <br />
            찾아온 매혹
          </p>
        </div>
      </section>

      <section className="pt-[50vh]">
        <p>
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          nihil doloribus error, eos, magni dicta tempore blanditiis optio earum
          expedita possimus nulla a esse. Ipsum odit recusandae, possimus soluta
          omnis totam reprehenderit maxime excepturi qui quasi at eligendi
          accusantium suscipit alias amet corporis tempora, doloremque adipisci
          nihil velit illum, numquam quis earum! Rem nesciunt tenetur atque
          error dolorum temporibus, labore nihil debitis nisi beatae voluptatum,
          id maiores sint minus mollitia laboriosam sed? Totam officia ut illum
          perferendis et est adipisci quidem ad laudantium, perspiciatis modi
          maxime explicabo dolores atque, beatae quis corporis aliquam labore!
          Officiis ducimus dolorem iure sit doloremque.
        </p>
      </section>

      <section className="pt-[50vh]">
        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>

        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 당신과 음료만 남게 되죠.
          </p>
          <div></div>
        </div>

        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            디자인 앤 퀄리티 오브 스웨덴,
            <br />
            메이드인 차이나
          </p>
          <div></div>
        </div>
      </section>

      <section className="pt-[50vh]">
        <div className="flex items-center justify-center text-[2.5rem]">
          <p className="font-bold text-center leading-[1.2]">
            <strong>Retina 머그</strong>
            <br />
            아이디어를 광활하게 펼칠
            <br />
            아름답고 부드러운 음료 공간.
          </p>
        </div>
      </section>
    </main>
  );
}
