// components/ChangePassword.tsx
"use client";

import React, { useState } from "react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Password baru tidak cocok.");
      return;
    }

    // Misal: Lakukan pemanggilan API untuk update password
    // const response = await fetch("/api/change-password", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ oldPassword, newPassword }),
    // });

    setMessage("Password berhasil diubah.");
    // Handle response dari API
    // const data = await response.json();
    // if (data.success) {
    //   setMessage("Password berhasil diubah.");
    // } else {
    //   setMessage("Gagal mengubah password.");
    // }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Ganti Password</h2>
      {message && <p className="mb-4 text-red-600">{message}</p>}
      <form onSubmit={handlePasswordChange}>
        <div className="mb-4">
          <label htmlFor="oldPassword" className="block text-sm font-medium">
            Password Lama
          </label>
          <input
            type="password"
            id="oldPassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium">
            Password Baru
          </label>
          <input
            type="password"
            id="newPassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium">
            Konfirmasi Password Baru
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Ubah Password
        </button>
      </form>
    </div>
  );
}
