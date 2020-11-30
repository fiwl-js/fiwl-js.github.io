In HTML, we know `window` as global environment object. On the other side, FIWL uses `app` to give access for your app environment.

## Constants

| Name | Type | Description |
| :-: | :-: | :-- |
| [colors](app_colors) | object | Provides nice and easy color palette. Courtesy Google Material Design. |
| [net](app_net) | object | Networking utility to communicate with server. |
| [manifest](app_manifest) | object | Access to app's manifest. |
| [res](app_res) | object | Access to current stage's resources including style. |
| [display](app_display) | object | Provides app's viewport information including resolution, scaling, and orientation. |
| [unit](app_unit) | object | Unit conversion utility to help us convert unit (as example `dp` to `px`) easily. |
| [event](app_event) | object | Access to event listener registration. |
| [widgets](app_widgets) | object | Contains classes of widgets that linked to FIWL parser. |
| [stage](app_stage) | object | Allows modification for currently running stage. |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [goto](#goto) | Promise&lt;void&gt; | Call this if you need to navigate to another stage. |

---

### goto

```javascript
app.goto(route);
```

Call this if you need to navigate to another stage.

**Parameters:**

1. goto: (_string_ type) URL of intended stage, relative to your website URL.

**Return:** Promise&lt;void&gt;. Use `.then(() => { your code here })` to run something after stage swapped.
