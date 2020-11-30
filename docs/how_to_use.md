---
id: how_to_use
title: How to use?
---

import useBaseUrl from "@docusaurus/useBaseUrl";

:::caution

BEFORE YOU BEGIN: We assume you have been understand intermediate skill of JavaScript. If not, please [learn from basic](https://javascript.info/) first.

:::

When developing web app with FIWL, we need to maintain these 3 files:

1. `main.fiwl` :<br/> Your app's first entrance. Another stages (or pages in HTML term) will be represented by `*.fiwl`.
2. `style.varl` :<br/> Change default appearance of widgets. It's optional, but really useful if you have to keep text size and color in tone.
3. `manifest.json` :<br/> Inform overall app information. Including app name, app description, metadata for SEO, custom first entrance, custom resource directory, and more.

## Understanding `main.fiwl`

<object type="image/svg+xml" data={useBaseUrl("img/docs/intro/how_to_use-1.svg")} />

Detail explanation for each highlight color:

- **White:** Stage Parameter<br/> This is the place where you put stage (or page in HTML term) information including title and description.
- **Pink:** Layout<br/> This is where you put and arrange available widgets. The topmost widget is called _Root Layout_ and it must extends `Layout` class. Widgets inside a layout are called **contents**. Every Layout is responsible for arranging its contents. Do not confuse **content** with **container**, we will discuss this on [guide section](/docs/guide/stage).
- **Green:** Script / Event tags<br/> When you need to run script, use `<script>...</script>` or `<event on="...">...</event>`. Keep in mind that **script** will be executed right after `.fiwl` file parsed whereas **event** executed on specified condition as example "ready" and "draw". Further information on [guide section](/docs/guide/script_event).

:::caution

All attributes are **case-sensitive**. Special for Layout and its contents, their tag name is also **case-sensitive**

:::

## Running the App

To run the app, we need to simulate web server. You could use any web server including node http-server, apache, and nginx. For now, let's use the easiest way (node http-server).

1. **Make sure you are currently at correct directory**<br/> If you follow from beginning, you are now at `fiwl-quickstart` directory and safe to jump to the next step. Otherwise, locate to the cloned repository directory [using "cd" command](https://www.youtube.com/watch?v=FTTr2bjI2UM).
2. **Install required programs**<br/> Enter commands below on bash terminal:
   ```bash
   sudo apt update
   sudo apt install npm
   sudo npm install -g http-server
   ```
3. **Start http-server**<br/> You have to run command as below everytime you resume developing FIWL app:
   ```
   http-server . -p 8080
   ```
   To stop http-server, hit **CTRL+C** while on terminal. Run command above to start http-server again.
4. **Open your browser**<br/> When the http-server is ready, enter link below to your browser's URL box:
   ```
   http://localhost:8080/
   ```
