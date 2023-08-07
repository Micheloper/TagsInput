<template>
  <div class="inputTag">
    <div class="tags">
      <div class="tag" v-for="tag in tagList" :key="tag">
        {{ tag }}
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/stickers/100/x.png"
          alt="x"
          @click="onDelete(tag)"
        />
      </div>
    </div>
    <form class="form" @submit.prevent="onSubmit">
      <input
        type="text"
        v-model="tagValue"
        placeholder="Escriba una Tag"
        required
      />
      <label class="label"></label>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useTagsStore from "../store/tags";

const { tagsValue, tagsList, handleSubmit, handleDelete } = useTagsStore();

const tagList = ref(tagsList);
const tagValue = ref(tagsValue);

const onSubmit = () => handleSubmit(tagValue, tagList);
const onDelete = (tag) => handleDelete(tag, tagList);
</script>

<style scoped>
.inputTag {
  height: 100vh;
  display: flex;
  background-color: rgb(0, 0, 0);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  color: white;
}
.tag {
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 1px solid rgb(255, 255, 255);
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
  color: #ffffff;
  border: none;
  outline: 0px;
  font-size: 40px;
}
.form .label {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #ffffff;
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
