// fungsi cetak deret aritmatika sesuai soal no 2
function cetakDeretAritmatika(nim: string): void {
  const angkaAwal: number = parseInt(nim.slice(-2), 10);
  const digitKetigaBelakang: number = parseInt(nim.slice(-3, -2), 10);

  if (isNaN(angkaAwal) || isNaN(digitKetigaBelakang)) {
    console.log("NIM tidak valid.");
    return;
  }

  const beda: number = digitKetigaBelakang + 1;
  const jumlahAngka: number = 10;
  let hasilDeret: number[] = [];

  for (let indeks = 0; indeks < jumlahAngka; indeks++) {
    const sukuSaatIni: number = angkaAwal + indeks * beda;
    hasilDeret.push(sukuSaatIni);
  }

  console.log(hasilDeret.join(", "));
}

const nimMahasiswa: string = "053764084"; // nim saya a.n Suranta
cetakDeretAritmatika(nimMahasiswa);
