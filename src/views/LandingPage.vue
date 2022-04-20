<template>
  <div class="flex-containerDash" style="height: 94vh">
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

    <div class="flex-containerTopDash">
      <div class="flex-containerTopDashDiv">1</div>

      <div class="flex-containerTopDashDiv">>1</div>
      <div class="flex-containerTopDashDiv">>1</div>
      <div class="flex-containerTopDashDiv">>1</div>
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
export default {};
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

.flex-containerTopDashDiv {
  width: 30%;
  margin: 1%;
  padding: 1%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
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
  margin-top: 2%;
  margin-bottom: 5%;
}
</style>