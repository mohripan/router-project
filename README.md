# routerproject

## Pengenalan Project
Ini adalah project untuk `vue-routing`. Vue-routing ini direncanakan akan menggunakan `API` dan memiliki kegunaan untuk memasukkan siswa beserta kelas ke dalam `API` tersebut.

## Cara Install
1. Clone project di atas
2. Extract Files tersebut, lalu pindahan ke tempat yang diinginkan
3. Ketika sudah diarahkan ke file tersebut, maka buka _cmd_ lalu arahkan _cmd_ tersebut ke file yang tadi
4. Install *node_modules* dengan cara ketik: **npm install**
5. Install *vue_router* dengan cara ketik: **npm install vue-router**
6. Setelah proses instalasi selesai, maka langsung ketik saja: **npm run serve**
7. Biasanya akan muncul link untuk menjalankan `project-vue` tersebut, seperti contoh di bawah ini :

```
App running at:
- Local: localhost:8081/
- Network: your.ip:8081/
```

## Code di dalam aplikasi

### Router index.js

```
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

```

### Fungsi
Di dalam koding tersebut berguna untuk membuat fungsi `vue-routing` ini dapat berjalan dengan lancar. Setiap **Path** Memiliki fungsi dimana **Path** tersebut akan mengarahkan kodingan ke dalam komponen-komponen yang berada di dalam project.
