import DwebButton from "./dwebButton";
import DwebContent from "./dwebContent";
import DwebDragBar from "./dwebDragBar";
import DwebLeftmenu from "./dwebLeftmenu";
import DwebLoading from "./dwebLoading";
import DwebNotice from "./dwebNotice";
import DwebSwiper from "./dwebSwiper";
import DwebTopMenu from "./dwebTopMenu";

const components = [
  DwebButton,
  DwebContent,
  DwebDragBar,
  DwebLeftmenu,
  DwebLoading,
  DwebNotice,
  DwebSwiper,
  DwebTopMenu
]

const install = ((app) => {
  components.forEach((component) => {
    app.use(component)
  })
})

export default install

export {
  DwebButton,
  DwebContent,
  DwebDragBar,
  DwebLeftmenu,
  DwebLoading,
  DwebNotice,
  DwebSwiper,
  DwebTopMenu
}