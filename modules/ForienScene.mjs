class ForienScene extends Scene {
  static get collection() {
    return ForienScenes;
  }
}

class ForienScenes extends Scenes {
  static get entities() {
    return game.scenes.entities;
  }

  static get instance() {
    return this;
  }

  static get(id) {
    let entity = game.scenes.get(id);
    let newEntityData = duplicate(entity);
    newEntityData.name = this.activity + ": " + newEntityData.name;
    let newEntity = {
      id: entity._id,
      _id: entity._id,
      entity: this.entity,
      name: this.activity + ": " + entity.name,
      data: newEntityData
    };
    newEntity = mergeObject(newEntity, entity);

    return newEntity;
  }
}


export class ForienSceneOpen extends ForienScene {
  static get collection() {
    return ForienScenesOpen;
  }
}

export class ForienScenesOpen extends ForienScenes {
  static entity = 'SceneOpen';
  static activity = 'Open';
}

export class ForienSceneActivate extends ForienScene {
  static get collection() {
    return ForienScenesActivate;
  }
}

export class ForienScenesActivate extends ForienScenes {
  static entity = 'SceneActivate';
  static activity = 'Activate';
}
