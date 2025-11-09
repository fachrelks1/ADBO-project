class Storeitem {
    constructor(nama, harga) {
        this.nama = nama;
        this.harga = harga;
    }
    info() {
        console.log(
        `${this.nama}  ini harganya ${this.harga}`
        );
    }
}

const storeitem = new Storeitem("PC", 200000000);
storeitem.info()