"use client";
import { useState } from "react";
import Image from "next/image";

interface Pasien {
  id: number;
  nik: string;
  nama: string;
  tanggalLahir: string;
  jenisKelamin: string;
  alamat: string;
  telepon: string;
  tanggalKunjungan: string;
}

const PasienBaru = () => {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [tanggalKunjungan, setTanggalKunjungan] = useState("");
  const [daftarPasien, setDaftarPasien] = useState<Pasien[]>([]);

  // Fungsi untuk menyimpan pendaftaran pasien baru
  const handleSimpanPendaftaran = (e: React.FormEvent) => {
    e.preventDefault();

    const pasienBaru: Pasien = {
      id: daftarPasien.length + 1,
      nik,
      nama,
      tanggalLahir,
      jenisKelamin,
      alamat,
      telepon,
      tanggalKunjungan,
    };

    // Tambahkan pasien baru ke dalam daftar pasien
    setDaftarPasien([...daftarPasien, pasienBaru]);

    // Reset form setelah data disimpan
    setNik("");
    setNama("");
    setTanggalLahir("");
    setJenisKelamin("");
    setAlamat("");
    setTelepon("");
    setTanggalKunjungan("");
  };

  return (
    <div>
      <div className="h-auto w-full flex flex-col justify-around lg:flex-row items-center gap-8 p-24">
        <div>
          <Image
            src="/pendaftaran/vektorpendaftaran.png"
            alt="Background Image"
            width={1920}
            height={1080}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Formulir Kunjungan
          </h2>
          <form onSubmit={handleSimpanPendaftaran}>
            <div className="mb-4">
              <input
                type="text"
                id="nik"
                placeholder="NIK"
                required
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="nama"
                placeholder="NAMA"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="tanggal-lahir"
                className="block text-sm font-medium text-gray-700">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="tanggal-lahir"
                required
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="laki-laki"
                  name="jenisKelamin"
                  value="Laki-laki"
                  required
                  className="mr-2"
                  checked={jenisKelamin === "Laki-laki"}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                />
                <label htmlFor="laki-laki" className="mr-4">
                  Laki-laki
                </label>
                <input
                  type="radio"
                  id="perempuan"
                  name="jenisKelamin"
                  value="Perempuan"
                  required
                  className="mr-2"
                  checked={jenisKelamin === "Perempuan"}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                id="alamat"
                placeholder="ALAMAT"
                required
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={3}></textarea>
            </div>

            <div className="mb-4">
              <input
                type="tel"
                id="telepon"
                placeholder="TELEPON"
                required
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="tanggal-kunjungan"
                className="block text-sm font-medium text-gray-700">
                Tanggal Kunjungan
              </label>
              <input
                type="date"
                id="tanggal-kunjungan"
                required
                value={tanggalKunjungan}
                onChange={(e) => setTanggalKunjungan(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Simpan Pendaftaran Data Pasien
            </button>
          </form>
        </div>
      </div>

      {/* Menampilkan Daftar Pasien */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Daftar Pasien Terdaftar</h2>
        {daftarPasien.length === 0 ? (
          <p className="text-gray-500">Belum ada pasien yang terdaftar.</p>
        ) : (
          <table className="min-w-full table-auto mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">NIK</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Tanggal Lahir</th>
                <th className="px-4 py-2">Jenis Kelamin</th>
                <th className="px-4 py-2">Alamat</th>
                <th className="px-4 py-2">Telepon</th>
                <th className="px-4 py-2">Tanggal Kunjungan</th>
              </tr>
            </thead>
            <tbody>
              {daftarPasien.map((pasien) => (
                <tr key={pasien.id} className="bg-white border-b">
                  <td className="px-4 py-2">{pasien.id}</td>
                  <td className="px-4 py-2">{pasien.nik}</td>
                  <td className="px-4 py-2">{pasien.nama}</td>
                  <td className="px-4 py-2">{pasien.tanggalLahir}</td>
                  <td className="px-4 py-2">{pasien.jenisKelamin}</td>
                  <td className="px-4 py-2">{pasien.alamat}</td>
                  <td className="px-4 py-2">{pasien.telepon}</td>
                  <td className="px-4 py-2">{pasien.tanggalKunjungan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PasienBaru;
