<template>
	<NcContent app-name="kmaapp" :navigation-class="{ 'icon-loading': loadingAddGroup }">
		<NcAppNavigation>
			<template #list>
				<NcAppNavigationItem id="qlnd"
					:exact="true"
					:title="t('kmaapp', 'Quản lý người dùng')"
					:to="{ name: 'users' }"
					icon="icon-contacts-dark">
				</NcAppNavigationItem>
                <NcAppNavigationItem id="qldt"
					:exact="true"
					:title="t('kmaapp', 'Quản lý đào tạo')"
					:to="{ name: 'daotao' }"
					icon="icon-contacts-dark">
				</NcAppNavigationItem>
                <NcAppNavigationItem id="qlct"
					:exact="true"
					:title="t('kmaapp', 'Quản lý công tác')"
					:to="{ name: 'congtac' }"
					icon="icon-contacts-dark">
				</NcAppNavigationItem>
                <NcAppNavigationItem id="qlnp"
					:exact="true"
					:title="t('kmaapp', 'Quản lý nghỉ phép')"
					:to="{ name: 'nghiphep' }"
					icon="icon-contacts-dark">
				</NcAppNavigationItem>
                <NcAppNavigationItem id="qlhd"
					:exact="true"
					:title="t('kmaapp', 'Quản lý hợp đồng')"
					:to="{ name: 'hopdong' }"
					icon="icon-contacts-dark">
				</NcAppNavigationItem>
			</template>
		</NcAppNavigation>
		<!-- <NcAppContent>
			<UserList :users="users"
				:show-config="showConfig" />
		</NcAppContent> -->
	</NcContent>
</template>

<script>
import { NcAppContent } from '@nextcloud/vue'
import { NcAppNavigation } from '@nextcloud/vue'
import { NcAppNavigationItem } from '@nextcloud/vue'
import { NcContent } from '@nextcloud/vue'
import Vue from 'vue'
// import UserList from '../components/UserList'
export default {
	name: 'NavBar',
	components: {
		NcAppContent,
		NcAppNavigation,
		NcAppNavigationItem,
		NcContent,
		// UserList,
	},
	// props: {
	// 	selectedGroup: {
	// 		type: String,
	// 		default: null,
	// 	},
	// },
	// computed: {
	// 	users() {
	// 		return this.$store.getters.getUsers
	// 	},
	// 	usersOffset() {
	// 		return this.$store.getters.getUsersOffset
	// 	},
	// 	userCount() {
	// 		return this.$store.getters.getUserCount
	// 	},
	// 	kmaapp() {
	// 		return this.$store.getters.getServerData
	// 	},
	// },
	// beforeMount() {
	// 	this.$store.commit('initGroups', {
	// 		groups: this.$store.getters.getServerData.groups,
	// 		orderBy: this.$store.getters.getServerData.sortGroups,
	// 		userCount: this.$store.getters.getServerData.userCount,
	// 	})
	// 	this.$store.dispatch('getPasswordPolicyMinLength')
	// },
	// created() {
	// 	// init the OCA.kmaapp.UserList object
	// 	// and add the registerAction method
	// 	Object.assign(OCA, {
	// 		kmaapp: {
	// 			UserList: {
	// 				registerAction: this.registerAction,
	// 			},
	// 		},
	// 	})
	// },
	// methods: {
	// 	showNewUserMenu() {
	// 		this.showConfig.showNewUserForm = true
	// 		if (this.showConfig.showNewUserForm) {
	// 			Vue.nextTick(() => {
	// 				window.newusername.focus()
	// 			})
	// 		}
	// 	},
    // },
}
</script>