"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PendaftaranOnline from "./PendaftaranOnline";

const PasienBaru = () => {
  return (
    <>
      <div className=" h-auto  w-full flex flex-col  justify-around lg:flex-row items-center gap-8 p-24">
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
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="nik"
                placeholder="NIK"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="nama"
                placeholder="NAMA"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="tanggal-kunjungan"
                className="block text-sm font-medium text-gray-700">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="tanggal-lahir"
                placeholder="Tanggal Lahir"
                required
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
                />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                id="alamat"
                placeholder="ALAMAT"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={3}></textarea>
            </div>

            <div className="mb-4">
              <input
                type="tel"
                id="telepon"
                placeholder="TELEPON"
                required
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
    </>
  );
};

export default PasienBaru;
