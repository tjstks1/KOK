/* ---------- 경계선 라인 애니메이션 ---------- */
const lineSvg = document.querySelectorAll(".line_ani1, .line_ani2");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            // 애니메이션 처음부터 다시 시작
            entry.target.classList.remove("active");
            void entry.target.offsetWidth;
            entry.target.classList.add("active");

        } else {

            // 화면 밖으로 나가면 초기화
            entry.target.classList.remove("active");

        }

    });

}, {
    threshold: 0.3
});

lineSvg.forEach((line) => {
    observer.observe(line);
});


/* ---------- 콜렉션 이미지 호버시 유지 - 시작 ----------*/
/* 콜렉션 1 */
$("#collection1 .mini_img1").mouseenter(function(){

  $("#collection1 .pic").removeClass("active");
  $("#collection1 .pic1").addClass("active");

});

$("#collection1 .mini_img2").mouseenter(function(){

  $("#collection1 .pic").removeClass("active");
  $("#collection1 .pic2").addClass("active");

});

$("#collection1 .mini_img3").mouseenter(function(){

  $("#collection1 .pic").removeClass("active");
  $("#collection1 .pic3").addClass("active");

});

/* 콜렉션 2 */
$("#collection2 .mini_img4").mouseenter(function(){

  $("#collection2 .pic").removeClass("active");
  $("#collection2 .pic4").addClass("active");

});

$("#collection2 .mini_img5").mouseenter(function(){

  $("#collection2 .pic").removeClass("active");
  $("#collection2 .pic5").addClass("active");

});

$("#collection2 .mini_img6").mouseenter(function(){

  $("#collection2 .pic").removeClass("active");
  $("#collection2 .pic6").addClass("active");

});
