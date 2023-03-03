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

## sql
``` sql
  declare vv_user_name varchar2(80) := 'chun-reean';
  declare vv_user_auth varchar2(4) := 'LV99';
  ...
```

## html
``` html
  <code> dynamic code </code>
  ...
```

## scss
``` css
  $base-color: #c6538c;
  $border-dark: rgba($base-color, 0.88);

  .alert {
    border: 1px solid $border-dark;
  }
  ...
```