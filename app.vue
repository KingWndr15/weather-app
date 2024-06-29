<template>
  <div>
    <h1>Weather App</h1>
    <p>Enter City</p>
    <input type="text" v-model="city">
    <button @click="getWeather">Get Weather</button>

    <p>{{ weatherStore.weather }}</p>
    <p>{{ weatherStore.degree }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWeatherStore } from "@/store/store";

const weatherStore = useWeatherStore();
const city = ref(""); 

const getWeather = async () => {
  await weatherStore.fetchWeather(city.value); 
};

const { fetchWeather } = weatherStore;
</script>
