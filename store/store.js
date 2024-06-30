import { defineStore } from "pinia";
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  params: {
    key: 'ae4c48ab7cd141b282d151037242906',
  },
});

export const useWeatherStore = defineStore("cities", {
  state: () => ({ city: "", weather: "", degree: "", error: null }),
  actions: {
    async fetchWeather(city) {
        try {
            this.city = city
            const response = await axiosInstance.get('/current.json', {
                params: {
                  q: city,
                },
              });
              this.weather = response.data.current.condition.text;
              this.degree = `Feels like ${response.data.current.feelslike_c}°`;
        } catch (error) {
            this.error = error.message;
        }
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
