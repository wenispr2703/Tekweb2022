<!DOCTYPE html>
<html>
<head>
    <title>Form Biodata</title>
</head>
<body>
    <form action="contact.php" method="POST">
	    <fieldset>
		<legend>Biodata Mahasiswa<?legend>
		<p>
		    <label>NIM:</label>
			<input type="text" name="NIM" placeholder="Masukkan NIM"
		</p>
        <p>
            <label>Nama:</label>
            <input type="text" name="Nama" placeholder="Masukkan Nama" />
        </p>
        <p>
		    <label>Jenis kelamin:</label><br>
            <label><input type="radio" name="jenis_kelamin" value="laki-laki" /> Laki-laki</label><br>
            <label><input type="radio" name="jenis_kelamin" value="perempuan" /> Perempuan</label><br>
        </p>
		<p>
            <label>Alamat:</label><br>
            <textarea name="Alamat" >
			</textarea>
        </p>
		<p>
            <label>Program Studi:</label><br>
            <select name="Program Studi">
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Fisika">Fisika</option>
                <option value="Kimia">Kimia</option>
                <option value="Biologi">Biologi</option>
            </select>
        </p>
		<p>
		    <label>Pemrograman yang dikuasai:</label><br>
            <label><input type="checkbox" name="Program_yang_dikuasai" value="C++" /> C++</label>
            <label><input type="checkbox" name="Program_yang_dikuasai" value="Javascript" /> Javascript</label>
			<label><input type="checkbox" name="Program_yang_dikuasai" value="Python" /> Python</label>
        </p>
		<p>
            <input type="submit" name="submit" value="Simpan" />
            <input type="submit" name="submit" value="Cancel" />
        </p>
		</fieldset>
    </form>
</body>
</html>
