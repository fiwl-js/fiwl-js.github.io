---
id: app_unit_types
title: app.unit.Types
---

Unit constants. We use this for parameters of `app.unit.convert`.

## Constants

| Name | Type | Description |
| :-: | :-: | :-- |
| **PX** | number | Pixels unit. Main reference of any units. Value: 1 |
| **DP** | number | Density-independent Pixels unit. Value: `PX * app.display.scale` |
| **PT** | number | Points unit. The value may vary on each device |
| **SP** | number | Scaled Points unit. Value: `PT * app.display.scale` |
| **VW** | number | Viewport Width unit. It is percent with `"100%" == app.display.width` |
| **VH** | number | Viewport Height unit. It is percent with `"100%" == app.display.height` |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [percent](#percent) | number | Calculate unit constant from percent factor. |

---

### percent

```javascript
app.units.Types.percent(factor);
```

Calculate unit constant from percent factor.

**Parameters:**

1. factor: (_number_ type) Tells `"100%"` is equals what pixels.

**Return:** number
