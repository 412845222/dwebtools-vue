
import DwebDragBar from "./index.vue";
DwebDragBar.install = (app:any)=> {
  app.component(DwebDragBar.name, DwebDragBar);
};
export default DwebDragBar