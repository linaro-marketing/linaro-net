---
title: Video header
layout: flow
permalink: /features/video-header/
descrtion: >
  This page showcases the video header
keywords: flow, jekyll, automation, simple, bootstrap 3
jumbotron:
  title: Bringing the Arm ecosystem together
  description: "Test description"
  video:
    source:
      mp4: https://static.linaro.org/connect/assets/videos/san19_promo_banner.mp4
      ogv: https://static.linaro.org/connect/assets/videos/san19_promo_banner.ogv
      webm: https://static.linaro.org/connect/assets/videos/san19_promo_banner.webm
    poster: /assets/images/breadcrumb-image.jpg
---

Below is an example of the front matter to use when adding a video header to a page.

```yaml
jumbotron:
  title: Bringing the Arm ecosystem together
  description: "Test description"
  video:
    source:
      ogv: https://static.linaro.org/connect/assets/videos/san19_promo_banner.ogv
      mp4: https://static.linaro.org/connect/assets/videos/san19_promo_banner.mp4
      webm: https://static.linaro.org/connect/assets/videos/san19_promo_banner.webm
    poster: /assets/images/breadcrumb-image.jpg
```