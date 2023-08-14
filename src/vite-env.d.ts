/// <reference types="vite/client" />
declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}
declare module "*.module.less" {
  const classes: { [className: string]: string };
  export default classes;
}

declare module "@*";

declare module "live2d-widget";
