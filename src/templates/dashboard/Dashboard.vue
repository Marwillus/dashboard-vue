<template>
  <div class="dashboard">
    <Menu :setActiveTopic="setActiveTopic" :menuItems="menuItems" />

    <div class="dashboard__content">
      <div class="dashboard__header">
        <h3 class="title">
          {{ loading ? 'loading...' : menuItems[activeTopic].header || menuItems[activeTopic].topic }}
        </h3>

        <!-- <Widget v-if="category === CATEGORIES.HOME" shape="circle" :weatherData="(data || mockData).weather" /> -->
      </div>

      <div :class="'dashboard__grid ' + (loading ? 'is-loading' : '')">
        <!-- <div v-if="category !== CATEGORIES.WEATHER" v-for="(article, index) in (data || mockData).news?.articles"
          :key="'widget-' + index" :class="'dashboard__grid__widget-' + index">
          <Widget v-if="index <= 2" shape="square" :newsData="article" />
        </div> -->
        widget
        <!-- <LineChart v-if="category === CATEGORIES.WEATHER && forecast" width="400" height="300" :data="forecast.forecast.forecastday">
            <XAxis type="category" />
            <YAxis :unit="'°C'" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="day.maxtemp_c" name="max" stroke="#8884d8" :activeDot="{ r: 8 }" />
            <Line type="monotone" dataKey="day.mintemp_c" name="min" stroke="#82ca9d" />
          </LineChart> -->
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import './Dashboard.scss';
// import axios from 'axios';
import { ref, watch } from 'vue';
// import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
// import { newsUrlTop, weatherApiCurrent, weatherApiForecast } from '../../api/endpoints';
// import { NewsData, WeatherDataCurrent, WeatherDataForecast } from '../../api/types';
import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne } from '@icon-park/vue-next';

// import { newsMockData, weatherMockDataCurrent, weatherMockDataForecast } from '../../api/mockdata';
import Menu from '../../components/menu/Menu.vue';
// import Widget from '../../components/widget/Widget';
// import { getLocation, Location } from '../../utils/helper/location';

const menuItems = [
  {
    topic: "home",
    icon: Home,
    header: "Welcome back, Friend",
    bgColor: "#ffb457",
  },
  { topic: "Weather", icon: SunOne, bgColor: "#eeff96" },
  {
    topic: "Business",
    icon: MarketAnalysis,
    bgColor: "#ff96bd",
  },
  {
    topic: "Science",
    icon: Microscope,
    bgColor: "#9999fb",
  },
  {
    topic: "Sports",
    icon: ArchersBow,
    bgColor: "#ffe797",
  },
]


const activeTopic = ref(0);
// const data = ref(null);
// const forecast = weatherMockDataForecast;
const loading = ref(false);
// const category = ref(menuItems[activeTopic.value].topic);

const setActiveTopic = (index: number) => {
  activeTopic.value = index;
};

// const fetchData = async () => {
//   loading.value = true;

//   // GET Category Home Data
//   if (category.value === CATEGORIES.HOME) {
//     try {
//       const newsApi = `${newsUrlTop}?country=${country}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
//       const newsResponse = await axios.get(newsApi);
//       data.value = { weather: data.value?.weather, news: newsResponse.data };

//       const weatherApiOptions = {
//         method: "GET",
//         url: weatherApiCurrent,
//         params: { q: `${location.lat},${location.long}` },
//         headers: {
//           "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
//           "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//         },
//       };
//       const weatherResponse = await axios.request(weatherApiOptions);
//       data.value = { weather: weatherResponse.data, news: data.value?.news };
//     } catch (e) {
//       error.value = e;
//     } finally {
//       loading.value = false;
//     }
//     return;
//   }

//   // GET Category Weather Data
//   if (category.value === CATEGORIES.WEATHER) {
//     try {
//       const weatherApiOptions = {
//         method: "GET",
//         url: weatherApiForecast,
//         params: { q: "Berlin", days: "6" },
//         headers: {
//           "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
//           "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//         },
//       };
//       const response = await axios.request(weatherApiOptions);
//       forecast.value = response.data;
//     } catch (e) {
//       error.value = e;
//     } finally {
//       loading.value = false;
//     }
//     return;
//   }

//   // GET All Other Category Data
//   try {
//     const newsApi = `${newsUrlTop}?category=${category.value}&country=${country}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
//     const response = await axios.get(newsApi);
//     data.value = { weather: data.value?.weather, news: response.data };
//   } catch (e) {
//     error.value = e;
//   } finally {
//     loading.value = false;
//   }
// };

// watch(activeTopic, () => {
//   // fetchData();
// });
</script>
  