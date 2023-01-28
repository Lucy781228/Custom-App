<template>
    <div>
      <div class="tabs">
        <div v-for="(tab, index) in tabs" :key="index" @click="selectedTab = index" :class="{ active: selectedTab === index }">
          {{ tab.title }}
        </div>
      </div>
      <div class="tab-content">
        <component :is="tabs[selectedTab].component"></component>
      </div>
    </div>
  </template>
  
  <script>
  import CanBo from './CanBo'
  import CongTac from './CongTac'
  import KhenThuong from './KhenThuong'
  export default {
    name: "TabMenu",
    data() {
      return {
        selectedTab: 0,
        tabs: [
          { title: 'Cán Bộ', component: 'CanBo' },
          { title: 'Công Tác', component: 'CongTac' },
          { title: 'Khen Thưởng', component: 'KhenThuong' },
        ],
      }
    },
    components: {
      CanBo,
      CongTac,
      KhenThuong,
    },
  }
  </script>
  
  <style>
  .tabs {
    display: flex;
  }
  
  .tabs > div {
    padding: 10px;
    cursor: pointer;
  }
  
  .tabs > div.active {
    background-color: #f5f5f5;
  }
  </style>
