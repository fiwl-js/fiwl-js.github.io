---
id: stage
title: Arranging the Stage
---

import useBaseUrl from "@docusaurus/useBaseUrl";

In HTML, we have pages. Meanwhile in FIWL, we use Stage as it's an app, not a document. Every stage contains layout and logic. In this documentation, we will more focused on layout. For the logic part, see [Scripts & Events](/docs/guide/script_event).

## Layout Principle

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/stage-1.svg")} />

**DisplayObject** is the most primitive widget class and **Layout** is also primitive but with ability to store another widget instances. Just like normal class, both **DisplayObject** and **Layout** can be extended. All widgets has `.container` property, it points current Layout. Layout also has `.contents` property to points all widgets inside that Layout. So, bi-directional access is completely legal here via script or event tag.

:::caution

Widgets' name are **case-sensitive**. As example `SeriesLayout` and `serieslayout` are two different things!

:::

## Managing Size and Position

Every layout widget has ability to control its contents' size and position. We also have control to adjust every widget including layout itself.

### Alignment

To adjust position, we could set `alignContents` on layout, or `alignSelf` on several widgets with these values:

- `"left"`
- `"right"`
- `"top"`
- `"bottom"`
- `"center"`
- `"center-x"` (for horizontal center)
- `"center-y"` (for vertical center)

These values can be combined, as example `"right|bottom"` and `"center-x|top"`.

### Absolute Values

Both position and size could be either **absolutely** or **relatively** adjusted in numeric way. For absolute values, they won't be multiplied by container as illustration below.

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/stage-2.svg")} />

Similar to Android, `dp` unit is de-facto standard except text size. For text size, use `sp` to allow browser resize the text only. However, there are another units to use as explained below.

| Unit | Acronym of | Explanation |
| :-: | :-: | :-- |
| `dp` | Density-Independent Pixels | Smartphones have more dense screen than desktop. With this unit, the desired widget will looks the same on both smartphone and desktop eventhough density difference. |
| `sp` | Scaled Points (scaled pt) | Same as `dp` but specialized for text size. |
| `px` | Pixels | Exact pixels, no matter how dense the screen. This causes desired widget on smartphone drawn a lot smaller. |
| `pt` | Points | Same as `px` but specialized for text size. |

### Relative Values

For relative values, they represent how much percent of container's specific value. As result, if you set width relative as illustrated below, it will resize as big as container's space.

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/stage-3.svg")} />

Keep in mind that number beside of `%` represent how much empty space that can be filled. For sizing (width and height), only works if there are more than one widgets with relative value. If there is only one, then it will simply fill as big as container's empty space.

### Sizing

Special for sizing widgets (width and height), we can ask any widget to grow as big as its container or shrink as small as its contents. This illustration below demonstrate widget with `width="content"`.

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/stage-4.svg")} />

and This is another illustration of widget with `width="container"`.

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/stage-5.svg")} />

If you confused why there are empty spaces, then hold tight! we will learn padding, margin, and spacing.

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/stage-6.svg")} />

### Padding, Margin, and Spacing

Similar to HTML, we could apply margin and padding to widgets. But how about spacing? Here's the explanations:

- **margin**<br/> Outer empty space. If `backgroundColor` set, this empty space won't affected.
- **padding**<br/> Inner empty space. Can be affected by `backgroundColor`.
- **spacing**<br/> Same as padding, but located between **SerialLayout**'s contents.

## Passive and Interactive Stage

<object type="image/svg+xml" data={useBaseUrl("img/docs/guide/stage-7.svg")} />

Unlike HTML's page, stage is a stateful object. Currently working stage is an interactive stage, whereas previously visited stages are passive stages and they are stored in a **backstack**. This backstack makes swapping stage a lot faster rather than re-download everything. Behind the scene, interactive stage posesses a passive stage for storing all stateful properties. When user navigate to another stage, FIWL only remove the interactive stage and keep the passive one. Thus, no data migration needed unlike typical MVC-based frameworks.

:::note

Passive and Interactive stage are two different instance. Interactive stage only contains property setters, getters, and interactive widgets. Whereas passive stage is actually stores stage and all widget instances property.

:::

:::caution

When you define a new property in a widget, it won't be an interactive property. Thus, it won't be stored on the passive instance and cannot automatically trigger update.

:::
