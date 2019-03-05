# Readme

## Install + Run

    npm install
    npm run build-dev
    npm start

## Technical Choices

I chose to use React/Redux with a Scss pre-processor for CSS. I used a homebuilt boilerplate to get started.

## Evaluation Choice - Tooling

I decieded to try using my own boilerplate react library I have been testing and improving upon. The intention of the boilerplate is to provide a set of tools and a project schema that make responsive website design fast and enjoyable to develop.

Primarily this includes:
    * A dev wrapper that runs the primary app in an iFrame and has configurable breakpoints (see ./config/ to modify and disable wrapper)
    * A breakpoint reducer sensitive to page width, passing easy to develop css classes to all components
    * A Duck / Page / Component / Asset project structure.

## Guidance from the design team

> "These images should be displayed on the page as a set of thumbnails; clicking on a thumbnail should display a full-sized image to the user."

> "Full-size photos should be able to be closed, and the user should be returned to the thumbnail gallery."

Thumbnails are available at given sizes and a user can click/tap images to view them, and they can close the modal by clicking/tapping the modal. Cross platform responsiveness to phone, tablet, Desktop, and 4k sizes exist.

## Requirements from the adoption team

> "Starting next month, we'll be partnering with a shelter that has 2000 pets available for adoption. We need this page to be able to handle that many listings."

To aid with image loading I pushed all the images onto the event loop by creating image elements on-mount inside the Thumnail components. Once the image has loaded, it is added to the dom into it's own container. When more images become available, I would host the images as both thumbnails (200-400px) for the gallery, and the high-res image for the full preview. If nessesary, additional lazy loading could be added based on the current scroll position, and the size of the window to retrieve thumbnails in 50-100 chunks to further improve performance.

> "Most people find out about us from internet searches. We need this page to appear towards the top of search results."

I am not too familiar with all the techniques to improve searching rankings - however I added a friendly page title, meta site description, and an external link which should help. Would love to learn more in this area!