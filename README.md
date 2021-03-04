# 개발자 이안의 introduce 블로그 입니다

- 해당 블로그는 개인의 `포트폴리오` 입니다
- 해당 블로그는 `mark-down` 문법을 통해 작성 되었습니다
- 해당 블로그의 포트폴리오는 [release note](../../releases) 에서 pdf 파일로 다운로드 받을 수 있습니다
- 해당 블로그 방문 => [zewtion.github.io/intro](https://zewtion.github.io/intro)
- 기술 블로그 방문 => [zewtion.github.io](https://zewtion.github.io)

## 블로그 구조

``` blog
├─ README.md( welcome page )
├─ 포트폴리오
│  ├─ 자기소개
│  ├─ 학생이력
│  └─ 회사이력
├─ Code style
├─ Play ground
└─ like tools
```

> `Play ground` 에 정의된 내용은 [zewtion.github.io](https://zewtion.github.io) 에서 구현 된 내용을 확인 할 수 있습니다

## shell word

_intro 블로그 자주 사용하는 명령어

```bash
> sh deploy.sh // 빌드 및 배포
> yarn docs:dev // 로컬서버 실행
> yarn docs:build // 작성내용 빌드
```

## Thanks to

_개발에 도움을 주신 도구들..

```vue
<template>
    <div v-model="editor"> vs code </div>
    <div v-model="api"> vuepress </div>
    <div v-model="lang"> mark down </div>
    <div v-model="server"> github page </div>
</template>
```
