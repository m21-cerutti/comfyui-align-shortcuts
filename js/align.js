import { app } from "../../scripts/app.js";
import { baseNameExtension, Log } from "./utils.js";

app.registerExtension({
  name: baseNameExtension + ".Shortcuts",
  // Register commands
  commands: [
    {
      id: "allignLeft",
      label: "Align nodes left edge",
      function: () => {
        Log("allignLeft command.");
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        AlignNodes(nodes, "left");
      },
    }
  ],
  // Default keybindings
  keybindings: [
    {
      combo: { key: "ArrowLeft", ctrl: true },
      commandId: "allignLeft"
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
