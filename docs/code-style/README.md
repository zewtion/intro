# 코드 스타일

## javascript
``` js
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          this.list.splice(evt.newIndex, 0, targetRow)
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    }
```

## java
``` java
    private final static String MY_NAME = "chun-reean";
    
    public boolean getIsMyanme(String _name) {
        logs.info("show my name: {}", this.MY_NAME);
        return this.MY_NAME.equals(_name) ? 1 : 0;
    }
    ...
```

## oracle
``` sql
    declare vv_user_name varchar2(80) := 'chun-reean';
    declare vv_user_auth varchar2(4) := 'LV99';
    ...
```

## text
``` txt
    # 프로젝트 메세지 테이블 공유요청 드립니다 

    안녕하세요, 박천주 입니다.
    공통으로 사용되는 메세지 테이블명을 알고 싶은데요,
    테스트 기간에 실제로 메세지가 발송되지 않아 구현이 잘 되었는지 확인이 어렵습니다.

    테아블에 실제로 데이터가 잘 들어갔는지 확인이 필요합니다.
    공통 메세지 테이블명 공유를 부탁 드립니다 !

    감사합니다. 
```