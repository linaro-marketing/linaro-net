---
title: The Flow Layout
layout: flow
permalink: /flow/
descrtion: >
  This page showcases the power of the flow.html Jekyll include provided in this theme.
keywords:
  - flow
  - jekyll
  - automation
  - simple
  - bootstrap 3
jumbotron:
  inner_class: dotted
  title: The Flow Layout
  slider: []
  description: >
    The flow layout enables you to create custom pages using only Jekyll front matter.
  image: /assets/images/breadcrumb-image.jpg
  buttons:
    - title: View on Github
      icon: icon-github
      class: test
      url: https://github.com
flow:
  - row: container_row
    #   style: dark
    sections:
      - format: title
        style: #
        title_content:
          size: h2
          text: What is the flow layout?
          style: display-4
      - format: text
        style: #
        text_content:
          text: |
            The flow layout enables content editors to create custom pages _without_ the need to add a new layout.

            The layout let's content editors a combination of row and section types to create a custom static page.
      - format: buttons
        style: #
        buttons_content:
          - title: More Details
            url: /about/
            icon: fa fa-arrow-right
            style: btn-primary
      - format: image
        style: #
        alt: Test Alt
        size: 8
        path: /assets/images/breadcrumb-image.jpg
  - row: container_row
    style: fixed text-center
    background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: title
        title_content:
          size: h2
          text: Container row with background image
      - format: text
        style: text-center text-white
        text_content:
          text: A container row featuring a background image
      - format: buttons
        style: text-center
        buttons_content:
          - title: More Details
            url: /about/
            icon: fa fa-arrow-right
            style: btn-primary
  - row: container_row
    style: bg-primary
    sections:
      - format: title
        style: text-center text-white
        title_content:
          size: h2
          text: Lazy YouTube embed row
      - format: youtube
        style: #
        url: https://www.youtube.com/watch?v=mWpK-cNQmL8
        #   poster_image: /assets/images/breadcrumb-image.jpg
        title: Interview with Shuah Khan on Kernel Self Test
  - row: container_row
    style: block_row
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Collapse Section
      - format: collapse
        style: #
        panels:
          - title: Test Panel Title
            content: |
              ## Test Panel Content

              Some other text

              - Bullet 1
              - Bullet 2
              - Bullet 3
          - title: Test Panel Title 2
            content: |
              ## Test Panel Content 2

              Some other text

              - Bullet 1
              - Bullet 2
              - Bullet 3
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Members Section
      - format: members
        style: zoom grayscale bg-dark
        members_content:
          item_width: "4"
          items:
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
            - name: Linaro
              image:
                path: /assets/images/Linaro-logo-white.png
                alt: Linaro Logo
              url: https://www.linaro.org/
  - row: container_row
    style: block_row
    #   background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: title
        style: text-center
        title_content:
          size: h2
          text: Block Row
      - format: block
        style: text-center
        block_section_content:
          item_width: "4"
          blocks:
            - title: Block 1
              url: /about/
              modal_content: |
                This is some modal _content_.
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
                - title: More
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-secondary
            - title: Block 2
              url: /about/
              image: /assets/images/Linaro-logo-white.png
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: Block 3
              url: /about/
              image: /assets/images/Linaro-logo-white.png
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
  - row: container_row
    style: block_row fixed
    background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: block
        style: text-center text-white
        block_section_content:
          item_width: "3"
          blocks:
            - title: Block 1
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              style: d-flex
              content_style: d-flex flex-column align-items-center justify-content-center
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  style: btn-primary
                  icon: fa fa-arrow-right
            - title: Block 2
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: Block 3
              url: /about/
              style: block_three_style
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: Block 4
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              background_image: true
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
                - title: Read
                  url: /flow/
                  icon: fa fa-book
                  style: btn-primary
  - row: container_row
    style: block_row fixed
    sections:
      - format: tabs
        style: #
        tabs:
          - title: Test
            content: |
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis > nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore > eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              - Test
              - Test
              - Test

              This is some more [content](/).
          - title: Test 2
            content: |
              This is some test tab content. 2

              - Test

              - Test

              - Test

              This is some more [content](/).
          - title: Test 3
            content: |
              This is some test tab content. 3

              - Test
              - Test
              - Test

              This is some more [content](/). 3
  - row: container_row
    #style: fixed
    background_image: /assets/images/breadcrumb-image.jpg
    sections:
      - format: title
        title_content:
          size: h2
          text: Custom Include Section
      - format: custom_include
        source: examples/custom_include.html
  - row: full_width_row
    style: fixed block_row
    sections:
      - format: title
        style: text-center
        title_content:
          text: Full Width Block Row
          size: h2
      - format: block
        style: text-center
        item_width: 3
        block_section_content:
          blocks:
            - title: Members Section Example
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: Members Section Example
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: Members Section Example
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
            - title: Members Section Example
              url: /about/
              image: /assets/images/breadcrumb-image.jpg
              description: See our photos from event.
              buttons:
                - title: More Details
                  url: /flow/
                  icon: fa fa-arrow-right
                  style: btn-primary
                - title: Read
                  url: /flow/
                  icon: fa fa-book
                  style: btn-primary
  - row: full_width_row
    #style: new
    sections:
      - format: title
        title_content:
          text: Feature Block Row (Full Width)
          size: h2
      - format: feature_block
        style: dotted
        feature_block_content:
          position: "left"
          type: "youtube_video"
          youtube:
            url: https://www.youtube.com/watch?v=QH2-TGUlwu4
            poster_image: /assets/images/breadcrumb-image.jpg
          title: Feature Block
          custom_include: test/feature_block.html
          text: >
            A feature block with a youtube video.
          buttons:
            - title: Button 1
              url: /about/
              style: btn-primary
            - title: Button 2
              url: /about/
              style: btn-primary
      - format: feature_block
        #   style: text-center text-white
        feature_block_content:
          position: "right"
          type: "image"
          image_content_path: /assets/images/breadcrumb-image.jpg
          title: Feature Block 2
          text: >
            A feature block with an image.
          custom_include: test/feature_block.html
          buttons:
            - title: Button 1
              url: /about/
              style: btn-primary
            - title: Button 2
              url: /about/
              style: btn-primary
  - row: container_row
    #style: new
    sections:
      - format: title
        title_content:
          text: Feature Block Row
          size: h2
      - format: feature_block
        style: dotted
        feature_block_content:
          position: "left"
          type: "slider"
          slider_content:
            lightbox_enabled: true
            seconds_per_slide: 5
            nav: true
            dots: false
            xs_items: 1
            sm_items: 1
            md_items: 1
            lg_items: 1
            items:
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
              - image: /assets/images/breadcrumb-image.jpg
                alt: Background Image
                title: Background Image 1
          title: Feature Block
          text: >
            A feature block with an owl carousel slider.
          buttons:
            - title: Button 1
              url: /about/
              style: btn-primary
            - title: Button 2
              url: /about/
              style: btn-primary
      - format: feature_block
        #   style: text-center text-white
        feature_block_content:
          position: "right"
          type: "image"
          image_content_path: /assets/images/breadcrumb-image.jpg
          title: Feature Block
          text: >
            A feature block with an image.
          buttons:
            - title: Button 1
              url: /about/
              style: btn-primary
            - title: Button 2
              url: /about/
              style: btn-primary
      - format: feature_block
        #   style: text-center text-white
        feature_block_content:
          position: "left"
          type: "youtube_video"
          youtube:
            url: https://www.youtube.com/watch?v=QH2-TGUlwu4
            poster_image: /assets/images/breadcrumb-image.jpg
          title: Feature Block (with youtube video)
          text: >
            This is a feature block using a youtube video for the featured content.
          buttons:
            - title: Button 1
              url: /about/
              style: btn-primary
            - title: Button 2
              url: /about/
              style: btn-primary
  - row: container_row
    #style: new
    sections:
      - format: title
        title_content:
          text: Slider Row Example
          size: h2
      - format: slider
        style: customCSS
        slider_content:
          lightbox_enabled: true
          seconds_per_slide: 5
          nav: true
          dots: false
          xs_items: 1
          sm_items: 2
          md_items: 4
          lg_items: 6
          items:
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
            - image: /assets/images/breadcrumb-image.jpg
              alt: Background Image
              title: Background Image 1
  - row: full_width_row
    #style: new
    sections:
      - format: title
        title_content:
          text: Slider Row Example (Full Width)
          size: h2
      - format: text
        style: text-center
        text_content:
          text: Some block of text to describe something about such and such...
      - format: slider
        style: customCSS
        slider_content:
          lightbox_enabled: true
          seconds_per_slide: 5
          nav: true
          dots: false
          xs_items: 1
          sm_items: 3
          md_items: 6
          lg_items: 9
  - row: custom_include_row
    source: examples/custom_include_row.html
---
