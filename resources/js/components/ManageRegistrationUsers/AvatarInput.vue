<template>
  <div class="relative inline-block overflow-hidden">
    <input
      type="file"
      accept="image/*"
      class="hidden"
      ref="file"
      @change="change"

    />
    <img :src="src" alt="Avatar" class="h-full w-full object-cover" />
    <div
      class="absolute top-0 h-full w-full bg-black bg-opacity-25 flex items-center justify-center"
    >
      <button
        type="button"
        @click="browse()"
        class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200"
      >
        <icon name="camera" class="h-6 w-6"></icon>
      </button>
      <button
        type="button"
        v-if="value"
        @click="remove()"
        class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200"
      >
        <icon name="x" class="h-6 w-6"></icon>
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  props: {
    value: File,
    defaultSrc: String,
  },
  watch: {
    value(file) {
      if (!file) {
        this.src = this.defaultSrc;
        this.$refs.file.value = "";
      } else {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.src = e.target.result;
          this.$emit("getAva",  this.src);
        };
      }
    },
  },
  data() {
    return {
      src: this.defaultSrc,
    };
  },
  methods: {
    browse() {
      this.$refs.file.click();
    },
    remove() {
      this.$emit("input", null);
    },
    change(e) {
      this.$emit("input", e.target.files[0]);
    },



  },
  components: {
    Icon,
  },
};
</script>
