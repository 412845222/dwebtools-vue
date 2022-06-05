
import DwebTopMenu from "./index.vue";
DwebTopMenu.install = (app:any)=> {
  app.component(DwebTopMenu.name, DwebTopMenu);
};
export default DwebTopMenu