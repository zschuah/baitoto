<template>
  <div class="container">
    <!-- description row -->
    <div class="row text-center my-3">
      <div class="col">
        <h1 class="d-none d-sm-block">Let's win some Toto!</h1>
        <h3 class="d-sm-none">Let's win some Toto!</h3>
        <p class="mb-0">
          Find Toto among all the Baileys. Can you be the ultimate
          <span class="text-success font-weight-bold">Toto Jedi Master</span>?
        </p>
        <!-- <p class="bg-danger text-white my-0">
          For now, alcohol=Bailey, salmon=Toto. These images are to be replaced!
        </p> -->
        <h3 class="mb-0">Score: {{ score }}</h3>
        <div
          class="badge"
          :class="{
            'badge-success': scoreChange > 0,
            'badge-danger': scoreChange <= 0,
          }"
        >
          {{ scoreChange }}
        </div>

        <p class="my-0">{{ totoRank }}</p>
        <p v-if="score >= 100" class="my-0" id="congratulations">
          Congratulations! You have attained the highest rank.
        </p>
      </div>
    </div>

    <!-- game row -->
    <div id="game-row" class="row d-flex justify-content-center">
      <div class="scene" v-for="baiToto in baiTotoFinal" :key="baiToto.id">
        <div
          class="card"
          :class="{ 'is-flipped': baiToto.isShown }"
          @click="flipBaiToto(baiToto)"
        >
          <div class="card__face card__face--front d-flex align-items-center">
            <img class="img-fluid" :src="baiToto.imgPath" alt="corrupted :(" />
            <!-- <div class="card-img-overlay">
              <span class="bg-light">{{ baiToto.id }}</span>
            </div> -->
          </div>
          <div
            class="card__face card__face--back"
            :style="{ background: baiToto.isToto ? 'green' : 'red' }"
          >
            <div v-if="baiToto.isToto">
              <h3 class="d-none d-md-block">Toto is here! :D</h3>
              <p class="d-none d-md-block">(Click on any square to proceed)</p>
              <p class="d-md-none my-icon">&#10003;</p>
            </div>
            <div v-else>
              <h3 class="d-none d-md-block">Sorry, this is Bailey :(</h3>
              <p class="d-md-none my-icon">&#10008;</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile text row -->
    <div class="row text-center d-sm-none">
      <div class="col">
        <p v-if="!isNewGame">Click on any square to proceed</p>
      </div>
    </div>

    <!-- END OF ROWS -->
  </div>
  <div style="margin-top: 100px;"></div>
</template>

<script>
export default {
  data() {
    return {
      baiTotoNum: [],
      baiTotoFinal: [],
      baiTotoList: [
        {
          id: 101,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey01.png"),
        },
        {
          id: 102,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey02.png"),
        },
        {
          id: 103,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey03.png"),
        },
        {
          id: 104,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey04.png"),
        },
        {
          id: 105,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey05.png"),
        },
        {
          id: 106,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey06.png"),
        },
        {
          id: 107,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey07.png"),
        },
        {
          id: 108,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey08.png"),
        },
        {
          id: 109,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey09.png"),
        },
        {
          id: 110,
          isShown: false,
          isToto: false,
          imgPath: require("@/assets/bailey_10/Bailey10.png"),
        },
        {
          id: 111,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto01.png"),
        },
        {
          id: 112,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto02.png"),
        },
        {
          id: 113,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto03.png"),
        },
        {
          id: 114,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto04.png"),
        },
        {
          id: 115,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto05.png"),
        },
        {
          id: 116,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto06.png"),
        },
        {
          id: 117,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto07.png"),
        },
        {
          id: 118,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto08.png"),
        },
        {
          id: 119,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto09.png"),
        },
        {
          id: 120,
          isShown: false,
          isToto: true,
          imgPath: require("@/assets/toto_10/Toto10.png"),
        },
      ],
      baiTotoPlaceholderList: [
        {
          id: 101,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/2909085/pexels-photo-2909085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 102,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/3693309/pexels-photo-3693309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 103,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/584276/pexels-photo-584276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 104,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/5624664/pexels-photo-5624664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 105,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/4936427/pexels-photo-4936427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 106,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/5747473/pexels-photo-5747473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 107,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/5713745/pexels-photo-5713745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 108,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/5466741/pexels-photo-5466741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 109,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/5238390/pexels-photo-5238390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 110,
          isShown: false,
          isToto: false,
          imgPath:
            "https://images.pexels.com/photos/5125163/pexels-photo-5125163.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 111,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/836850/pexels-photo-836850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 112,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 113,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 114,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/41967/appetizer-canape-canapes-cheese-41967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 115,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/6046747/pexels-photo-6046747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 116,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/676560/pexels-photo-676560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 117,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 118,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 119,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 120,
          isShown: false,
          isToto: true,
          imgPath:
            "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
      score: 0,
      scoreChange: 0,
      isNewGame: true,
    };
  },
  methods: {
    flipBaiToto(baiToto) {
      if (this.isNewGame) {
        baiToto.isShown = !baiToto.isShown;

        if (!baiToto.isToto) {
          // if wrong answer is picked, find the corret one
          const bt = this.baiTotoFinal.find((el) => el.isToto);
          // flip the correct one open
          bt.isShown = true;
          this.score -= 2;
          this.scoreChange = -2;
        } else {
          // if correct answer is picked
          this.score += 5;
          this.scoreChange = 5;
        }
        this.isNewGame = false;
      } else {
        // if this is not a new game
        this.generateNewGame();
      }
    },
    generateRandBetween(min, max) {
      let num = Math.floor(Math.random() * (max - min + 1) + min);
      return num;
    },
    generateNewGame() {
      this.isNewGame = true;
      this.hideAnswers();
      this.baiTotoFinal = [];
      this.baiTotoNum = [];

      // Getting 8 numbers for Bailey
      while (this.baiTotoNum.length < 8) {
        let newNum = this.generateRandBetween(101, 110);
        if (!this.baiTotoNum.includes(newNum)) {
          this.baiTotoNum.push(newNum);
        }
      }

      // Getting 1 number for Toto
      let singleNum = this.generateRandBetween(111, 120);
      this.baiTotoNum.push(singleNum);

      // simple algorithm to shuffle elements in array
      this.baiTotoNum.sort(() => 0.5 - Math.random());

      for (let num of this.baiTotoNum) {
        let found = this.baiTotoList.find((el) => el.id == num);
        this.baiTotoFinal.push(found);
      }
      // console.log(this.baiTotoFinal);
    },
    hideAnswers() {
      for (let baiToto of this.baiTotoFinal) {
        baiToto.isShown = false;
      }
    },
  },
  computed: {
    totoRank() {
      if (this.score < 0) {
        return "Toto Noob";
      } else if (this.score < 10) {
        return "Toto Beginner";
      } else if (this.score < 30) {
        return "Toto Warrior";
      } else if (this.score < 100) {
        return "Toto Knight";
      } else {
        return "Toto Jedi Master";
      }
    },
  },
  mounted() {
    this.generateNewGame();
  },
};
</script>

<style scoped>
#congratulations {
  color: green;
  font-size: 2rem;
  font-weight: bold;
}

#game-row {
  border: 5px solid orange;
  max-width: 50rem;
  margin: auto;
}

.scene {
  width: 200px;
  height: 200px;
  perspective: 600px;
  cursor: pointer;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}
.card__face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.card__face--front {
  background: orange;
}
.card__face--back {
  /* background: blue; */
  transform: rotateY(180deg);
  color: white;
  padding: 1rem;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

/* Small devices (landscape phones)*/
@media (max-width: 767px) {
  #congratulations {
    font-size: 1.2rem;
  }
  #game-row {
    max-width: 20rem;
  }
  .scene {
    width: 90px;
    height: 90px;
  }
  .card__face--back {
    display: flex;
    justify-content: center;
  }
  .my-icon {
    font-size: 2rem;
    color: white;
  }
}
</style>
