<template>
  <div
    class="jumbotron jumbotron-fluid d-flex align-items-center"
    :style="baiTotoBanner"
  >
    <div class="container text-center text-light" id="jumbo-container">
      <h1 class="display-3 d-none d-sm-block">Welcome to BaiToto</h1>
      <h1 class="display-4 d-sm-none">Welcome to BaiToto</h1>
      <p class="lead">
        Shenanigans of 2 doggos
      </p>
      <a
        class="btn btn-outline-warning"
        href="https://www.youtube.com/channel/UCcGH-O615RdYmFY7_R7CK_A"
        target="_blank"
      >
        Visit our YouTube channel
      </a>
      <br />
      <router-link to="/flip-game" class="btn btn-warning mt-1">
        Play our game!
      </router-link>
    </div>
  </div>

  <div class="container">
    <!-- description row -->
    <div class="row">
      <div class="col-sm-12">
        <h3>What is a BaiToto?</h3>
        <p>
          Good question! It is the ultimate form of happiness. Imagine getting
          drunk on a bottle of Bailey and winning a million dollars in Toto.
          That feeling is the BaiToto feeling.
        </p>
        <p>
          Oh but wait! It is also the combination of the names Bailey and Toto.
        </p>
      </div>
    </div>

    <!-- cards row -->
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <img class="card-img-top" src="../assets/cardbailey.png" />
          <div class="card-body">
            <h4 class="card-title">Bailey</h4>
            <p class="card-text">Date of Birth: Unknown</p>
            <p class="card-text font-italic">
              "They know me as Robin Hood."
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <img class="card-img-top" src="../assets/cardtoto.png" />
          <div class="card-body">
            <h4 class="card-title">Toto</h4>
            <p class="card-text">Date of Birth: Unknown</p>
            <p class="card-text font-italic">
              "They know me as Red Riding Hood"
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- END OF ROWS -->
  </div>

  <div style="margin-top: 100px;"></div>
</template>

<script>
export default {
  computed: {
    baiTotoBanner() {
      // Generate random number between 1 and 3
      let randNum = Math.floor(Math.random() * 3) + 1;

      if (randNum == 1) {
        return {
          background: `url(${require("@/assets/baitotobanner.png")})`,
          "background-size": "cover",
          "background-position": "center",
          "min-height": "31rem",
        };
      } else if (randNum == 2) {
        return {
          background: `url(${require("@/assets/landscapebailey.png")})`,
          "background-size": "cover",
          "background-position": "center",
          "min-height": "31rem",
        };
      } else {
        return {
          background: `url(${require("@/assets/landscapetoto.png")})`,
          "background-size": "cover",
          "background-position": "center",
          "min-height": "31rem",
        };
      }
    },
  },
};
</script>

<style scoped>
/* .jumbotron {
  background: url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-size: cover;
  background-position: center;
  min-height: 31rem;
} */
#jumbo-container {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
}
</style>
