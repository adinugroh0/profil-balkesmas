"use client";

import { useState, useEffect } from "react";
import { supabase } from "../src/lib/supabaseClient";

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

const HapusPasien = () => {
  const [daftarPasien, setDaftarPasien] = useState<Pasien[]>([]);

  // Fungsi untuk mengambil data pasien dari Supabase
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

  // Fungsi untuk menghapus data pasien berdasarkan ID
  const handleHapusPasien = async (id: number) => {
    try {
      const { error } = await supabase.from("pasien").delete().eq("id", id);

      if (error) {
        throw error;
      }

      alert("Data pasien berhasil dihapus!");

      // Perbarui daftar pasien setelah penghapusan
      fetchDataPasien();
    } catch (error) {
      console.error("Gagal menghapus data pasien:", error);
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  // Ambil data pasien saat komponen di-render pertama kali
  useEffect(() => {
    fetchDataPasien();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Hapus Data Pasien</h2>
      {daftarPasien.length === 0 ? (
        <p className="text-gray-500">Belum ada pasien yang terdaftar.</p>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">NIK</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {daftarPasien.map((pasien) => (
              <tr key={pasien.id} className="bg-white border-b">
                <td className="px-4 py-2">{pasien.id}</td>
                <td className="px-4 py-2">{pasien.nama}</td>
                <td className="px-4 py-2">{pasien.nik}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleHapusPasien(pasien.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HapusPasien;
