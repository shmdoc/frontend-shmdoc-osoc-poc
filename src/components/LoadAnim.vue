<template>
  <div class="box">
    <transition name="load">
      <div v-if="show" class="ball"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  created() {
    setInterval(() => {
      this.show = !this.show
    }, 500)
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  widht: 20px;
  height: 20px;
}
.ball {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%
}
.load-enter, .load-leave-to {
  width: 15px;
  height: 15px;
}
.load-enter-active, .load-leave-active {
  transition: all 0.5s;
}
</style>
