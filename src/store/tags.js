import { defineStore } from "pinia";

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
    animationUp() {
      gsap.fromTo(
        ".tag:last-child",
        { opacity: 0, y: -250 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    },
    animationDown() {
      gsap.fromTo(
        ".tag:last-child",
        { opacity: 1 },
        { opacity: 0, y: 250, duration: 0.5, ease: "power2.out" }
      );
    },
  },
});
