<template>
	<div>
	<h1>Form Kelas</h1>
	<router-link to="/kelas">Kembali</router-link>
	<center>
  <br><br>
  <fieldset>
  Kelas:
<select>
<option value="X">X</option>
<option value="XI">XI</option>
<option value="XII">XII</option>
</select>
<br>
Wali Kelas:
<input type="text" name="wakil">
<br>
Jumlah Murid:
<input type="text" name="jam">
<br>
Jurusan:
<select>
	<option value="RPL">RPL</option>
	<option value="TKJ">TKJ</option>
	<option value="MM">MM</option>
  <option value="TOI">TOI</option>
  <option value="AV">AV</option>
  <option value="TITL">TITL</option>
</select>
</fieldset>
</center>
	</div>
	</template>
