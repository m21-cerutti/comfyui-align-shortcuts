import { app } from "../../scripts/app.js";
import { Log } from "./utils.js";

app.registerExtension({
  name: "Comfy.Align.Shortcuts",
  // Register commands
  commands: [
    {
      id: "allignTop",
      label: "Align nodes top edge",
      function: () => {
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        alignNodes(nodes, "top");
      }
    },
    {
      id: "allignBottom",
      label: "Align nodes bottom edge",
      function: () => {
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        alignNodes(nodes, "bottom");
      }
    },
    {
      id: "allignLeft",
      label: "Align nodes left edge",
      function: () => {
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        alignNodes(nodes, "left");
      }
    },
    {
      id: "allignRight",
      label: "Align nodes right edge",
      function: () => {
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        alignNodes(nodes, "right");
      }
    },
  ],
  // Default keybindings
  keybindings: [
    {
      combo: { key: "5", alt: true },
      commandId: "allignTop",
    },
    {
      combo: { key: "2", alt: true },
      commandId: "allignBottom",
    },
    {
      combo: { key: "1", alt: true },
      commandId: "allignLeft",
    },
    {
      combo: { key: "3", alt: true },
      commandId: "allignRight",
    },
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
