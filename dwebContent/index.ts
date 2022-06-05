
import DwebContent from "./index.vue";
DwebContent.install = (app:any)=> {
  app.component(DwebContent.name, DwebContent);
};
export default DwebContent