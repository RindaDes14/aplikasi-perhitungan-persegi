function TentukanLuasDanKelilingPersegiPanjang(p, l) {
  const panjang = p;
  const lebar = l;

  //proses
  const luas = panjang * lebar;
  const keliling = 2 * (panjang + lebar);

  // hasil
  console.log("Panjang Persegi Panjang =", panjang, "cm");
  console.log("Lebar Persegi Panjang =", lebar, "cm");
  console.log("Luas Persegi Panjang =", luas, "cm**2");
  console.log("Keliling Persegi Panjang =", keliling, "cm");
}

TentukanLuasDanKelilingPersegiPanjang(5, 7);