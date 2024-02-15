<template>
  <div class="menu" ref="menu">
    <button v-for="(item, index) in menuItems" :key="'menu-item-' + index"
      :class="['menu__item', index === activeElementsIndex ? 'menu__item--active' : '']" @click="handleClickItem(index)"
      ref="menuItemRefs[index]">
      <component :is="item.icon" />
    </button>
    <div class="menu__active-indicator" ref="activeIndicator"></div>
    <div class="svg-container">
      <svg viewBox="0 0 202.9 45.5">
        <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0052 0.021978021978022)">
          <path
            d="M 0 0 c 5.7 -0.1 14.1 0.4 23.3 4 c 5.7 2.3 9.9 5 18.1 10.5 c 10.7 7.1 11.8 9.2 20.6 14.3 c 5 2.9 9.2 5.2 15.2 7 c 7.1 2.1 13.3 2.3 17.6 2.1 c 4.2 0.2 10.5 -0.1 17.6 -2.1 c 6.1 -1.8 10.2 -4.1 15.2 -7 c 8.8 -5 9.9 -7.1 20.6 -14.3 c 8.3 -5.5 12.4 -8.2 18.1 -10.5 c 9.2 -3.6 17.6 -4.2 23.3 -4 H 161.2 z" />
        </clipPath>
      </svg>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

const props = defineProps({
  menuItemRefs
})


const activeElementsIndex = ref(0);
const menuItemRefs = ref([]);
const menu = ref(null);
const activeIndicator = ref(null);

const handleClickItem = (index) => {
  activeElementsIndex.value = index;
  props.setActiveTopic(index);

  const root = document.querySelector<HTMLHtmlElement>(":root");
  if (root) {
    root.style.setProperty("--bgColorMenuItem", props.menuItems[index].bgColor);
  }
};

const moveIndicator = (node) => {
  if (!activeIndicator.value || !menu.value) return;

  const offsetActiveItem = node.getBoundingClientRect();
  const left = Math.floor(offsetActiveItem.left - menu.value.offsetLeft - (activeIndicator.value.offsetWidth - offsetActiveItem.width) / 2) + "px";
  activeIndicator.value.style.transform = `translate3d(${left}, 0 , 0)`;
};

onMounted(() => {
  const handleWindowResize = () => {
    const activeNode = menu.value?.querySelector(".menu__item--active");
    if (activeNode) {
      moveIndicator(activeNode);
    }
  };
  // execute once on window reload
  handleWindowResize();

  window.addEventListener("resize", handleWindowResize);
  return () => window.removeEventListener("resize", handleWindowResize);
});
</script>
  
<style scoped>
/* Add your styles here */
</style>
  