import VersionCheck from "./versioning/version-check.mjs";
import renderWelcomeScreen from "./versioning/welcome-screen.mjs";
import constants from "./constants.mjs";
import SceneLinkHandler from "./scene-link-handler.mjs";

Hooks.once('init', () => {
  game.settings.register(constants.moduleName, "playersWelcomeScreen", {
    name: "ForienSceneNavigator.Settings.playersWelcomeScreen.Enable",
    hint: "ForienSceneNavigator.Settings.playersWelcomeScreen.EnableHint",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  SceneLinkHandler.registerCustomEntities();

  Hooks.callAll("ForienSceneNavigator.afterInit");
});

Hooks.once('setup', () => {

  Hooks.callAll("ForienSceneNavigator.afterSetup");
});

Hooks.once("ready", () => {
  if (VersionCheck.check(constants.moduleName)) {
    if (game.user.isGM || game.settings.get(constants.moduleName, 'playersWelcomeScreen')) {
      renderWelcomeScreen();
    }
  }

  SceneLinkHandler.registerCustomEntityClicks();

  Hooks.callAll("ForienSceneNavigator.afterReady");
});