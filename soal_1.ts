// fungsi cetak segitiga sesuai soal no 1
function cetakPolaSegitiga(nim: string): void {
  const digitTerakhir: number = parseInt(nim.slice(-1), 10);

  if (isNaN(digitTerakhir)) {
    console.log("NIM tidak valid.");
    return;
  }

  if (digitTerakhir === 0) {
    console.log("Digit terakhir adalah 0, tidak ada segitiga yang dicetak.");
    return;
  }

  for (let baris = 1; baris <= digitTerakhir; baris++) {
    let teksBaris: string = "";

    for (let kolom = 1; kolom <= baris; kolom++) {
      teksBaris += kolom + " ";
    }

    console.log(teksBaris.trim());
  }
}

const nimMahasiswa: string = "053764084";
cetakPolaSegitiga(nimMahasiswa);
