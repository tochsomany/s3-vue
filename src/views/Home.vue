<template>
    <div>
        <h1>{{ $t('message.home') }}</h1>
        <h2>{{ $t('message.hello') }}</h2>
        <router-link to="/about">{{ $t('message.gotoabout') }}</router-link>
    </div>
</template>