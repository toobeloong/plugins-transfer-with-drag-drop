<template>
  <el-row :gutter="32">
    <el-col :span="12">
      <h3>Draggable 1</h3>
      <draggable
        v-model="list1"
        class="list-group1"
        :options="{
          ...options,
          multiDrag: true,
          selectedClass: 'selected'
        }"
      >
        <transition-group>
          <div class="list-group-item" v-for="element in list1" :key="element.name">
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </el-col>

    <el-col :span="12">
      <h3>Draggable 2</h3>
      <draggable
        v-model="list2"
        class="list-group2"
        :options="{
          ...options
        }"
      >
        <transition-group>
          <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
            @click="() => remove2(element, index)"
          >
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </el-col>
  </el-row>
</template>
<script>
import draggable from "../utils/vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",
  components: {
    draggable
  },
  data() {
    return {
      options: {
        animation: 0,
        ghostClass: "ghost",
        group: "group"
      },
      list1: [
        { name: "1", id: 1 },
        { name: "2", id: 2 },
        { name: "3", id: 3 },
        { name: "4", id: 4 }
      ],
      list2: [
        { name: "5", id: 5 },
        { name: "6", id: 6 },
        { name: "7", id: 7 }
      ]
    };
  },
  methods: {
    remove2(row, index) {
      this.list2.splice(index, 1);
      this.list1.push(row);
      console.log("remove 2 ", row);
    },
    add(row) {
      console.log(row);
      if (row.items.length > 1) {
        console.log("操作多个");
      } else {
        // 当只操作一个的是时候
        console.log("只操作一个");
        console.log(row.oldIndex, "->", row.newIndex);
        // this.list2.splice(row.newIndex, 0, this.list1[row.oldIndex]);
        console.log("delete list1", row.oldIndex);
        // this.list1.splice(row.oldIndex, 1);
      }
      console.log("list 1");
      console.log(JSON.stringify(this.list1));
      console.log("list 2");
      console.log(JSON.stringify(this.list2));
    },
    async add2(row) {
      // save the full data
      const originList = JSON.parse(JSON.stringify(this.list1));
      console.log("add 2", row);
      // deal with list2
      // deal with list1
      if (row.items.length > 1) {
        await row.oldIndicies.map((item, index) => {
          console.log(
            index,
            item.index,
            "->",
            row.newIndicies[index].index,
            originList[item.index].name
          );
          console.log("origin results", JSON.stringify(this.list2));
          this.list2.splice(row.newIndicies[index].index, 0, originList[item.index]);
          console.log("results", JSON.stringify(this.list2));
          return true;
        });
        let old = JSON.parse(JSON.stringify(row));
        let list = old.oldIndicies.sort((a, b) => a.index > b.index);
        console.log("sort list ", list);
        await list.map(item => {
          this.list1.splice(item.index, 1);
          return true;
        });
      } else {
        this.list2.splice(row.newIndex, 0, originList[row.oldIndex]);
        // 直接拖拽
        this.list1.splice(row.oldIndex, 1);
      }
      console.log("list1", this.list1);
      console.log("list2", this.list2);
    },
    log(evt) {
      console.log("log", evt);
    }
  }
};
</script>
<style lang="scss">
.list-group,
.list-group1,
.list-group2 {
  border: 1px solid #f5f5f5;
  padding: 16px;
  > span {
    display: block;
    min-height: 300px;
  }
}
.list-group1,
.list-group {
  .list-group-item {
    &.selected {
      background-color: rgba(255, 0, 0, 0.2);
    }
  }
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
.el-card {
  transition: none;
}
.ghost {
  opacity: 0.5;
  background: #fff;
  box-shadow: none;
  border: 1px solid #f5f5f5;
}
.list-group-item {
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
  background-color: #fff;
}
</style>
