import { app } from "../../scripts/app.js";
import { Log } from "./utils.js";

app.registerExtension({
  name: "Comfy.Align.Shortcuts",
  // Register commands
  commands: [
    {
      id: "allignTop",
      label: "Align nodes bottom edge",
      function: () => {
        Log("allignTop command.");
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        AlignNodes(nodes, "left");
      },
      {
      id: "allignBottom",
      label: "Align nodes top edge",
      function: () => {
        Log("allignBottom command.");
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        AlignNodes(nodes, "left");
      },
      {
      id: "allignLeft",
      label: "Align nodes left edge",
      function: () => {
        Log("allignLeft command.");
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        AlignNodes(nodes, "left");
      },
      {
      id: "allignRight",
      label: "Align nodes right edge",
      function: () => {
        Log("allignRight command.");
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        AlignNodes(nodes, "left");
      },
    }
  ],
  // Default keybindings
  keybindings: [
    {
      combo: { key: "ArrowUp", alt: true },
      commandId: "allignTop"
    },
    {
      combo: { key: "ArrowDown", alt: true },
      commandId: "allignBottom"
    },
    {
      combo: { key: "ArrowLeft", alt: true },
      commandId: "allignLeft"
    },{
      combo: { key: "ArrowRight", alt: true },
      commandId: "allignRight"
    }
  ],
  async setup() {
    Log("installation complete.");
  },
});

function alignNodes(nodes, direction) {
  if (!nodes || Object.keys(nodes).length < 2) {
    return;
  }
  LGraphCanvas.alignNodes(nodes, direction);
  LGraphCanvas.active_canvas.dirty_canvas = true;
}
