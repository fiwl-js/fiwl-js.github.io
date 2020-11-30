---
id: displayobject
title: DisplayObject
---

| extends | Object |
| :-----: | :----: |

Most primitive widget. Provides most basic widget behavior including draw function and standardized properties.

## Properties

| name | Type | Default Value | Description |
| :-: | :-: | :-: | :-- |
| id | string | (8-digit random) | Identifies widget. Set this to make it searchable. |
| x | string or number | 0 | Can be either plain number or number with unit. |
| y | string or number | 0 | Can be either plain number or number with unit. |
| width | string or number | "100dp" | Can be number, number with unit, "content", or "container". see [sizing guide](/docs/guide/stage#sizing). |
| height | string or number | "100dp" | Can be number, number with unit, "content", or "container". see [sizing guide](/docs/guide/stage#sizing). |
| scaleX | number | 1.0 | Fraction of number. This will multiply width. |
| scaleY | number | 1.0 | Fraction of number. This will multiply height. |
| scale | number | 1.0 | Set this to change both scaleX and scaleY at once. |
| alpha | number | 1.0 | 0.0 means transparent and 1.0 is fully opaque. |
| angle | number | 0 | 0.0 means transparent and 1.0 is fully opaque. |
| elevation | string or number | 0 | Can be either plain number or number with unit. |
| cornerRadius | string or number | 0 | Can be either plain number or number with unit. |
| presence | boolean | true | If true, this widget will affects other widgets' position and size. |
| visible | boolean | true | If true, this widget will be drawn. |
| clipping | boolean | true | If true, content of this widget will be cropped if exceed the boundary. |
| suspendUpdate | boolean | true | Set true to temporarily prevent update trigger. |
| backgroundColor | number | app.res.style.backgroundColor | Use app.colors.\* to set the color. |
| foregroundColor | number | app.res.style.foregroundColor | Use app.colors.\* to set the color. |
| borderColor | number | this.foregroundColor | Use app.colors.\* to set the color. |
| borderSize | string or number | 0 | Can be either plain number or number with unit. |
| paddingTop | string or number | 0 | Can be either plain number or number with unit. |
| paddingBottom | string or number | 0 | Can be either plain number or number with unit. |
| paddingLeft | string or number | 0 | Can be either plain number or number with unit. |
| paddingRight | string or number | 0 | Can be either plain number or number with unit. |
| paddingHorizontal | string or number | 0 | Set this to write both paddingLeft and paddingRight at once. |
| paddingVertical | string or number | 0 | Set this to write both paddingTop and paddingBottom at once. |
| paddings | string or number | 0 | Set this to write paddingTop, paddingBottom, paddingLeft and paddingRight. |
| borderSize | string or number | 0 | Can be either plain number or number with unit. |
| marginTop | string or number | 0 | Can be either plain number or number with unit. |
| marginBottom | string or number | 0 | Can be either plain number or number with unit. |
| marginLeft | string or number | 0 | Can be either plain number or number with unit. |
| marginRight | string or number | 0 | Can be either plain number or number with unit. |
| marginHorizontal | string or number | 0 | Set this to write both marginLeft and marginRight at once. |
| marginVertical | string or number | 0 | Set this to write both marginTop and marginBottom at once. |
| margins | string or number | 0 | Set this to write marginTop, marginBottom, marginLeft and marginRight. |
| alignSelf | string | "" | Align position of this widget. See [alignment guide](/docs/guide/stage#alignment). |
| hookTopToTopOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| hookTopToBottomOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| hookBottomToBottomOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| hookBottomToTopOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| hookLeftToLeftOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| hookLeftToRightOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| hookRightToRightOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| hookRightToLeftOf | string | "" | ID of targeted widget. Only works if currently content of [HookLayout](/docs/dev_checklist/pre_alpha). |
| onDraw | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onUpdate | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onSelect | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onOption | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onScroll | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onDragStart | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onDragMove | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onDragEnd | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onHoverStart | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onHoverMove | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onHoverEnd | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onAsyncCreate | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onReady | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onSuspend | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |
| onDestroy | function | (empty function) | Event listeners that you could set on `.fiwl` layout. |

## Read-only Properties

| Name | Type | Description |
| :-: | :-: | :-- |
| container | object | Get this instance's container. See [Layout Principle](/docs/guide/stage#layoutprinciple). |
| globalX | number | Get pre-calculated absolute horizontal position. |
| globalY | number | Get pre-calculated absolute vertical position. |
| measuredWidth | number | Get pre-calculated absolute width. |
| measuredHeight | number | Get pre-calculated absolute height. |
| measuredContentsWidth | number | Measured `width = "contents"` value. Always returns 0 because DisplayObject does not contain anything. |
| measuredContentsHeight | number | Measured `height = "contents"` value. Always returns 0 because DisplayObject does not contain anything. |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [requestUpdate](#requestupdate) | void | Manually request to re-render. |
| [addEventListener](#addeventlistener) | void | Calls `app.event.addEventListener` with this widget as context. |
| [removeEventListener](#removeeventlistener) | void | Calls `app.event.removeEventListener` with this widget as context. |

---

### requestUpdate

```javascript
requestUpdate();
```

Manually request to re-render.

**Return:** void

---

### addEventListener

```javascript
addEventListener(type, listener);
```

Calls `app.event.addEventListener` with this widget as context.

**Parameters:**

1. type:(_string_ type) One of [listed event types](#) above.
2. listener: (_function_ type) The function callback. Will be called on triggered.

**Return:** void

---

### removeEventListener

```javascript
removeEventListener(type, listener);
```

Calls `app.event.removeEventListener` with this widget as context.

**Parameters:**

1. type:(_string_ type) One of [listed event types](#) above.
2. listener: (_function_ type) The function callback

**Return:** void

---

# For Widget Developers

:::caution

Widget development is not ready yet until modular widget support available. See [development checklist](/docs/dev_checklist/pre_alpha).

:::

## Static Properties

| Name | Type | Default Value | Description |
| :-: | :-: | :-: | :-- |
| parseContents | function | null | Tells parser how to parse this widget's contents. Ignore this to keep default behavior. |
| customContentsKey | string | null | Tells parser which property that holds parsed contents. Ignore this to keep default behavior. |
| writableContents | boolean | false | Set `true` to allow overwrite, but auto-update won't be triggered. |
| flagNoUpdate | Array&lt;string&gt; | [] | Tells which properties should not trigger auto-update. |
| flagNoAnimate | Array&lt;string&gt; | [] | Tells which properties should not trigger animation. (For future development) |
| flagForwardWeakMap | Array&lt;string&gt; | [] | Tells which WeakMap with private properties inside. |

## Static Read-Only Properties

| Name | Type | Description |
| :-: | :-: | :-- |
| internal | WeakMap&lt;DisplayObject, any&gt; | Stores non-exposable properties as example measured values. |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [asyncCreate](#asynccreate) | Promise&lt;void&gt; | Asynchronous version of [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor). |
| [ready](#ready) | void | Executed just after the stage ready. |
| [suspend](#suspend) | void | Executed just before the interactive stage being destroyed. |
| draw | Array&lt;Object&gt; | Tells render engine how to draw. |
| drawBackground | Array&lt;Object&gt; | Aids any widgets to reuse this drawBackground function. Typically called before `draw` function. |
| drawPostEffect | Array&lt;Object&gt; | Aids any widgets to reuse this drawPostEffect function. Typically called after `draw` function. |

---

### asyncCreate

```javascript
async asyncCreate() {
  ...
}
```

Asynchronous version of [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor).

**Return:** Promise&lt;void&gt;.

:::caution

You have to resolve the `Promise` when the on going task is finished. Otherwise, the app will stuck at loading screen.

:::

---

### ready

```javascript
ready() {
  ...
}
```

Executed just after the stage ready. Much like `ready` event on stage, but this one is for any widgets.

**Return:** void

---

### suspend

```javascript
suspend() {
  ...
}
```

Executed just after the stage ready. Much like `ready` event on stage, but this one is for any widgets.

**Return:** void

---

:::note

We will provide you guide of drawing with RenderAPI on widget. Stay tuned!

:::
