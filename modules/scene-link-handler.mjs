import ForienSceneDirectory from "./ForienSceneDirectory.mjs";
import {ForienSceneActivate, ForienSceneOpen, ForienScenesActivate, ForienScenesOpen} from "./ForienScene.mjs";

export default class SceneLinkHandler {

  static registerCustomEntities() {
    CONFIG.ui.scenes = ForienSceneDirectory;
    CONST.ENTITY_LINK_TYPES.push("SceneOpen");
    CONST.ENTITY_LINK_TYPES.push("SceneActivate");
    CONFIG["SceneOpen"] = {
      entityClass: ForienSceneOpen,
      collection: ForienScenesOpen,
      sidebarIcon: 'far fa-map',
    };

    CONFIG["SceneActivate"] = {
      entityClass: ForienSceneActivate,
      collection: ForienScenesActivate,
      sidebarIcon: 'fas fa-bullseye',
    };
  }

  static registerCustomEntityClicks() {
    let body = $("body");

    body.on("click", "a.entity-link[data-entity=SceneActivate]", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const a = event.currentTarget;
      let id = a.dataset.id;

      game.scenes.get(id).activate();

      return false;
    });

    body.on("click", "a.entity-link[data-entity=SceneOpen]", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const a = event.currentTarget;
      let id = a.dataset.id;

      game.scenes.get(id).view();

      return false;
    });
  }
}