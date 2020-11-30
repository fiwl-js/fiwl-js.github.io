---
id: prep_env
title: Preparing Environment
---

We are developing front-end web now. Therefore, project directory is public. All secrets including SSL private key must not be stored in project directory. To organize your project, there are two typical ways for organizing project files:

1. **Simple**<br/> Best for simple app, recommended for beginners.
2. **Structured**<br/> Best for big project with many stages. We use structured method for building production web app.

:::caution

Keep in mind that FIWL currently pre-alpha release. Please do not use this for production until first LTS version announced.

:::

:::note

Going to another stage still in development. When [swap stage mechanism](/docs/dev_checklist/pre_alpha) checked, then going to another stage is possible and this message will be removed.

:::

## Simple Method

Goal of this method to minimalize configuration as possible. Therefore, URL path directly represents `*.fiwl` location and name. As example `http://localhost:8080/another_stage` redirects to `./another_stage.fiwl`. Keep remember that `main.fiwl` is **equals** to HTML's `index.html`. So, `http://localhost:8080/` redirects to `./main.fiwl` and `http://localhost:8080/test/` redirects to `./test/main.fiwl`

Every resources (icons, pictures, fonts, ...) should stored on specified subdirectory at root level. In short, the directory tree will be look like this:

```
my-app-project
 ⎹
 ⎹-manifest.json
 ⎹-style.varl
 ⎹-main.fiwl (First Entry)
 ⎹-another_stage.fiwl
 ⎹-yet_another_stage.fiwl
 ⎹-icons
 ⎹ ⎹-my_icon_1.svg
 ⎹ ⎹-my_icon_2.svg
 ⎹ ⎿...
 ⎹-pictures
 ⎹ ⎹-my_picture_1.jpg
 ⎹ ⎹-my_picture_2.png
 ⎹ ⎿...
 ⎿fonts
   ⎹-cool_font_1.ttf
   ⎹-cool_font_2.otf
   ⎿...
```

By organizing resource files that way, we can change from:

```xml
...
<Label
  text="tiger eats lemon"
  fontType="/fonts/cool_font_1.ttf" />
<Label
  text="a cat married with a dog"
  fontType="/fonts/cool_font_2.otf" />
...
```

...into:

```xml
...
<Label
  text="tiger eats lemon"
  fontType="cool_font_1" />
<Label
  text="a cat married with a dog"
  fontType="cool_font_2.otf" />
...
```

Beside of organizing files, we need to add a few things to `manifest.json` as below:

```json
{
  "name": "Your App Name Here...",
  "description": "Your app description here...",
  "icon": "my-app-icon",
  "splash": "my-app-icon"
}
```

Where `my-app-icon` reflects `./icons/my-app-icon.svg` file. You could change those values as you like. Please make sure **icon** and **splash** are valid icon name.

## Structured Method

Unlike simple method, the structured method allows us to separate stage-specific resource files, including `style.varl`. Therefore, resource files are more organized also prevents naming conflict. To achieve that, at first we need to arrange files similar as below:

```
my-big-project
 ⎹
 ⎹-manifest.json
 ⎹-style.varl
 ⎹-stages
 ⎹ ⎹-home
 ⎹ ⎹ ⎹-main.fiwl
 ⎹ ⎹ ⎹-style.varl
 ⎹ ⎹ ⎹-icons
 ⎹ ⎹ ⎹ ⎿...
 ⎹ ⎹ ⎹-pictures
 ⎹ ⎹ ⎹ ⎿...
 ⎹ ⎹ ⎿fonts
 ⎹ ⎹   ⎿...
 ⎹ ⎿another_stage
 ⎹   ⎹-main.fiwl
 ⎹   ⎹-style.varl
 ⎹   ⎹-icons
 ⎹   ⎹ ⎿...
 ⎹   ⎹-pictures
 ⎹   ⎹ ⎿...
 ⎹   ⎿fonts
 ⎹     ⎿...
 ⎹-icons
 ⎹ ⎹-my_icon_1.svg
 ⎹ ⎹-my_icon_2.svg
 ⎹ ⎿...
 ⎹-pictures
 ⎹ ⎹-my_picture_1.jpg
 ⎹ ⎹-my_picture_2.png
 ⎹ ⎿...
 ⎿fonts
   ⎹-cool_font_1.ttf
   ⎹-cool_font_2.otf
   ⎿...
```

After that, configure `manifest.json` similar as below:

```json
{
  "name": "Your App Name Here...",
  "description": "Your app description here...",
  "icon": "my-app-icon",
  "splash": "my-app-icon",
  "stages": [
    {
      "route": "/",
      "resource": "/stages/home"
    },
    {
      "route": "/another",
      "resource": "/stages/another_stage"
    }
  ]
}
```

You could modify name, description, icon, and splash value as you like. For `"stages"`, it is array of objects which contain **route** (what URL that should redirects to a stage) and **resource** (stage directory location). There are more properties that you could customize on `manifest.json`. To know further, let's jump into [the next page](/docs/guide/manifest).
