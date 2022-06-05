
import DwebSwiper from "./index.vue";
DwebSwiper.install = (app:any)=> {
  app.component(DwebSwiper.name, DwebSwiper);
};
export default DwebSwiper