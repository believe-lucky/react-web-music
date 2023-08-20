import { L2Dwidget } from "live2d-widget";
// <!--小帅哥： https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json-->
// <!--萌娘：https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json-->
// <!--小可爱（女）：https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json-->
// <!--小可爱（男）：https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json-->
// <!--初音：https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json-->
L2Dwidget.init({
  model: {
    jsonPath:
      "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
    scale: 1,
  },
  display: {
    position: "right",
    width: 260,
    height: 360,
    hOffset: 5,
    vOffset: -12,
  },
  mobile: { show: true, scale: 0.5 },
  react: { opacityDefault: 0.8, opacityOnHover: 0.1 },
  dialog: {
    enable: true,
    script: {
      //每20s，显示一言（调用一言Api返回的句子）
      "every idle 20s": "$hitokoto$",
      //触摸到class='star'对象
      "hover .star": "星星在天上而你在我心里 (*/ω＼*)",
      //触摸到身体
      "tap body": "哎呀！别碰我！",
      "tap face": "人家正在听音乐哦--前端妹子",
    },
  },
});
