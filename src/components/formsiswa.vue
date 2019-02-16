<template>
	<div>
	<h1>Form Siswa</h1>
	<router-link to="/siswa">Kembali</router-link>
	<center>
  <br><br>
  <fieldset>
  nama:
<input type="text" name="nama">
<br>
kelas:
<input type="text" name="kelas">
<br>
Jenis Kelamin:
<select>
  <option value="Laki-laki">Laki-Laki</option>
  <option value="Perempuan">Perempuan</option>
</select>
<br>
tanggal lahir:
<input type="date" name="tanggal">
</fieldset>
</center>
	</div>
	</template>
