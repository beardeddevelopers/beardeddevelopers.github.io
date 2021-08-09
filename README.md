# Source to beardeddevelopers.com

This is a static site generating HTML, CSS, and JS files to host remotely on a static webserver (such as Github Pages).

It's a simple NextJS 11 site with really two packages (listed below).

## Requirements

NodeJS v12+ installed globally, or with `nvm`.

## Setup

Install the nodejs dependencies local to this directory:

    npm i

## Preview (development mode)

You can start the NextJS development webserver that supports live-reload as you are developing.

    npx next dev

## Administration

We are using NetlifyCMS as the admin tool. It's a static site admin tool that uses GitHub Accounts to login, and manage the content.

The content gets published directly back to github repo, where the static site is re-built and re-deployed on every commit.

<https://beardeddevelopers.com/admin>

Only those with Github Write access to the repository will be allowed to write and update.

## Build and Deployment

This repo uses Github Actions to automatically build and deploy on every commit to `master` branch.

However, if you want to build and verify locally, you can perform these actions:

    # build a Production site
    npx next build

    # generate a full static site
    npx next export

You should now have the entire static site built and servable from the `out/` directory (which is in `.gitignore` btw, so not to commit).

If you want to view the production build of the site:

    npx -y http-server out/

### Deploying

Normally to deploy, you would not be pushing the `out/` directory.

We have Github Actions that will take the latest commits to `master`, and run the `build` and `export` commands, and `git push` just the `out/` directory to the special branch named `gh-pages`.

The repo is configured to serve up the `gh-pages` branch.

## Generate/Refresh favicon, apple-touch, android icons, etc

The package `cli-real-favicon` is used to take a single (large-ish) image and upload it to a remote service to generate all of the favicon, android, and apple icon files to be compliant with current standards.

This has already been done. But, it is here for future reference/refreshing.

    # generate images and cache data
    npx real-favicon generate \
      favicon-descriptors.json \
      favicon-data.json \
      public/

    # inject into an HTML file
    npx real-favicon inject \
      favicon-data.json \
      public/ \
      public/favicon.html

    # check for updates (from time to time, e.g. CICD)
    npx real-favicon check-for-update \
      --fail-on-update \
      favicon-data.json

NOTE: Cross-device requirements means it has to be in root `/`, as ugly as that is. :(

## Refresh the Sitemap

The package `next-sitemap` is used to generate the sitemap. NextJS is configured to run it on every build in the `next.config.js` webpack scripts.

However, if you want to run it manually:

    npx next-sitemap

Currently, it will only export all pages (e.g. index.html). If you want to filter, use the `next-sitemap.js` file.
