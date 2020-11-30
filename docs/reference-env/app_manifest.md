---
id: app_manifest
title: app.manifest
---

Access to app's manifest. To configure the manifest, follow [this guide](/docs/guide/manifest).

## Constants

| Name | Type | Description |
| :-: | :-: | :-- |
| **name** | string | Name of your Application. Default: `"Blank App"` |
| **icon** | string | URL that references app's icon. Targeted icon must SVG. Default: `""` |
| **splash** | string | URL that references app's splash icon. Targeted splash icon must SVG. Default: `""` |
| **description** | string | Description of your Application. Default: `"This is a FIWL-based web app"` |
| **metadata** | object | Key-value pairings which tell SEO some information. Default: `{}` |
| **stages** | object | List of objects that inform available stages. See [guide](/docs/guide/manifest#stages) for schema. |
| **widgets** | object | Key-value pairings which inform available widget modules. See [guide](/docs/guide/manifest#widgets). |
