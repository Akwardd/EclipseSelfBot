#### Table of contents

- [Requirements](#requirements)

- [Installing](#installing)

- [Running](#running)

- [Getting your user-token](#getting-your-user-token)

- [Credits](#credits)

## Usage
### Pre-Requirements

- `git` ([Windows](https://git-scm.com/download/win) | [Linux](https://git-scm.com/download/linux) | [macOS](https://git-scm.com/download/mac))

- `node` ([Windows](https://nodejs.org/en/download/current/) | [Linux](https://nodejs.org/en/download/package-manager/) | [macOS](https://nodejs.org/en/download/current/))

- `yarn` ([Windows](https://yarnpkg.com/en/docs/install#windows-tab) | [Linux](https://yarnpkg.com/en/docs/install#linux-tab) | [macOS](https://yarnpkg.com/en/docs/install#mac-tab))

### Installing

1- Create a folder then Hold + SHIFT + Right Click then open "Command prompt here",
2- Type in "git clone https://github.com/Akwardd/EclipseSelfBot" (without the quotes)
3- cd into the folder and then type "yarn install" then "npm install"
(f you dont know how to cd into a folder then just go into the bot folder containing "package.json")
4- Type "yarn start" to start the bot 
**Note:** The first time you start the bot you will enter the setup wizard. It takes just a few seconds to enter the needed information, and it sets up the bot for you.


### Updating 
minor updates can be acquired by running `//exec git pull` in Discord to run the `git pull` command on your computer. Some updates, however, change too much to be 
updated like that, and instead you must do the following commands in your terminal/command prompt:

```bash

# Go to the EclipseSelfBot folder: 
cd path/to/SynSelfBot
# Pull in any changes

git pull

# Install new dependencies:

yarn install
```

### Running
```

# Go to the EclipseSelfBot folder with: 
cd path/to/SynSelfBot 
# Start the bot up with: 
yarn start
```

### Getting user-token 
1- Hit `CTRL+SHIFT+I` (`CMD+ALT+I` on macOS) to bring up the Developers Console
> If you already see the `Application` tab, you can skip this step.
2. At the top, click on the arrow pointing to the right

3. Click `Application`

4. Go to `Local Storage` under the `Storage` section

5. Click on `https://discordapp.com`

6. At the bottom of the list, the last key should be `token`

7. Copy the value on the right side (omitting the quotes)

## 
This bot is a modified version of SharpBot made by Rayzr
