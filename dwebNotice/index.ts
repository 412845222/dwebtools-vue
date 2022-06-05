
import DwebNotice from "./index.vue";
DwebNotice.install = (app:any)=> {
  app.component(DwebNotice.name, DwebNotice);
};
export default DwebNotice