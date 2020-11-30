---
id: script_event
title: Scripts & Events
---

import useBaseUrl from "@docusaurus/useBaseUrl";

FIWL uses vanilla JavaScript as logic. The version of JavaScript is browser-dependent. ES6 syntax is recommended excluding module syntax (no import & export allowed) because it will run directly on browser. As HTML spec, we have `<script>` tag. However, in FIWL we have both `<script>` and `<event>` tags, explained as below.

- **script**<br/> Executed right after `*.fiwl` file being parsed. The stage is currently not available.

- **event**<br/> Executed on specified condition. The stage is available when **ready** event triggered and disappear before **destroy** event triggered.

## How to use script and event?

Script tag usage is similar with HTML:

```html
...
<script>
  // Your script goes here...
  console.log('The .fiwl file has been parsed!');
</script>
...
```

It also has ability to load external script:

```xml
  ...
  <script from="/my-another-script.js"/>
  ...
```

For event tag, we could write it as example:

```xml
  ...
  <event on="ready">
    // Your main logic goes here...
    console.log('I am ready!');
  </event>
  ...
```

:::note

The `on` attribute is mandatory for event. Otherwise, that event tag will be useless.

:::

## Stage Lifecycle

To understand which and when events triggered, we need to know stage lifecycle as illustrated below.

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/script_event-1.svg")} />

Black-colored texts tell us what happened to stage and blue-colored tell us which event to trigger. Keep in mind that The **create** and **destroy** process only happened once for each stage. Otherwise, could be happened repeatedly depends on user interaction. If you feel confused by diagram above, let me explain deeper.

### .fiwl Parsed

FIWL file just downloaded and parsed into XML DOM-like object. In this condition, the stage is not created at all. On the other side, every parsed script tags executed.

### Passive Stage

Stage is now created and `created` event triggered, but it's not interactive yet. Just a plain JavaScript Object that cannot react to any changes. That's why it is called "passive". On this condition, there are 2 potential things to happen:

- **Activate**, when the stage is opened on either first time or when user go back to this stage.
- **Destroy**, when user either close browser tab or go back to the stage **before** this stage.

### Interactive Stage

The stage is now ready to action and triggers `ready` event. Every properties in the stage are interactive. The word "interactive" here means both setter and getter, not a normal property. This allows you to update and re-draw the stage each time you modify something instead of request update manually. On this condition, we have 2 potential things to happen: (see [the diagram](#stage-lifecycle) above)

- **Focus**, when user is currently using the app.
- **Close**, when user navigate to the next stage.

### Update / Draw Loop

When user is currently interacting with app, the stage is capable of automatically trigger `update` for each modification. The difference of `draw` event compared to `update`, the `draw` event only triggered when both `update` triggered **and** GPU is ready to draw. Thus, `update` event will be more frequently triggered than `draw` event. However, when user is going to another tab or minimize the browser, the stage will simply unfocus and prevents `update` and `draw` events being triggered.

## Events

[TL;DR](https://www.dictionary.com/browse/tldr), we could summarize in table as below

| Event Name | Triggered When | is Stage Available? | Uses Cases |
| :-: | :-: | :-: | :-- |
| `created` | After **Passive Stage** creation | No | Downloading resources, add new event listener |
| `ready` | After **Interactive Stage** creation | Yes | A lot of things, all main logic starts here |
| `focus` | Before user sees the app | Yes | Play animation, resume the game, and more |
| `update` | After property modification | Yes | Repetitive check, **DO NOT modify properties here**. |
| `draw` | After stage drawn | Yes | Repetitive task, similar to `requestAnimationFrame` |
| `unfocus` | Before user minimize browser or change tab | Yes | Stop animation, pause the game, and more |
| `suspend` | Before navigate to another stage | Yes | remove event listeners and stop foreground processes |
| `destroy` | Before navigate to another app | No | Usually session control such as logging exit time |

:::danger

DO NOT perform any widgets and stage properties modification when using `update` event. Otherwise, [stack overflow](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/#:~:text=A%20stack%20overflow%20occurs%20when,before%20throwing%20a%20stack%20error.) occured.

:::
