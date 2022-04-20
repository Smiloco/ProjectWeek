<template>
  <div class="flex-containerDash">
    <div class="font-header">
      <h1 class="font-header">Welcome to Kodama</h1>
    </div>

    <div class="font-par">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
        varius elit, eget scelerisque ex rutrum a. Vestibulum dictum risus ut
        accumsan dictum. Fusce a dignissim ipsum, ac ullamcorper quam. Sed
        commodo urna mauris, a facilisis turpis sollicitudin quis. Nullam vel
        tortor vel sapien eleifend consequat sed eget tellus. Duis nec tellus
        non lectus feugiat sagittis.
      </p>
    </div>

    <div>
      <p class="subTitle">Top 3 products</p>
    </div>
    <!-- <div class="flex-containerTopDash">
      <div
        class="flex-containerTopDashDiv"
        v-for="item in items"
        :key="item.id"
      >
        <router-link to="/products" class="flex-item">
          <img :src="item.thumbnail_url" alt="" class="grow" />
          <p class="card-text">{{ item.title }}</p>
        </router-link>
      </div>
    </div> -->

    <div class="container d-flex justify-content-center mt-50 mb-50">
      <div class="row">
        <div class="col-md-4 mt-2"  v-for="item in items" :key="item.id">
          <div class="card">
            <div class="card-body">
              <div class="card-img-actions">
                <img
                  :src="item.thumbnail_url"
                  class="card-img img-fluid pic"
                  width="96"
                  height="350"
                  alt=""
                />
              </div>
            </div>
            <div class="card-body bg-light text-center">
              <div class="mb-2">
                <h6 class="font-weight-semibold mb-2">
                  <a href="#" class="text-default mb-2" data-abc="true">{{
                    item.title
                  }}</a>
                </h6>
                <a href="#" class="text-muted" data-abc="true">Planten</a>
              </div>
              <h3 class="mb-0 font-weight-semibold">{{ item.price }}</h3>
              <div>
                <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
                <i class="fa fa-star star"></i> <i class="fa fa-star star"></i>
              </div>
              <div class="text-muted mb-3">34 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <router-link to="/products" class="navbar-brand mr-auto">
        <button type="button" class="btn btn-primary margin">
          GO TO PRODUCTS
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [
        {
          description:
            "Deze veelzijdige plant vind je tegenwoordig namelijk terug in veel woningen. Dat is ook helemaal niet zo gek als je jezelf bedenkt dat de Calathea verkrijgbaar is in verschillende kleurcombinaties. De meest populaire zijn toch wel de groen/gele en de groen/donkerpaarse combinaties.",
          id: 1,
          price: 24.95,
          quantity: 10,
          thumbnail_url:
            "https://fleurenflower.nl/ezoimgfmt/893770.smushcdn.com/2322512/wp-content/uploads/2020/05/Canva-Beautiful-Calathea-plant-in-pot-scaled-600x600.jpg?lossy=1&strip=1&webp=1&ezimgfmt=ng:webp/ngcb2",
          title: "Calathea",
        },
        {
          description:
            "De Lepelplant is een elegante en stijlvolle kamerplant. Dat komt doordat de witte bloemen van deze populaire kamerplant zeer gestyled overkomen maar tegelijkertijd een mooi contrast geven met de donkergroene bladeren.",
          id: 2,
          price: 11.99,
          quantity: 15,
          thumbnail_url:
            "https://fleurenflower.nl/ezoimgfmt/893770.smushcdn.com/2322512/wp-content/uploads/2020/08/Lepelplant-1024x683.png?lossy=1&strip=1&webp=1&ezimgfmt=ng:webp/ngcb2",
          title: "Lepelplant",
        },
        {
          description:
            "De graslelie doet het zeer goed in moderne interieurs. Daarnaast is hij laag in het onderhoud (1x per week water, plek in de halfschaduw) én zijn ze heel makkelijk te stekken.",
          id: 3,
          price: 6.99,
          quantity: 25,
          thumbnail_url:
            "https://fleurenflower.nl/ezoimgfmt/893770.smushcdn.com/2322512/wp-content/uploads/2020/04/Canva-Chlorophytum-in-flowerpot-on-table.-Variegatum-comosum.-Spider-Plant-scaled-600x400.jpg?lossy=1&strip=1&webp=1&ezimgfmt=ng:webp/ngcb2",
          title: "Graslelie",
        },

      ],
    };
  },
};
</script>

<style>
.flex-containerDash {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.flex-containerTopDash {
  width: 98%;
  height: 30vh;
  margin: 1%;
  margin-top: 1%;
  border-radius: 20px;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
}

.grow {
  width: 25vh;
  height: 25vh;
  padding: 15px;
  transition: all 0.2s ease-in-out;
}

.subTitle {
  margin-top: 6rem;
  margin-bottom: 0rem;
  font-size: 250%;
  color: white;
  font-family: "Teko", sans-serif;
}

.flex-containerTopDashDiv {
  width: 20%;
  height: 32vh;
  margin: 1%;
  padding: 1%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
}

.flex-containerTopDashDiv:hover {
  transform: scale(1.1);
}

.flex-item {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 150%;
}

a:hover {
  color: white;
  text-decoration: none;
}

.font-header {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 250%;
  color: white;
  font-family: "Teko", sans-serif;
}

.font-par {
  color: white;
  width: 50%;
}

.margin {
  margin-top: 20%;
  margin-bottom: 10%;
}

body {
  margin: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5385;
  color: #333;
  text-align: left;
}

.mt-50 {
  margin-top: 50px;
}

.mb-50 {
  margin-bottom: 50px;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.1875rem;
}

.card-img-actions {
  position: relative;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
  text-align: center;
}

.card-img {
  width: 350px;
}

.star {
  color: red;
}

.bg-cart {
  background-color: orange;
  color: #fff;
}

.bg-cart:hover {
  color: #fff;
}

.bg-buy {
  background-color: green;
  color: #fff;
  padding-right: 29px;
}

.bg-buy:hover {
  color: #fff;
}

a {
  text-decoration: none !important;
}

.pic {
  border-radius: 15%;
  width: 30vh;
  height: 30vh;
}
</style>