// const path = require("path");
const { version } = require("../../package.json");

module.exports = {
  head: [
    // [
    //   "script",
    //   {
    //     src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"
    //   }
    // ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"
      }
    ],
    [
      "script",
      {
        src: "https://unpkg.com/quill"
      }
    ],
    [
      "script",
      {
        src: `https://unpkg.com/vue2-editor@${version}`
      }
    ]
  ],
  plugins: [ 
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "vcjoo devlog intro",
      description:
        "vcjoo:: introduce my develog"
    }
  },
  themeConfig: {
    repo: "zewtion/intro",
    docsDir: "docs",
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        nav: [
          {
            text: "Release Notes",
            link: "https://github.com/zewtion/intro/releases"
          }
        ],
        sidebar: [
          // "/installation.md",
          "/guide.md",
          "/examples/",
          "/api.md"
          // "/notes.md"
        ]
      }
    }
  }
};
