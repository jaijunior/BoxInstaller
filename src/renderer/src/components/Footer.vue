<template>
    <footer class="container-fluid">
        <div class="row h-100 w-100 align-items-center">

            <div class="col-5 ">
                <button class="btn btn-danger btn-sm" @click="cancelInstallation">Cancelar</button>
            </div>

            <div class="col-2 offset-3" v-if="currentPage != '/'">
                <button class="btn btn-primary btn-sm" @click="backPage">Voltar</button>
            </div>
            <div class="col-2 offset-3" v-else>
                <button class="btn btn-primary btn-sm" disabled>Voltar</button>
            </div>
            <div class="col-2" v-if="currentPage != '/SelectInstallationMethod'">
                <button class="btn btn-primary btn-sm" @click="nextPage">Avancar</button>
            </div>
            <div class="col-2" v-else>
                <button class="btn btn-primary btn-sm" disabled>Avancar</button>
            </div>
        </div>
    </footer>
</template>

<script>
import Alert from '../components/Alerts/Alert.js'
export default {
    name: "Footer",
    data() {
        return {
            processHandle: {
                1:"/",
                2:"SelectInstallationMethod"
            }
        }
    },
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
                this.$router.push('/SelectInstallationMethod')
                console.log("teste")
            }
        },
        backPage() {
            switch (this.currentPage) {
                case "/SelectInstallationMethod":
                    this.$router.push('/')
                    break
                default:
                    console.log("NULL")
            }
        },
        async cancelInstallation () {
            const alert = new Alert()
            await alert.standartAlert("Cancelar", "TODO: Necessario criar junto com IPC")
        }
    }
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 10vh;
    background-color: #b4bccc;
}
</style>
