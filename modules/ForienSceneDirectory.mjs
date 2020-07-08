export default class ForienSceneDirectory extends SceneDirectory {

  /** @override */
  _onDragStart(event) {
    let li = event.currentTarget.closest(".directory-item");
    const dragData = {type: this.constructor.entity, id: li.dataset.entityId};

    if (event.ctrlKey === true) {
      dragData.type = "SceneOpen";
    } else if (event.altKey === true) {
      dragData.type = "SceneActivate";
    } else {
      super._onDragStart(event);
      return;
    }

    event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
    this._dragType = dragData.type;
  }
}