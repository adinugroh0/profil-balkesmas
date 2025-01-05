"use client";

import { useState, useEffect } from "react";
import { supabase } from "../src/lib/supabaseClient";
import Image from "next/image";

interface Pasien {
  id: number;
  nik: string;
  nama: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  alamat: string;
  telepon: string;
  tanggal_kunjungan: string;
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

  // Ambil data dari Supabase
  const fetchDataPasien = async () => {
    try {
      const { data, error } = await supabase.from("pasien").select("*");

      if (error) {
        throw error;
      }

      setDaftarPasien(data || []);
    } catch (error) {
      console.error("Gagal mengambil data pasien:", error);
    }
  };

  // Simpan data ke Supabase
  const handleSimpanPendaftaran = async (e: React.FormEvent) => {
    e.preventDefault();

    const pasienBaru = {
      nik,
      nama,
      tanggal_lahir: tanggalLahir,
      jenis_kelamin: jenisKelamin,
      alamat,
      telepon,
      tanggal_kunjungan: tanggalKunjungan,
    };

    try {
      const { data, error } = await supabase
        .from("pasien")
        .insert([pasienBaru]);

      if (error) {
        throw error;
      }

      alert("Data pasien berhasil disimpan!");

      // Ambil data terbaru
      fetchDataPasien();

      // Reset form
      setNik("");
      setNama("");
      setTanggalLahir("");
      setJenisKelamin("");
      setAlamat("");
      setTelepon("");
      setTanggalKunjungan("");
    } catch (error) {
      console.error("Gagal menyimpan data pasien:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  // Ambil data saat komponen di-render
  useEffect(() => {
    fetchDataPasien();
  }, []);

  return (
    <div>
      {/* Formulir Pendaftaran */}
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
            <input
              type="text"
              placeholder="NIK"
              required
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Nama"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-400"
            />
            <input
              type="date"
              required
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-400"
            />
            <div>
              <input
                type="radio"
                value="Laki-laki"
                checked={jenisKelamin === "Laki-laki"}
                onChange={(e) => setJenisKelamin(e.target.value)}
              />
              Laki-laki
              <input
                type="radio"
                value="Perempuan"
                checked={jenisKelamin === "Perempuan"}
                onChange={(e) => setJenisKelamin(e.target.value)}
              />
              Perempuan
            </div>
            <textarea
              placeholder="Alamat"
              required
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-400"></textarea>
            <input
              type="tel"
              placeholder="Telepon"
              required
              value={telepon}
              onChange={(e) => setTelepon(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-400"
            />
            <input
              type="date"
              required
              value={tanggalKunjungan}
              onChange={(e) => setTanggalKunjungan(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-blue-400">
              Simpan Pendaftaran Data Pasien
            </button>
          </form>
        </div>
      </div>

      {/* Daftar Pasien */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Daftar Pasien Terdaftar</h2>
        {daftarPasien.length === 0 ? (
          <p className="text-gray-500">Belum ada pasien yang terdaftar.</p>
        ) : (
          <table className="min-w-full table-auto mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nama</th>
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
                  <td className="px-4 py-2">{pasien.nama}</td>
                  <td className="px-4 py-2">{pasien.jenis_kelamin}</td>
                  <td className="px-4 py-2">{pasien.alamat}</td>
                  <td className="px-4 py-2">{pasien.telepon}</td>
                  <td className="px-4 py-2">{pasien.tanggal_kunjungan}</td>
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
