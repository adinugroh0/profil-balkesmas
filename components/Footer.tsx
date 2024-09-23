"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-[#2A8EE4] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8  justify-around text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <a href="https://maps.app.goo.gl/nixdJBWae479J9Q87">
                Jl. Kh Ahmad Dahlan No.39, <br /> Karangkidul, Kec. Semarang
                Tengah,
                <br />
                Kota Semarang, Jawa Tengah 50241
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

              <p>
                Phone:{" "}
                <a href=" (024) 8316758" className="text-white">
                  (024) 8316758
                </a>
              </p>
              <p>
                WA:{" "}
                <a href="https://wa.link/s0qz3t" className="text-white">
                  0811-2966-633
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p>
                Email:{" "}
                <a href="bp4smg@yahoo.com" className="text-white">
                  bp4smg@yahoo.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 items-center justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100064304972850"
                  target="_blank"
                  className="text-white hover:text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.838c0-.601.174-1.162 1.043-1.162h2.957v-5h-4.043c-3.394 0-5.957 2.141-5.957 6.059v3.941z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-white hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 4.557a9.816 9.816 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.868 9.868 0 0 1-3.127 1.196 4.919 4.919 0 0 0-8.384 4.482 13.95 13.95 0 0 1-10.141-5.145 4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.214 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.062a4.925 4.925 0 0 0 3.946 4.827 4.904 4.904 0 0 1-2.224.084 4.926 4.926 0 0 0 4.604 3.418 9.868 9.868 0 0 1-6.102 2.103c-.397 0-.79-.023-1.178-.067a13.944 13.944 0 0 0 7.557 2.213c9.054 0 14-7.496 14-13.986 0-.213-.005-.425-.015-.637a9.936 9.936 0 0 0 2.459-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/balkesmaswilayahsemarang/"
                  target="_blank"
                  className="text-white hover:text-pink-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.262 0-3.67.014-4.947.072-1.558.071-2.962.346-4.066 1.45-1.104 1.104-1.379 2.508-1.45 4.066-.058 1.277-.072 1.685-.072 4.947s.014 3.67.072 4.947c.071 1.558.346 2.962 1.45 4.066 1.104 1.104 2.508 1.379 4.066 1.45 1.277.058 1.685.072 4.947.072s3.67-.014 4.947-.072c1.558-.071 2.962-.346 4.066-1.45 1.104-1.104 1.379-2.508 1.45-4.066.058-1.277.072-1.685.072-4.947s-.014-3.67-.072-4.947c-.071-1.558-.346-2.962-1.45-4.066-1.104-1.104-2.508-1.379-4.066-1.45-1.277-.058-1.685-.072-4.947-.072z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 1 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-gray-700 mt-8">
            <p>&copy;2024 Balkesmas Semarang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
