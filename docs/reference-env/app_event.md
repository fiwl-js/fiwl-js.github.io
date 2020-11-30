---
id: app_event
title: app.event
---

:::caution

Event handling mechanism still in development. Some event types might not work correctly. See [development checklist](/docs/dev_checklist/pre_alpha)

:::

Access to event listener registration. Allows developer to reach lower level of human interaction. Keep in mind this object handles human interaction related events. Thus, we have event types as below:

- `"select"` : Universal primary interaction, it's left-click for mouse and tap on touchscreen
- `"double"` : Like `"select"` but twice
- `"option"` : Universal secondary interaction, it's right-click for mouse and long touch on touchscreen
- `"back"` : ESC on PC and back button on mobile
- `"scroll"` : Universal scroll, it's scroll wheel for mouse and swipe on touchscreen
- `"drag-start"` : Universal drag started event, left click + drag for mouse and long touch + move on touchscreen
- `"drag-move"` : Universal dragging event, drag for mouse and move on touchscreen
- `"drag-end"` : Universal drop event
- `"screen-resize"` : Viewport changed, including screen orientation changed

Also lower-level event types:

- `"mouse-left-press"`
- `"mouse-left-double"`
- `"mouse-left-release"`
- `"mouse-middle-press"`
- `"mouse-middle-double"`
- `"mouse-middle-release"`
- `"mouse-right-press"`
- `"mouse-right-double"`
- `"mouse-right-release"`
- `"mouse-hover-start"`
- `"mouse-hover-end"`
- `"mouse-move"`
- `"mouse-scroll"`
- `"mouse-use"`
- `"mouse-unuse"`
- `"touch-start"`
- `"touch-double"`
- `"touch-long"`
- `"touch-move"`
- `"touch-end"`
- `"touch-zoom"`
- `"touch-rotate"`
- `"direction-up"`
- `"direction-bottom"`
- `"direction-left"`
- `"direction-right"`
- `"keyboard-press"`
- `"keyboard-double"`
- `"keyboard-hold"`
- `"keyboard-hold-delay"`
- `"keyboard-release"`
- `"keyboard-use"`
- `"keyboard-unuse"`
- `"gamepad-connect"`
- `"gamepad-disconnect"`
- `"gamepad-press"`
- `"gamepad-hold"`
- `"gamepad-hold-delay"`
- `"gamepad-release"`
- `"gamepad-use"`
- `"gamepad-unuse"`

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [addEventListener](#addeventlistener) | void | Register a function as event listener. |
| [removeEventListener](#removeeventlistener) | void | Unregister event listener. |

---

### addEventListener

```javascript
app.event.addEventListener(type, listener, context?);
```

Register a function as event listener.

**Parameters:**

1. type:(_string_ type) One of [listed event types](#) above.
2. listener: (_function_ type) The function callback. Will be called on triggered.
3. context: ([_DisplayObject_](/docs/reference-widgets/displayobject) instance, Optional) a DisplayObject instance that will be listener's `this` object. Ignore this parameter to keep `this` object equals current working stage.

**Return:** void

---

### removeEventListener

```javascript
app.event.removeEventListener(type, listener);
```

Unregister event listener. If the event listener is not registered yet, then nothing happen.

**Parameters:**

1. type:(_string_ type) One of [listed event types](#) above.
2. listener: (_function_ type) The function callback

**Return:** void
