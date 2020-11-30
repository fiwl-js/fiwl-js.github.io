---
id: label
title: Label
---

| extends | [DisplayObject](displayobject) → Object |
| :-----: | :-------------------------------------: |


Displays single line or multiline text. Additionaly, text color and style as example bold are possible. Custom typeface also possible if supported font file such as `.ttf`, `.otf`, or `.woff` stored in [specified resource directory](/docs/guide/prep_env).

## Properties

| name | Type | Default Value | Description |
| :-: | :-: | :-: | :-- |
| backgroundColor | number | 0xff000000 (transparent) | Use app.colors.\* to set the color. |
| text | string | "" | Text that going to be displayed |
| textSize | string or number | app.res.style.controlTextSize | Can be either plain number or number with unit. |
| textColor | number | app.res.style.textColor | Use app.colors.\* to set the color. |
| width | string or number | "content" | Can be number, number with unit, "content", or "container". see [sizing guide](/docs/guide/stage#sizing). |
| height | string or number | "content" | Can be number, number with unit, "content", or "container". see [sizing guide](/docs/guide/stage#sizing). |
| bold | boolean | false | Set true to make the text bold. |
| italic | boolean | false | Set true to make the text italic. |
| underline | boolean | false | Set true to make the text underline. |
| wrap | boolean | true | Keep this true to let the excess text move to the new line. |
| alignText | string | "" | Align text of this widget. See [alignment guide](/docs/guide/stage#alignment). |
| fontType | string | "" | Set this to desired font file name for custom typography or ignore this to use default font. |

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

|          Name          |  Type  | Description                           |
| :--------------------: | :----: | :------------------------------------ |
| measuredContentsWidth  | number | Measured `width = "contents"` value.  |
| measuredContentsHeight | number | Measured `height = "contents"` value. |

### Inherited from [DisplayObject](displayobject)

| Name | Type | Description |
| :-: | :-: | :-- |
| container | object | Get this instance's container. See [Layout Principle](/docs/guide/stage#layoutprinciple). |
| globalX | number | Get pre-calculated absolute horizontal position. |
| globalY | number | Get pre-calculated absolute vertical position. |
| measuredWidth | number | Get pre-calculated absolute width. |
| measuredHeight | number | Get pre-calculated absolute height. |

## Methods

### Inherited from [DisplayObject](displayobject)

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [requestUpdate](displayobject#requestupdate) | void | Manually request to re-render. |
| [addEventListener](displayobject#addeventlistener) | void | Calls `app.event.addEventListener` with this widget as context. |
| [removeEventListener](displayobject#removeeventlistener) | void | Calls `app.event.removeEventListener` with this widget as context. |
