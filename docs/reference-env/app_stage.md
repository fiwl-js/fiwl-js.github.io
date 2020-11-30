---
id: app_stage
title: app.stage
---

Allows modification for currently running stage. Every widgets that you defined in layout are stored inside `app.stage.layout`. Thus, you could perform widget manipulation programmatically with this global object.

## Properties

| name | Type | Default Value | Description |
| :-: | :-: | :-: | :-- |
| url | string | `"/"` | Current URL route. |
| title | string | null | Current stage's name. |
| description | string | null | Current stage's description. |
| onCreated | function or string | (empty async function) | Will be called after passive stage creation. |
| onReady | function or string | (empty function) | Will be called after interactive stage creation. |
| onFocus | function or string | (empty function) | Will be called after user gain focus on this app. |
| onUpdate | function or string | (empty function) | Will be called each widget modification occured. |
| onDraw | function or string | (empty function) | Will be called when redraw frame. |
| onUnfocus | function or string | (empty function) | Will be called after user loses focus on this app. |
| onSuspend | function or string | (empty function) | Will be called before destroying interactive stage. |
| onDestroy | function or string | (empty function) | Will be called before destroying passive stage. |

## Read-only Properties

|  name  |  Type  | Description                   |
| :----: | :----: | :---------------------------- |
| layout | Layout | Root layout of current stage. |
