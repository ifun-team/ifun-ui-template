const Components = [];
// common components
export default {
  install(app, options) {
    // 注册全局组件
    // app.component()
    Components.map((component) => app.component(component.name, component));
  },
};
