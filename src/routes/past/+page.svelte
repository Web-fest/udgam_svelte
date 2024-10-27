<style>
    body {
    background-image:linear-gradient( #477bb1,#11161e,#0b2342,#315674);
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 350px;
    height: 350px;
    border-radius: 20px; /* Rounds the corners */
    border: 5px solid rgba(255, 255, 255, 0.7); /* Default outline */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Subtle shadow */
    transition: 0.5s; /* Smooth transition on hover */
  }

  /* Hover Effect on Swiper Slides */
.swiper .swiper-slide:hover {
    border-width: 5px;
    border-style: ridge;
    border-color: black; 
    /* box-shadow: 0 0 25px rgba(100, 241, 84, 1.8);  */

    
  }

  .title {
    color: black;
    position: absolute;
    top: 20px;
    width: 100%;
    text-align: center;
    z-index: 10;
}
</style>
<body>
    <div class="title">
        <h1>Past Glimpses</h1>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          style="background-image: url('img1.jpg')"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url('img2.jpg')"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url('img3.jpg')"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url('img4.jpg')"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url('img5.jpg')"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url('img6.jpg')"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url('img7.jpg')"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url('img8.jpg')"
        ></div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    speed: 600,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });
    </script>
  </body>