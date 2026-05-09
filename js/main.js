import { app } from "../../scripts/app.js";
import { AlignNodes } from "./utils.js";

app.registerExtension({
  name: "Comfy.AlignShortcuts",
  // Register commands
  commands: [
    {
      id: "allignLeft",
      label: "Align nodes left edge",
      function: () => {
        const nodes = app.canvas.selected_nodes;
        // const groups = app.canvas.selected_group;
        AlignNodes(nodes, "left")
      },
    }
  ],
  // Default keybindings
  keybindings: [
    {
      combo: { key: "ArrowLeft", ctrl: true },
      commandId: "allignLeft"
    }
  ]
});