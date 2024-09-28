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
          <div className="flex flex-col lg:flex-row gap-8  justify-center text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <a
                className="flex "
                href="https://maps.app.goo.gl/nixdJBWae479J9Q87">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Jl. Kh Ahmad Dahlan No.39, <br /> Karangkidul, Kec. Semarang
                Tengah,
                <br />
                Kota Semarang, Jawa Tengah 50241
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20.487 17.14l-4.943-1.057a1.994 1.994 0 0 0-2.016.586l-2.296 2.297a16.051 16.051 0 0 1-7.072-7.072l2.297-2.296a1.994 1.994 0 0 0 .586-2.016L6.86 3.513A2.006 2.006 0 0 0 4.835 2H3a2 2 0 0 0-2 2c0 10.493 8.507 19 19 19a2 2 0 0 0 2-2v-1.835a2.006 2.006 0 0 0-1.513-1.963z" />
                </svg>
                <a href=" (024) 8316758" className="text-white">
                  (024) 8316758
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.149-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.655-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.1-.198.05-.372-.025-.521-.074-.148-.672-1.612-.921-2.206-.242-.582-.487-.502-.672-.512-.173-.007-.372-.01-.571-.01-.198 0-.52.074-.793.372-.273.298-1.041 1.016-1.041 2.482s1.065 2.876 1.213 3.075c.149.198 2.099 3.21 5.077 4.497.709.306 1.26.488 1.69.625.711.227 1.356.195 1.865.118.568-.085 1.758-.718 2.007-1.412.248-.694.248-1.288.173-1.412-.074-.123-.272-.198-.57-.347z" />
                  <path d="M20.52 3.477A11.835 11.835 0 0012.004 0C5.374 0 .171 5.192.171 11.596c0 2.044.528 4.04 1.523 5.79L0 24l6.843-1.777a11.884 11.884 0 005.161 1.249h.005c6.63 0 11.832-5.192 11.832-11.596 0-3.107-1.199-6.033-3.321-8.175zm-8.516 17.45h-.004a10.17 10.17 0 01-4.861-1.256l-.348-.198-4.071 1.058 1.088-3.96-.226-.35a10.132 10.132 0 01-1.459-5.259c0-5.627 4.578-10.21 10.217-10.21a10.16 10.16 0 017.217 3.004 10.045 10.045 0 012.979 7.205c0 5.627-4.577 10.21-10.217 10.21z" />
                </svg>
                <a href="https://wa.link/s0qz3t" className="text-white">
                  0811-2966-633
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM20 8l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="bp4smg@yahoo.com" className="text-white">
                  bp4smg@yahoo.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <p className="mb-1">balkessemarang.dinkesjatengprov.go.id</p>
              <div className="flex space-x-4 items-center justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100064304972850"
                  target="_blank"
                  className="text-white flex flex-col lg:flex-row hover:text-blue-700 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.838c0-.601.174-1.162 1.043-1.162h2.957v-5h-4.043c-3.394 0-5.957 2.141-5.957 6.059v3.941z" />
                  </svg>
                  <p>Facebook</p>
                </a>
                <a
                  href="https://wa.link/s0qz3t"
                  target="_blank"
                  className="text-white flex flex-col lg:flex-row hover:text-green-600 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.149-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.655-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.1-.198.05-.372-.025-.521-.074-.148-.672-1.612-.921-2.206-.242-.582-.487-.502-.672-.512-.173-.007-.372-.01-.571-.01-.198 0-.52.074-.793.372-.273.298-1.041 1.016-1.041 2.482s1.065 2.876 1.213 3.075c.149.198 2.099 3.21 5.077 4.497.709.306 1.26.488 1.69.625.711.227 1.356.195 1.865.118.568-.085 1.758-.718 2.007-1.412.248-.694.248-1.288.173-1.412-.074-.123-.272-.198-.57-.347z" />
                    <path d="M20.52 3.477A11.835 11.835 0 0012.004 0C5.374 0 .171 5.192.171 11.596c0 2.044.528 4.04 1.523 5.79L0 24l6.843-1.777a11.884 11.884 0 005.161 1.249h.005c6.63 0 11.832-5.192 11.832-11.596 0-3.107-1.199-6.033-3.321-8.175zm-8.516 17.45h-.004a10.17 10.17 0 01-4.861-1.256l-.348-.198-4.071 1.058 1.088-3.96-.226-.35a10.132 10.132 0 01-1.459-5.259c0-5.627 4.578-10.21 10.217-10.21a10.16 10.16 0 017.217 3.004 10.045 10.045 0 012.979 7.205c0 5.627-4.577 10.21-10.217 10.21z" />
                  </svg>
                  <p>Whatsapp</p>
                </a>
                <a
                  href="https://www.instagram.com/balkesmaswilayahsemarang/"
                  target="_blank"
                  className="text-white flex flex-col lg:flex-row hover:text-pink-700 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.262 0-3.67.014-4.947.072-1.558.071-2.962.346-4.066 1.45-1.104 1.104-1.379 2.508-1.45 4.066-.058 1.277-.072 1.685-.072 4.947s.014 3.67.072 4.947c.071 1.558.346 2.962 1.45 4.066 1.104 1.104 2.508 1.379 4.066 1.45 1.277.058 1.685.072 4.947.072s3.67-.014 4.947-.072c1.558-.071 2.962-.346 4.066-1.45 1.104-1.104 1.379-2.508 1.45-4.066.058-1.277.072-1.685.072-4.947s-.014-3.67-.072-4.947c-.071-1.558-.346-2.962-1.45-4.066-1.104-1.104-2.508-1.379-4.066-1.45-1.277-.058-1.685-.072-4.947-.072z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 1 0 0-2.881z" />
                  </svg>
                  <p>Instagram</p>
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
