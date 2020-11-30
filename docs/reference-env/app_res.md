---
id: app_res
title: app.res
---

Access to current stage's resources including style. Unlike NetworkInterface, the downloaded resources will be mapped accordingly.

## Constants

|          Name          |  Type  | Description                      |
| :--------------------: | :----: | :------------------------------- |
|          url           | string | URL of current stage's resource. |
| [style](app_res_style) | object | Provides access to `style.varl`. |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [loadIcon](#loadicon) | Promise&lt;ImageBitmapSource&gt; | Get app or stage specific icon, asynchronously. |
| [loadPicture](#loadpicture) | Promise&lt;ImageBitmapSource&gt; | Get app or stage specific picture, asynchronously. |
| [loadFont](#loadfont) | Promise&lt;Font&gt; | Get app or stage specific font, asynchronously. |

---

### loadIcon

```javascript
app.res.loadIcon(name);
```

Get app or stage specific icon, asynchronously. Only accept SVG format, otherwise error occured. The reason of separating SVG as icon because we have to draw icon with vector instead of bitmap. Thus, better load time, performance, and scalibility. The icon should be simple as stated on [Material Design specification](https://material.io/design/iconography/system-icons.html#design-principles).

**Parameters:**

1. name: (_string_ type) Icon name, without `.svg` suffix.

**Return:** Promise&lt;ImageBitmapSource&gt;. Use `.then(icon => { your code here })` to get the icon.

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.

---

### loadPicture

```javascript
app.res.loadPicture(name, extension?);
```

Get app or stage specific picture, asynchronously. Supported format: JPEG, PNG, GIF, TIFF, and BMP.

**Parameters:**

1. name: (_string_ type) Picture name, without extension suffix (e.g. `.jpg`, `.png`, ...).
2. extension: (_string_ type, optional) Extension suffix. Default value is `.jpg`.

**Return:** Promise&lt;ImageBitmapSource&gt;. Use `.then(picture => { your code here })` to get the picture.

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.

---

### loadFont

```javascript
app.res.loadFont(name, extension?);
```

Get app or stage specific font, asynchronously. Supported format: TTF, OTF, and WOFF.

**Parameters:**

1. name: (_string_ type) Font file name, without extension suffix (e.g. `.ttf`, `.otf`, ...).
2. extension: (_string_ type, optional) Extension suffix. Default value is `.ttf`.

**Return:** Promise&lt;ImageBitmapSource&gt;. Use `.then(fontObject => { your code here })` to get the font.

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.
