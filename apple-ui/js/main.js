(() => {
  let yOffset = 0; // window.scrollY 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치 (yOffset)보다 이전에 위치한 스크롤 섹션들을의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고 있는) 씬(scroll-section)
  let enterNewScene = false; // 새로운 scene이 시작된 순간 true

  const sceneInfo = [
    {
      // 0
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      },
      values: {
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageA_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageA_translateY_out: [0, -20, { start: 0.2, end: 0.3 }],

        messageB_opacity: [0, 1, { start: 0.3, end: 0.4 }],
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      // 2
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      // 3
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (const scene of sceneInfo) {
      scene.scrollHeight = scene.heightNum * window.innerHeight;
      scene.objs.container.style.height = `${scene.scrollHeight}px`;
    }

    yOffset = window.screenY;

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }

  function calcValues(values, currentYOffset) {
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    let rv;
    if (values.length === 3) {
      // start ~ end 사이에 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        const partScrollRatio =
          (currentYOffset - partScrollStart) / partScrollHeight;
        rv = values[0] + partScrollRatio * (values[1] - values[0]);
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = values[0] + scrollRatio * (values[1] - values[0]);
    }

    return rv;
  }

  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    console.log(currentScene, currentYOffset);

    switch (currentScene) {
      case 0:
        const messageA_opacity_in = calcValues(
          values.messageA_opacity_in,
          currentYOffset
        );
        const messageA_opacity_out = calcValues(
          values.messageA_opacity_out,
          currentYOffset
        );
        const messageA_translateY_in = calcValues(
          values.messageA_translateY_in,
          currentYOffset
        );
        const messageA_translateY_out = calcValues(
          values.messageA_translateY_out,
          currentYOffset
        );

        if (scrollRatio <= 0.22) {
          objs.messageA.style.opacity = messageA_opacity_in;
          objs.messageA.style.transform = `translateY(${messageA_translateY_in}%)`;
        } else {
          objs.messageA.style.opacity = messageA_opacity_out;
          objs.messageA.style.transform = `translateY(${messageA_translateY_out}%)`;
        }
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  function scrollLoop() {
    prevScrollHeight = 0;
    enterNewScene = false;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
      enterNewScene = true;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return;
      currentScene--;
      enterNewScene = true;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (enterNewScene) return;
    playAnimation();
  }

  window.addEventListener("load", setLayout);
  window.addEventListener("resize", setLayout);
  window.addEventListener("scroll", () => {
    yOffset = window.scrollY;
    scrollLoop();
  });
})();
