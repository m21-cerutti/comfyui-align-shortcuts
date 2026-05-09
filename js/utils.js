import { app } from "../../scripts/app.js";

export function alignNodes(nodes, direction) {
  if (!nodes || Object.keys(nodes).length < 2) {
    return;
  }
  LGraphCanvas.alignNodes(nodes, direction);
  LGraphCanvas.active_canvas.dirty_canvas = true;
}
