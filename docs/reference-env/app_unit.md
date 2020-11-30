---
id: app_unit
title: app.unit
---

Unit conversion utility. This help us convert unit (as example `dp` to `px`) easily.

## Constants

| Name | Type | Description |
| :-: | :-: | :-- |
| [Types](app_unit_types) | object | Unit constants. We use this for parameters of `app.unit.convert` |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [convert](#convert) | number | Scale a number based on two units. |
| [resolve](#resolve) | number | Resolve unit suffix of a string then convert it to px. |

---

### convert

```javascript
app.unit.convert(value, fromUnit, toUnit?);
```

Scale a number based on two units. If `toUnit` ignored, then destination unit assumed as `px`.

**Parameters:**

1. value: (_number_ type) a Number to be converted
2. fromUnit: (_number_ type) Unit of value. Use `app.unit.Types.*` for this parameter.
3. toUnit: (_number_ type, Optional) Unit of result. Use `app.unit.Types.*` for this parameter.

**Return:** number

---

### resolve

```javascript
app.unit.resolve(value, percentFactor?);
```

Resolve unit suffix of a string then convert it to px. However, if the value is number then returns that value.

**Parameters:**

1. value: (_string_ or _number_ type) a String that contains number with unit or just a plain number.
2. percentFactor: (_number_ type, Optional) This parameter tells `"100%"` is equals what pixels. If ignored, then `"100%" == "100px"`.

**Return:** number
