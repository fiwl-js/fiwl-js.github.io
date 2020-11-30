---
id: manifest
title: Configuring Manifest
hide_title: true
---

# Configuring `manifest.json`

Application manifest (or `manifest.json`) is mandatory but can be emptied. Hence, we have default manifest values as below.

```json
{
  "name": "Blank App",
  "icon": "",
  "splash": "",
  "description": "This is a FIWL-based app",
  "metadata": {},
  "stages": [],
  "widgets": {}
}
```

:::info

App manifest schema might be changed on this track release depends on majority of people's need. Pull request and open issue are welcome.

:::

However, we suggest you to configure manifest properly to make sure your app looks good by web crawlers. If you are managing app environment with [structured method](/docs/guide/prep_env#structured-method), consider to learn explanations below.

## Metadata

Search Engine Optimization (SEO) is important. We could configure the manifest to have some metadata information for SEO. Here is an example:

```json
...
  "metadata": {
    "og:type" : "application",
    "og:image" : "/pictures/my-opengraph.jpg",
    "og:image:alt" : "Preview image of sample FIWL-based app",
    "twitter:card" : "summary"
  },
...
```

For more detail specification, see [Open Graph Protocol](https://ogp.me/), [Twitter Developer](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup), and [some SEO advice](https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags).

## Stages

When you choose to follow [structured method](/docs/guide/prep_env#structured-method), you have to configure `"stages"` inside your app manifest. Here is a full example for configuring `"stages"`:

```json
...
  "stages": [
    {
      "route": "/",
      "resource": "/stages/home",
      "layout": "my_custom_filename",
      "controller": "my_extra_script_file"
    },
    {
      "route": "/another",
      "resource": "/stage/another_stage",
      "layout": "my_custom_filename",
      "controller": "my_extra_script_file"
    },
    ...
  ],
...
```

The `"stages"` value must an array of objects with these properties:

1. **route** (_required_)<br/> This is URL relatives to your website's root path. If browser visit that URL, it will redirects to `main.fiwl` inside path that defined on `"resource"`, or another `*.fiwl` file if you define `"layout"` value.
2. **resource** (_required_)<br/> Informs where the stage and its resource files live. This is an URL relatives to website's root path.
3. **layout** (optional, default: "main")<br/> If the stage has file name other than `main.fiwl`, then you should set this. Keep in mind that you should not write `.fiwl` extension.
4. **controller** (optional, default: null)<br/> Not all developer combine logic and layout. If you are the one who prefer split logic and layout, then put the script inside `*.js` file at stage's resource directory and set the `"controller"` with that JavaScript file name. Like `"layout"`, you don't have to write `.js` extension. For further information about script, see [the next page](/docs/guide/script_event).

## Widgets

FIWL allows developers to share their widgets. To use another widgets, you could simply put the `*.js` files which contain some widgets to project directory as example:

```
my-app-project
 ⎹
 ...
 ⎹-widgets
 ⎹ ⎹-awsome-widgets.js
 ⎹ ⎿another-awsome-widgets.js
 ...
```

Then add these to `manifest.json`

```json
...
  "widgets" : {
    "awsome" : "/widgets/awsome-widgets",
    "anotherawsome" : "/widgets/another-awsome-widgets"
  },
...
```

The `awsome` and `anotherawsome` are widget modules now. You could name the widget module anything you want with rules:

1. Only use alphanumerics (a-z, A-Z, 0-9) and underscores (`_`)
2. Do not start naming with number (as example `4chan_widgets` is illegal)
3. To avoid conflict, do not name with something that already defined (as example DisplayObject, Layout, Button, ...)

To use that widget (as example **CoolClock** from "awsome" widget module), write this on any `*.fiwl` stage:

```xml
...
  <awsome.CoolClock
    width="container"
    height="content"
    someProp="This is an example of custom property"/>
...
```

:::caution

Modular widget support still in development, so it won't work for now. See [development checklist](/docs/dev_checklist/pre_alpha)

:::
