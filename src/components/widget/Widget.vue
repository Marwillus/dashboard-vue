<template>
    <div :class="'widget widget--' + shape">
      <template v-if="newsData">
        <div v-if="urlToImage" class="widget__image">
          <img :src="urlToImage" :alt="title + ' image'" />
        </div>
        <h4 class="widget__header">{{ title }}</h4>
        <p v-if="description" class="widget__description">{{ description }}</p>
        <div class="widget__button-group">
          <button v-if="content" class="widget__button" @click="openModal">
            Read more <ReadBook />
          </button>
          <button v-if="url" class="widget__button">
            <a :href="url" rel="noopener noreferrer" target="_blank">
              Go to article <ArrowRightUp />
            </a>
          </button>
        </div>
        <dialog ref="modal" class="modal" v-if="content">
          <button class="close" @click="closeModal"><Close /></button>
          <h3>{{ title }}</h3>
          <p>{{ content }}</p>
        </dialog>
      </template>
      <div v-if="weatherData" class="widget__weather-home">
        <span>{{ new Date(weatherData.location.localtime).toLocaleTimeString().slice(0, -3) }}</span>
        <span class="main-temperature">{{ weatherData.current.feelslike_c }} C°</span>
        <span>{{ weatherData.location.region }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import { ArrowRightUp, Close, ReadBook } from '@icon-park/vue-next';
  import { defineComponent, ref } from 'vue';
  import { Article, WeatherDataCurrent } from '../../api/types';
  
  export default defineComponent({
    props: {
      shape: String,
      newsData: Object as () => Article,
      weatherData: Object as () => WeatherDataCurrent
    },
    setup(props) {
      const modal = ref(null);
      const { title, description, url, urlToImage, content } = props.newsData ?? {};
  
      const openModal = () => {
        if (!modal.value) return;
        modal.value.showModal();
      };
  
      const closeModal = () => {
        if (!modal.value) return;
        modal.value.setAttribute("closing", "");
  
        modal.value.addEventListener(
          "animationend",
          () => {
            if (!modal.value) return;
  
            modal.value.removeAttribute("closing");
            modal.value.close();
          },
          { once: true }
        );
      };
  
      return { modal, title, description, url, urlToImage, content, openModal, closeModal, ArrowRightUp, Close, ReadBook };
    },
    components: {
      ArrowRightUp,
      Close,
      ReadBook
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  