---
id: layout
title: Layout
---

| extends | [DisplayObject](displayobject) → Object |
| :-----: | :-------------------------------------: |


Primitive widget with ability to contain another widgets. Widget developers use this to create widget which can include another widgets inside as example below.

```xml
...
    <SeriesLayout
      orientation="vertical"
      alignContents="center"
      spacing="16dp">
        <Label
          text="Hello User!"/>
        <Button
          text="Hi!"/>
    </SeriesLayout>
...
```

## Properties

| name | Type | Default Value | Description |
| :-: | :-: | :-: | :-- |
| alignContents | string | "" | Align contents of this widget. See [alignment guide](/docs/guide/stage#alignment). |
| width | string or number | "content" | Can be number, number with unit, "content", or "container". see [sizing guide](/docs/guide/stage#sizing). |
| height | string or number | "content" | Can be number, number with unit, "content", or "container". see [sizing guide](/docs/guide/stage#sizing). |

### Inherited from [DisplayObject](displayobject)

| name | Type | Default Value | Description |
| :-: | :-: | :-: | :-- |
| id | string | (8-digit random) | Identifies widget. Set this to make it searchable. |
| x | string or number | 0 | Can be either plain number or number with unit. |
| y | string or number | 0 | Can be either plain number or number with unit. |
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

| name | Type | Description |
| :-: | :-: | :-- |
| contents | Array&lt;DisplayObject&gt; | Get this instance's contents. See [Layout Principle](/docs/guide/stage#layoutprinciple). |
| length | number | Count of contents. |
| measuredContentsWidth | number | Measured `"contents"` width value. |
| measuredContentsHeight | number | Measured `"contents"` height value. |

### Inherited from [DisplayObject](displayobject)

| Name | Type | Description |
| :-: | :-: | :-- |
| container | object | Get this instance's container. See [Layout Principle](/docs/guide/stage#layoutprinciple). |
| globalX | number | Get pre-calculated absolute horizontal position. |
| globalY | number | Get pre-calculated absolute vertical position. |
| measuredWidth | number | Get pre-calculated absolute width. |
| measuredHeight | number | Get pre-calculated absolute height. |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [findContent](#findcontent) | DisplayObject | Get content by its ID. |
| [measureEachContentX](#measureeachcontentx) | number | Help its contents where should be located in X axis. |
| [measureEachContentY](#measureeachcontenty) | number | Help its contents where should be located in Y axis. |
| [measureEachContentWidth](#measureeachcontentwidth) | number | Help its contents resolve maximum width, especially when `width = "container"`. |
| [measureEachContentHeight](#measureeachcontentheight) | number | Help its contents resolve maximum height, especially when `height = "container"`. |

### Inherited from [DisplayObject](displayobject)

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [requestUpdate](displayobject#requestupdate) | void | Manually request to re-render. |
| [addEventListener](displayobject#addeventlistener) | void | Calls `app.event.addEventListener` with this widget as context. |
| [removeEventListener](displayobject#removeeventlistener) | void | Calls `app.event.removeEventListener` with this widget as context. |

---

### findContent

```javascript
findContent(id, isRecrusive?);
```

Get content by its ID. Very useful especially if you have some widgets that randomly swap its index or moving to another container.

**Parameters:**

1. id: (_string_ type) ID of targeted widget instance.
2. isRecrusive: (_boolean_ type, Optional) If set `true`, this function will also find inside of content of contents. Keep in mind this is heavy operation.

**Return:** DisplayObject or its inheritance. `null` if not found.

---

### measureEachContentX

```javascript
measureEachContentX(id);
```

Help its contents where should be located in X axis. As example inside horizontal-oriented `SeriesLayout`, the second widget can understand where is the right of first widget.

**Parameters:**

1. id: (_string_ type) ID of targeted widget instance.

**Return:** number, in pixels.

---

### measureEachContentY

```javascript
measureEachContentY(id);
```

Help its contents where should be located in Y axis. As example inside vertical-oriented `SeriesLayout`, the second widget can understand where is the bottom of first widget.

**Parameters:**

1. id: (_string_ type) ID of targeted widget instance.

**Return:** number, in pixels.

---

### measureEachContentWidth

```javascript
measureEachContentWidth(id);
```

Help its contents resolve maximum width, especially when `width = "container"`.

**Parameters:**

1. id: (_string_ type) ID of targeted widget instance.

**Return:** number, in pixels.

---

### measureEachContentHeight

```javascript
measureEachContentHeight(id);
```

Help its contents resolve maximum height, especially when `height = "container"`.

**Parameters:**

1. id: (_string_ type) ID of targeted widget instance.

**Return:** number, in pixels.
