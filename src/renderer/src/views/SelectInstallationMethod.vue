<template>
  <main class="container-fluid flex-column justify-content-center align-items-center">
    <div class="row text-center pt-4">
      <div class="col-12">
        <h1>O que voce deseja instalar?</h1>
      </div>      
    </div>
    <div class="row text-center pt-5">
      <div class="col-4">
        <InstallerMethodButton icon="bi bi-cart3" description="CAIXA"/>
      </div>
      <div class="col-4">
        <InstallerMethodButton icon="bi bi-graph-up-arrow" description="RETAGUARDA"/>
      </div>
      <div class="col-4">
        <InstallerMethodButton icon="bi bi-database-add" description="CAIXA SERVIDOR"/>
      </div>       
    </div>
  </main>
</template>

<script>
import InstallerMethodButton from '../components/Buttons/InstallerMethodButton.vue';
export default {
  name: 'SelectInstallationMethod',
  components: {
    InstallerMethodButton
  }
}
</script>

<style scoped>
</style>