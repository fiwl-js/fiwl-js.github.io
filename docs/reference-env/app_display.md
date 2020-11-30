---
id: app_display
title: app.display
---

Provides app's viewport information including resolution, scaling, and orientation. Beside of those, we have access to modify viewport's behavior such as `setCursor(...)`.

## Constants

| Name | Type | Description |
| :-: | :-: | :-- |
| **width** | number | Gives number of viewport's width in pixels (px). |
| **height** | number | Gives number of viewport's height in pixels (px). |
| **scale** | number | Scaling relatives to typical desktop screen. Similar to `window.devicePixelRatio`. |
| **isLandscape** | boolean | Returns `true` if current screen is landscape as example Desktop and Laptop screen. |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [setCursor](#setcursor) | void | Change cursor to specified kind. Only works on devices with mouse. |

---

### setCursor

```javascript
app.display.setCursor(name);
```

Change cursor to specified kind. Only works on devices with mouse.

**Parameters:**

1. name: (_string_ type) Must be one of these:
   - `"default"`
   - `"processing"`
   - `"clickable"`
   - `"text"`
   - `"move"`
   - `"draggable"`
   - `"dragging"`
   - `"denied"`

**Return:** void
