import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/siswa'
import Kelas from '@/components/kelas'
import formsiswa from '@/components/formsiswa'
import formkelas from '@/components/formkelas'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/siswa',
		name: 'Siswa',
		component : Siswa
	},
	{
		path: '/kelas',
		name: 'Kelas',
		component: Kelas
	},
	{
		path: '/form-siswa',
		name: 'form-siswa',
		component : formsiswa
	},
	{
		path: '/form-kelas',
		name: 'form-kelas',
		component: formkelas
	}
	]
})
