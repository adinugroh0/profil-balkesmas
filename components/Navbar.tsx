"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed  inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Beranda">
          <div className="  text-sm grid-cols-2 gap-10 p-4 flex  items-center">
            <ProductItem
              title="Balkesmas Wilayah Semarang"
              href="/"
              src="/image 10.png"
              description="Profil Balkesmas Wilayah Semarang."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Profil">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Sejarah">Sejarah</HoveredLink>
            <HoveredLink href="/Visi-Misi">Visi - Misi</HoveredLink>
            <HoveredLink href="/MaklumatPelayanan">
              Maklumat Pelayanan
            </HoveredLink>
            <HoveredLink href="/StrukturOrganisasi">
              Struktur Organisai
            </HoveredLink>
            <HoveredLink href="/SumbarDayaManusia">
              Sumbar Daya Manusia
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pelayanan">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/StandartPelayanan">
              Standart Pelayanan
            </HoveredLink>
            <HoveredLink href="/SOP">SOP</HoveredLink>
            <HoveredLink href="/AlurPelayananPasienBaru">
              Alur Pelayanan Pasien Baru
            </HoveredLink>
            <HoveredLink href="/AlurPelayananPasienLama">
              Alur Pelayanan Pasien Lama
            </HoveredLink>
            <HoveredLink href="/TarifPelayanan">Tarif Pelayanan</HoveredLink>
            <HoveredLink href="/LaporanPengaduan">
              Laporan Pengaduan
            </HoveredLink>
            <HoveredLink href="/LaporanSKM">Laporan SKM</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Informasi">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/LatarBelakang">Latar Belakang</HoveredLink>
            <HoveredLink href="/Tujuan">Tujuan</HoveredLink>
            <HoveredLink href="/RuangLingkup">Ruang Lingkup</HoveredLink>
            <HoveredLink href="/DasarHukum">Dasar Hukum</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Lainnya">
          <div className="  text-sm grid-cols-2 gap-10 p-4 flex  items-center">
            <ProductItem
              title="PENDAFTARAN ONLINE"
              href="/PendaftaranOnline"
              src="/image 10.png"
              description="Profil Balkesmas Wilayah Semarang."
            />
          </div>
          <div className="  text-sm grid-cols-2 gap-10 p-4 flex  items-center">
            <ProductItem
              title="BERITA"
              href="/"
              src="/BRITA.png"
              description="Berita Balkesmas Wilayah Semarang."
            />
          </div>
          <div className="  text-sm grid-cols-2 gap-10 p-4 flex  items-center">
            <ProductItem
              title="PENGADUAN"
              href="https://laporgub.jatengprov.go.id/"
              src="/aduan.png"
              description="Portal Laporan Pengaduan Online Provinsi Jawa Tengah"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
