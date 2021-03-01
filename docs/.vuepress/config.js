// const path = require("path");
const { version } = require("../../package.json");

module.exports = {
  base: '/intro/',
  plugins: [],
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
          "/profile.md"
          // "/notes.md"
        ]
      }
    }
  }
};
