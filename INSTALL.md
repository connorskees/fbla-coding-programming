# Installation

Prebuilt binaries have been provided for Windows. Due to issues with cross compilation from Windows to Mac (specifically how code signing is handled), Mac users will have to [build from source](#linux-or-mac).

When building from source, this tutorial expects an intermediate level of knowledge.

- [Installation](#installation)
  - [Windows](#windows)
    - [Windows 10 with WSL](#windows-10-with-wsl)
    - [Windows 7, 8 and 10 (without WSL)](#windows-7-8-and-10-without-wsl)
  - [Linux or Mac](#linux-or-mac)

## Windows

### Windows 10 with WSL

1. You can install Nodejs and NPM very quickly if it is not already installed:

    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
    nvm install node
    nvm use node
    ```

    *Note: you may have to restart your terminal after curling to have changes take effect.*

2. Untar source

    ```bash
    tar xvzf source-linux-1.0.0.tar.gz
    ```

3. `cd` into source

    ```bash
    cd source-linux-1.0.0
    ```

4. Install npm dependencies (this may take some time)

    ```bash
    npm install
    ```

5. Build

    ```bash
    npm run electron-pack
    ```

    At this point you may choose to switch to your usual Windows shell by typing `exit`. The next 2 instructions are not shell agnostic (though you will have to remove the `./` in step 7 before running if you are on Windows).

6. `cd` into dist

    ```bash
    cd dist
    ```

7. Run

    ```bash
    ./fbla-coding-programming Setup 1.0.0.exe
    ```

### Windows 7, 8 and 10 (without WSL)

1. You will need to have both Nodejs and NPM installed in order to build. The Windows installer can be found [here](https://nodejs.org/en/download/). The MSI file will be an installer that should handle everything for you. If you choose the zip installation, you will have to unzip and edit your PATH environment variable yourself. To determine what architecture you should download for, please visit [this link](https://support.microsoft.com/en-us/help/15056/windows-32-64-bit-faq); you will have to click under "How can I tell if my computer is running a 32-bit or a 64-bit version of Windows?"

2. Unzip the archive downloaded from the FBLA dropbox

3. Open the command line and `cd` into the unzipped folder (you will know you are in the correct directory if you are able to see a directory called `src` after running `dir`). This will probably be in `%USERPROFILE%/Downloads/win-*` (the `*` is a glob and will automatically be expanded by your shell).

4. Install npm dependencies through the command line (this may take some time) by typing

    ```bash
    npm install
    ```

5. Build the executable by typing

    ```bash
    npm run electron-pack
    ```

6. Move into the `dist` directory by typing

    ```bash
    cd dist
    ```

7. Run

    ```bash
    fbla-coding-programming
    ```

## Linux or Mac

1. You can install Nodejs and NPM very quickly if it is not already installed:

    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
    nvm install node
    nvm use node
    ```

    Note: you may have to restart your terminal after curling to have changes take effect.

2. Untar source

    ```bash
    tar xvzf source-linux-1.0.0.tar.gz
    ```

3. `cd` into source

    ```bash
    cd source-linux-1.0.0
    ```

4. Install npm dependencies (this may take some time)

    ```bash
    npm install
    ```

5. Build

    ```bash
    npm run electron-pack
    ```

6. `cd` into dist

    ```bash
    cd dist
    ```

7. Run through either the command line or by typing (the glob may not be able to find the correct file)

    ```bash
    ./fbla-coding-programming*
    ```
