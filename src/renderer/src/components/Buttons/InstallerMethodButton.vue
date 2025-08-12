<template>
  <button class="btn btn-primary">
    <div class="row">
      <div class="col">
        <i :class="icon"></i>
      </div>
    </div>
    <div class="row">
      <div class="col">
        {{ description }}
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'InstallerMethodButton',
  props: {
    icon:String,
    description: String
  }
}
</script>

<style scoped>
  button {
    background-color: #072e6d;
    width: 20vw;
    height: 20vh;
    font-size: .8rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  button:hover {
    background-color: #0852A5;
  }
  i {
    font-size: 2rem;
  }
</style>