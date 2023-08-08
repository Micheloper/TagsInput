import { defineStore } from "pinia";
import { gsap } from "gsap";

export default defineStore("tags", {
  state: () => ({
    tagsValue: "",
    tagsList: [],
  }),

  actions: {
    handleSubmit(tagValue, tagList) {
      if (tagValue.value !== "") {
        const exist = tagList.value.some((item) => item === tagValue.value);
        if (!exist) {
          tagList.value.push(tagValue.value);
          tagValue.value = "";
        }
      }
    },
    handleDelete(tag, tagList) {
      return (tagList.value = tagList.value.filter((item) => item !== tag));
    },
  },
});
