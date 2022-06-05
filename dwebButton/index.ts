
import DwebButton from "./index.vue";
DwebButton.install = (app:any)=> {
  app.component(DwebButton.name, DwebButton);
};
export default DwebButton