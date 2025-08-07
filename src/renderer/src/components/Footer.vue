<template>
    <footer class="container">
        <div class="row h-100 align-items-center">
            <div class="col-6">
                <button class="btn btn-danger btn-sm">Cancelar</button>
            </div>
            <div class="col-2">
                <button class="btn btn-primary btn-sm">Voltar</button>
            </div>
            <div class="col-2">
                <button class="btn btn-primary btn-sm" @click="nextPage">Avancar</button>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    computed: {
        currentPage() {
            return this.$route.path
        },
    },
    methods: {
        nextPage() {
            const currentPage = this.currentPage
            console.log(currentPage)
            if (currentPage == '/') {
                console.log("ok")
            }
        }
    }
}
</script>

<style scoped>
footer {
    width: 98%;
    height: 15vh;
    background-color: #b4bccc;
}
</style>
