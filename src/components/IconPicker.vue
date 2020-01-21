<template>
  <aam-select
    v-model="icon"
    filterable
    popper-class="iconPickerWrapper no-arrow"
    clearable
    ref="iconPicker"
    @change="$emit('change', icon)"
  >
    <aam-option v-for="item in icons" :value="item" :key="item" width="500">
      <i :class="[item]" :title="item" />
    </aam-option>
  </aam-select>
</template>
<script>
export default {
  name: "IconPicker",
  data() {
    return {
      icon: null,
      icons: [
        "aam-icon-p2-star-active",

        "aam-icon-p2-brand-producer",

        "aam-icon-p2-brand-aam-text",

        "aam-icon-p2-brand-auditor",

        "aam-icon-p2-content-feature",

        "aam-icon-p2-content-automation",

        "aam-icon-p2-content-trailer",

        "aam-icon-p2-content-other",

        "aam-icon-p2-content-advert",

        "aam-icon-p2-content-rating",

        "aam-icon-p2-brand-screenwriter",

        "aam-icon-p2-status-draft-checked",

        "aam-icon-p2-status-disconnected",

        "aam-icon-p2-status-checked",

        "aam-icon-p2-status-draft",

        "aam-icon-p2-status-warning",

        "aam-icon-p2-status-error",

        "aam-icon-p2-information",

        "aam-icon-p2-arrow-merge",

        "aam-icon-p2-arrow-diverge",

        "aam-icon-p2-arrow-down",

        "aam-icon-p2-rotate",

        "aam-icon-p2-expand",

        "aam-icon-p2-arrow-left",

        "aam-icon-p2-arrow-up",

        "aam-icon-p2-arrow-right",

        "aam-icon-p2-ellipsis",

        "aam-icon-p2-eye",

        "aam-icon-p2-eye-off",

        "aam-icon-p2-home",

        "aam-icon-p2-menu",

        "aam-icon-p2-search",

        "aam-icon-p2-trash",

        "aam-icon-p2-chart-pie",

        "aam-icon-p2-briefcase",

        "aam-icon-p2-chat-bubbles",

        "aam-icon-p2-phone",

        "aam-icon-p2-pages",

        "aam-icon-p2-clipboard-check",

        "aam-icon-p2-clipboard-person",

        "aam-icon-p2-add-circle",

        "aam-icon-p2-add",

        "aam-icon-p2-caret-down",

        "aam-icon-p2-caret-down-double",

        "aam-icon-p2-caret-left",

        "aam-icon-p2-caret-left-double",

        "aam-icon-p2-caret-right",

        "aam-icon-p2-caret-right-double",

        "aam-icon-p2-caret-up",

        "aam-icon-p2-cancel",

        "aam-icon-p2-check",

        "aam-icon-p2-minus-circle",

        "aam-icon-p2-share",

        "aam-icon-p2-caret-up-double",

        "aam-icon-p2-calendar",

        "aam-icon-p2-calendar-time",

        "aam-icon-p2-info",

        "aam-icon-p2-download-harddrive",

        "aam-icon-p2-wifi-off",

        "aam-icon-p2-wifi",

        "aam-icon-p2-chair-theater",

        "aam-icon-p2-clapboard",

        "aam-icon-p2-clapboard-off",

        "aam-icon-p2-star",

        "aam-icon-p2-projector",

        "aam-icon-p2-ticket",

        "aam-icon-p2-file-off",

        "aam-icon-p2-redeye",

        "aam-icon-p2-tune-alt",

        "aam-icon-p2-map-location",

        "aam-icon-p2-pin",

        "aam-icon-p2-team",

        "aam-icon-p2-user-circle",

        "aam-icon-p2-city",

        "aam-icon-p2-forward",

        "aam-icon-p2-play-library",

        "aam-icon-p2-block",

        "aam-icon-p2-key",

        "aam-icon-p2-stopsign-alert",

        "aam-icon-p2-warning",

        "aam-icon-p2-padlock",

        "aam-icon-p2-bell-ring",

        "aam-icon-p2-time",

        "aam-icon-p2-bell",

        "aam-icon-p2-braille",

        "aam-icon-p2-hammer-screwdriver",

        "aam-icon-p2-show",

        "aam-icon-p2-request",

        "aam-icon-p2-assign",

        "aam-icon-p2-edit",

        "aam-icon-p2-delete",

        "aam-icon-p2-settings1",

        "aam-icon-p2-address",

        "aam-icon-p2-agents",

        "aam-icon-p2-server",

        "aam-icon-p2-earth",

        "aam-icon-p2-layout-grid",

        "aam-icon-p2-mail-letter",

        "aam-icon-p2-target",

        "aam-icon-p2-unsorted",

        "aam-icon-p2-link",

        "aam-icon-p2-rating",

        "aam-icon-p2-filter",

        "aam-icon-p2-filter-active",

        "aam-icon-p2-status-dispatched",

        "aam-icon-p2-published",

        "aam-icon-p2-levels",

        "aam-icon-p2-pending"
      ]
    };
  },
  mounted() {
    const { width } = this.$el.getBoundingClientRect();
    document.querySelector(".iconPickerWrapper").style.width = width ? `${width}px` : "auto";
    // document.querySelector(".iconPickerWrapper").style.width = 'auto';
  },
  methods: {}
};
</script>
<style lang="scss">
.aam-select {
  width: 100%;
}
.iconPickerWrapper {
  .aam-select-dropdown__list {
    min-width: 360px;
    display: flex;
    flex-wrap: wrap;
    .aam-select-dropdown__item {
      width: 72px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 24px;
      }
    }
  }
}
</style>
