
import DwebLeftmenu from "./index.vue";
DwebLeftmenu.install = (app:any)=> {
  app.component(DwebLeftmenu.name, DwebLeftmenu);
};
export default DwebLeftmenu