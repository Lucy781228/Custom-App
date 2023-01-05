<template>
	<router-view />
</template>

<script>
export default {
	name: 'App',
	beforeMount() {
		// importing server data into the store
		const serverDataElmt = document.getElementById('serverData')
		if (serverDataElmt !== null) {
			this.$store.commit('setServerData', JSON.parse(document.getElementById('serverData').dataset.server))
		}
	},
}
</script>