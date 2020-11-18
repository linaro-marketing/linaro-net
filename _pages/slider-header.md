---
title: Slider header
layout: flow
permalink: /features/slider-header/
descrtion: >
  This page showcases the slider header
keywords: flow, jekyll, automation, simple, bootstrap 3
jumbotron:
  class: home
  inner_class: example_class
  slider:
    - title: linaro-jekyll-theme
      title-class: big-title
      description: >
        A feature-packed Jekyll theme used by Linaro's static websites.
      slide-style: "background-position-y: bottom;"
      image: /assets/images/breadcrumb-image.jpg
      buttons:
        - title: View on GitHub
          url: https://github.com/linaro-marketing/linaro-jekyll-theme
          icon: fa fa-github
    - description: >
        Simple script to export current AWS SSO credentials or run a sub-process with them
      slide-style: "background-position-y: bottom;"
      image: /assets/images/breadcrumb-image.jpg
      title: aws2-wrap
      # inner-image: /assets/images/test/js-logo.png
      buttons:
        - title: View on GitHub
          url: https://github.com/linaro-its/aws2-wrap
          icon: fa fa-github
---

Below is an example of the Jekyll front matter to use when adding a slider header to a page:

```yaml
jumbotron:
  class: home
  inner_class: example_class
  slider:
    - title: linaro-jekyll-theme
      title-class: big-title
      description: >
        A feature-packed Jekyll theme used by Linaro's static websites.
      slide-style: "background-position-y: bottom;"
      image: /assets/images/breadcrumb-image.jpg
      buttons:
        - title: View on GitHub
          url: https://github.com/linaro-marketing/linaro-jekyll-theme
          icon: fa fa-github
    - description: >
        Simple script to export current AWS SSO credentials or run a sub-process with them
      slide-style: "background-position-y: bottom;"
      image: /assets/images/breadcrumb-image.jpg
      title: aws2-wrap
      # inner-image: /assets/images/test/js-logo.png
      buttons:
        - title: View on GitHub
          url: https://github.com/linaro-its/aws2-wrap
          icon: fa fa-github
```