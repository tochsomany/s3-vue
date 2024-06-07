<template>
    <div>
        <router-link to="/">{{ $t('message.home') }}</router-link> &nbsp;
        <router-link to="/about">{{ $t('message.about') }}</router-link> &nbsp;
        <router-link to="/service">{{ $t('message.service') }}</router-link> &nbsp;
        <router-link to="/contact">{{ $t('message.contact') }}</router-link> &nbsp;
        <router-link to="/upload">{{ $t('message.upload') }}</router-link> &nbsp;
        <router-link :to="`/user/${userid}`">{{ $t('message.user') }}</router-link> &nbsp;
        <router-link to="/login">{{ $t('message.login') }}</router-link>&nbsp;
        <button @click="changeLanguage">{{ lang }}</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                userid : 123,
                lang: 'kh'
            }
        },
        methods: {
            changeLanguage(){
                this.$i18n.locale == "en" ? this.$i18n.locale = "kh" : this.$i18n.locale = "en"
                this.lang == "en" ? this.lang = "kh" : this.lang = "en"
            }
        },
    }
</script>