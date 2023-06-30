<script>
import { gsap } from "gsap";

export default {
  name: "InputTag",
  data() {
    return {
      currentValue: "",
      tags: [], //SE CREA LAS ETIQUETAS ACA Y SE RENDERIZA EN "tags"
    };
  },
  methods: {
    //CUANDO PRECIONADO ENTER INGRESAR EN CURRENTVALUE A LA LISTA DE TAGS
    handleSubmit() {
      if (this.currentValue !== "") {
        // Const para no se repitir tags
        const exist = this.tags.some((item) => item === this.currentValue);
        if (!exist) {
          this.animacionUp();
          this.tags.push(this.currentValue);
          this.currentValue = "";
        }
      }
    },
    deleteTag(tag) {
      this.tags = this.tags.filter((item) => item !== tag);
      this.animacionDown();
    },
    animacionUp() {
      gsap.fromTo(
        ".tag",
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 }
      );
    },
    animacionDown() {
      gsap.fromTo(
        ".tag",
        { opacity: 0, y: 0 },
        { opacity: 1, y: -20, duration: 1 }
      );
    },
  },
};
</script>

<template>
  <div class="inputTag">
    <div class="tags">
      <div class="tag" v-for="tag in tags" :key="tag.id">
        {{ tag }}
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/stickers/100/x.png"
          alt="x"
          @click="deleteTag(tag)"
        />
      </div>
    </div>
    <form class="form" @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="currentValue"
        placeholder="Escriba una Tag"
        required
      />
      <label class="label"> </label>
    </form>
  </div>
</template>

<style scoped>
.inputTag {
  height: 100vh;
  display: flex;
  background-color: aquamarine;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}
.tag {
  font-size: 50px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
}
.tag img {
  cursor: pointer;
}
.form {
  width: 100%;
  max-width: 80%;
  position: relative;
  overflow: hidden;
}

.form input {
  width: 100%;
  height: 100%;
  background: none;
  color: #000000;
  border: none;
  outline: 0px;
  font-size: 70px;
}
.form .label {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #000000;
}
.form .label:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #b62ece;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.form input:focus + .label:after,
.form input:valid + .label:after {
  transform: translateX(0%);
}
@media only screen and (min-width: 320px) and (max-width: 768px) {
  .form {
    width: 85%;
  }
}
</style>
