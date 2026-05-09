# ComfyUI-Align Shortcuts

Shortcuts designed to help align nodes in a comfyui editor. Based on <https://github.com/coolzilj/ComfyUI-LJNodes>.

- [Description](#description)
- [Dependencies](#dependencies)
- [Installation by ComfyUI Manager (Recommended)](#installation-by-comfyui-manager-recommended)
- [Installation by Git Clone / Symlink Setup (Advanced/Manual)](#installation-by-git-clone--symlink-setup-advancedmanual)
- [Usage](#usage)
- [Changing Keybindings](#changing-keybindings)
- [Contribution Guide](#contribution-guide)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Description

This custom node suite provides intuitive shortcuts to align groups of nodes within the ComfyUI editor. 

It addres limitations found in previous alignment tools, such as those mentioned in ComfyUI-Align not supporting Node 2.0 (<https://github.com/Moooonet/ComfyUI-Align/issues/14>), and updating abandoned project ComfyUI-LJNodes <https://github.com/coolzilj/ComfyUI-LJNodes>.


## Dependencies

- ComfyUI must be installed and running (see [requirements](https://docs.comfy.org/installation/system_requirements)).
Keep in mind where is your path for models, we will use `$COMFYUI_ROOT` in documentation.

## Installation by ComfyUI Manager (Recommended)

This is the easiest method:

1. Open ComfyUI and go to `Manager` > `Install Custom Nodes`.
2. Search for `Align nodes` in the search bar.
3. Click `Install`.

## Installation by Git Clone / Symlink Setup (Advanced/Manual)

If you want to use directly the sources, first clone the repository with:

``` bash
git clone https://github.com/m21-cerutti/ComfyUI-Align-Shortcuts.git
```

For a smooth experience, use then a symbolic link to your local repository inside your ComfyUI installation `$COMFYUI_ROOT`.

1. Navigate to the target `custom_nodes` folder inside your main ComfyUI installation:

    ```bash
    cd $COMFYUI_ROOT/custom_nodes 
    ```

2. Create the symbolic link, pointing from the shortcut location to the absolute path of this project's source code (replace `$PROJECT_SOURCE_PATH`):

    ```bash
    ln -s $PROJECT_SOURCE_PATH custom_nodes_shortcut
    ```

## Usage

This extension allows users to select multiple nodes and instantly align them along an axis using keyboard shortcuts.

**Workflow:**

1. Select the desired group of nodes by clicking and dragging over them, or holding `Shift` + click to select individual nodes.
2. Use the configured shortcut keys:
    - `Ctrl + Up`: Aligns all selected nodes vertically by their top edge.
        ![Vertical alignment before](assets/screenshot_before_vertical.png)
        ![Vertical alignment after](assets/screenshot_after_vertical.png)
    - `Ctrl + Down`: Aligns all selected nodes vertically by their bottom edge.
        ![Vertical alignment before](assets/screenshot_before_vertical.png)
        ![Vertical alignment after](assets/screenshot_after_vertical.png)
    - `Ctrl + Left`: Aligns all selected nodes horizontally by their left edge.
        ![Horizontal alignment before](assets/screenshot_before_horizontal.png)
        ![Horizontal alignment after](assets/screenshot_after_horizontal.png)
    - `Ctrl + Right`: Aligns all selected nodes horizontally by their right edge.
        ![Horizontal alignment before](assets/screenshot_before_horizontal.png)
        ![Horizontal alignment after](assets/screenshot_after_horizontal.png)

## Changing Keybindings

Keybinding customization is handled by ComfyUI's settings. To change the shortcut used for node alignment:

1. Access the ComfyUI Interface Settings and search for "Align node".
2. Modify the existing keymap entries assigned to our shortcuts (`Ctrl + Up/Down/Left/Right`).

For full documentation, please see: <https://docs.comfy.org/interface/shortcuts>

## Contribution Guide

This project welcomes contributions! If you find a bug or want to add a feature, please instructions inside [CONTRIBUTING.md](CONTRIBUTING.md)

## Authors

- Marc CERUTTI
- Initial author [@SongZi](https://x.com/Songzi39590361)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Others utilities tools for inspiration and useful in ComfyUI journey :

- <https://github.com/Moooonet/ComfyUI-Align>
- <https://github.com/ty0x2333/ComfyUI-Dev-Utils>
- <https://github.com/StableLlama/ComfyUI-basic_data_handling/tree/main>
