let ForienSceneNavigator = {};

Hooks.on("ready", function () {
  console.log('ready');
  ForienSceneNavigator.SceneNavBar.generateBar();
});
