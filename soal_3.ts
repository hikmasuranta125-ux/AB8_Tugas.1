function cetakBilanganPrima(nim: string): void {
  const duaDigitTerakhir: number = parseInt(nim.slice(-2), 10);

  if (isNaN(duaDigitTerakhir)) {
    console.log("NIM tidak valid.");
    return;
  }

  const batasAkhir: number = duaDigitTerakhir + 10;
  let daftarPrima: number[] = [];

  for (let angka = 2; angka <= batasAkhir; angka++) {
    let adalahPrima: boolean = true;

    for (let pembagi = 2; pembagi <= Math.sqrt(angka); pembagi++) {
        // ciri bilangan prima: cuma habis dibagi oleh dirinya sendiri dan 1, disiini angka start dari 2
      if (angka % pembagi === 0) {
        adalahPrima = false;
        break;
      }
    }

    if (adalahPrima) {
      daftarPrima.push(angka);
    }
  }

  console.log(daftarPrima.join(", "));
}

const nimMahasiswa: string = "053764084";
cetakBilanganPrima(nimMahasiswa);

/* Soalnya
Buatlah Bilangan Prima dari NIM. Ambil 2 digit terakhir NIM dan tambahkan 10,
jadikan batas akhir pencarian bilangan prima.
Buat program TypeScript untuk menampilkan semua bilangan prima dari 1 sampai batas tersebut.

Contoh: NIM 230411013, 2 digit terakhir  yaitu 13 ditambah 10, sehingga menjadi 23 (batas akhir)

Kasus saya: 2 digit terakhir adlah 84, ditambah 10 menjadi 94 sehingga menjadi 94 (batas akhir)
*/