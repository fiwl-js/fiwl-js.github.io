---
id: wasm
title: WASM Support
hide_title: true
---

# How About WASM Support?

After everything seems stable, we will start develop FIWL with [WASM](https://webassembly.org/) for native-like performance. But why not from start? Well... there are critical things to consider:

1. **Complexity, Prevents FIWL to Launch Earlier**<br/> Learning WASM is possible especially with [AssemblyScript](https://www.assemblyscript.org/). However, community support [still minor](https://www.infoworld.com/article/3509588/webassembly-hasnt-grabbed-javascript-developers.html) in early 2020. This could be a problem in some situation for starting big project like FIWL. To minimalize risk of long-duration problem solving, it's better to keep stick with JavaScript for now.

2. **Lack of Direct DOM Access for Rendering**<br/> As discussed on [this thread](https://stackoverflow.com/a/53958939/3730834), there is no way to access DOM directly but possible with `import` and `export` way as [demonstrated at here](https://webassembly.studio/?f=ff0fei4xgd9). However, that will be way too slow for rendering UI and too complex for a simple logic like at demo. Fortunately, browser API for WASM seems in proposal as explained on [this slide](https://docs.google.com/presentation/d/1nv3H8tfj4Kwr7yqFbtSOR21Ju2TEbiRyxE-UUYAIrhA/edit#slide=id.p).

3. **WASM still in Standardization Process**<br/> On the official site says that WASM [still in Standardization Process](https://webassembly.org/roadmap/) for future initial release. Keep in mind that FIWL is also new. If we use bleeding edge technology to create a new technology, the development process will suffer. The reason of this because when WASM releases new major features as promised on proposals, then FIWL need to be reprogrammed again which is waste of time and energy.

Anyway, browser with FIWL support out of the box or at least browser plugin for FIWL are possible at future. We welcome your contribution!
