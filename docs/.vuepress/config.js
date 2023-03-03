// const path = require("path");
const { version } = require("../../package.json");

module.exports = {
  base: '/intro/',
  plugins: [],
  locales: {
    "/": {
      lang: "ko-KR",
      title: "vcjoo intro page",
      description:
        "Programmer vcjoo"
    }
  },
  themeConfig: {
    repo: "zewtion/intro",
    docsDir: "docs",
    locales: {
      "/": {
        label: "Korean",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        nav: [
          {
            text: "Release Notes",
            link: "https://github.com/zewtion/intro/releases"
          }
        ],
        sidebar: [
          "/i/",
          "/code-style/",
          "/play-ground/",
          "/like-tools/"
        ]
      }
    }
  }
};
