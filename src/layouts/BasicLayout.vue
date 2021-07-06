<template>
    <div>
        <Header/>
        <Sidermenu/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Sidermenu from './SiderMenu.vue'

export default ({
    components: {
        Header, 
        Footer,
        Sidermenu
    }
})
</script>
