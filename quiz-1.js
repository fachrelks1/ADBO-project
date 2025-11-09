class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  hitungBonus() {
    return 0;
  }
}

class Karyawan_Tetap extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.10; 
  }
}

class Karyawan_Kontrak extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.05; 
  }
}

const budi = new Karyawan_Tetap("Budi", 8000000);
const sita = new Karyawan_Kontrak("Sita", 6000000);

const bonusBudi = budi.hitungBonus();
const bonusSita = sita.hitungBonus();

const totalBonus = bonusBudi + bonusSita;

console.log(` ${budi.nama} = Karyawan Tetap   Rp ${bonusBudi.toLocaleString('id-ID')}`);
console.log(` ${sita.nama} = Karyawan Kontrak Rp ${bonusSita.toLocaleString('id-ID')}`);
console.log(`Total Semua Bonus = Rp ${totalBonus.toLocaleString('id-ID')}`);
