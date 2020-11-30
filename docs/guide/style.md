---
id: style
title: Styling
---

FIWL is not using CSS for styling because every drawing procedure done by every widgets. Instead of telling widgets how to draw, we ask them what default color, text size, and any else. You could modify the `style.varl` to personalize styling.

## Default values

Everything inside `style.varl` are optional and being emptied is completely legal. Thus, we have default values for styling:

```
primaryColor         = 0x5c6bc0
primaryLightColor    = 0x8e99f3
primaryDarkColor     = 0x26418f
onPrimaryColor       = 0xffffff
secondaryColor       = 0x4caf50
secondaryLightColor  = 0x80e27e
secondaryDarkColor   = 0x087f23
onSecondaryColor     = 0xffffff
errorColor           = 0xb00020
onErrorColor         = 0xffffff
textColor            = 0x000000
foregroundColor      = 0x000000
backgroundColor      = 0xffffff
stageBackgroundColor = 0xdfdfdf
displayTextSize      = 48sp
titleTextSize        = 38sp
headerTextSize       = 32sp
bodyTextSize         = 12sp
controlTextSize      = 24sp
```

## How to configure?

To configure styling, just add `key = value` pairings to `style.varl` as example below.

```
primaryColor = 0xE91E63
secondaryColor = 0xFFC107
```

We can also add comment to `style.varl`

```
*Some basic configs:
primaryColor = 0xE91E63
secondaryColor = 0xFFC107
```

The `style.varl` is not strict, you could add your own custom configuration

```
*Some basic configs
primaryColor = 0xE91E63
secondaryColor = 0xFFC107

*My custom configs
colorForButtons = 0x9E9E9E
```

Then apply to desired widget:

```xml
...
    <Button
      backgroundColor="@style/colorForButtons"/>
...
```

## Access from Script / Event

FIWL allows you to access stylings from logic side (script or event tags), here is the example:

```xml
...
  <event on="ready">
    console.log(app.res.style.primaryColor);
  </event>
...
```

:::caution

Getting value from `app.res.style*` should be done at "ready" event. Otherwise, it won't referencing to your configured `style.varl`

:::
