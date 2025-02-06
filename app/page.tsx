import React from "react";
import Image from "next/image";
import heroImage from '../public/hero Section.svg';
import s1 from '../public/responsive.svg';
import s2 from '../public/gps.svg';
import s3 from '../public/layanan.svg';
import about from '../public/about us.svg';
import chose from '../public/chose ranah.svg';
import map from '../public/map.svg';

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-black text-4xl md:text-5xl font-bold">
            Respon Bencana Bereaksi Cepat. Tetap Aman.
          </h1>
          <p className="text-gray-600">
            Kami hadir membantu masyarakat, Kami memastikan setiap tindakan tanggap bencana dilakukan secara efisien, responsif, menjaga keselamatan dan memberikan rasa aman bagi semua pihak
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700">
            Start Now
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image
            alt="Illustration of a person running out of a building during an emergency"
            className="w-full"
            height={100}
            width={100}
            src={heroImage}
            layout="instrinsic"
          />
        </div>
      </section>

      <section className="text-center p-6 md:p-12 bg-gray-50">
        <h2 className="text-pink-600 text-xl font-semibold">
          With our features
        </h2>
        <h3 className="text-black text-2xl md:text-3xl font-bold mt-2">
          Innovate in your rescuing operations
        </h3>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center">
            <Image
              alt="Icon of a truck"
              className="w-16 h-16"
              height={100}
              width={100}
              src={s1}
            />
            <h4 className="text-pink-600 text-lg font-semibold mt-4">Penanganan Responsif</h4>
            <p className="text-gray-600 mt-2">
              temukan distributor yang terverifikasi di dekat anda atau jadilah distributor!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              alt="Icon of a GPS"
              className="w-16 h-16"
              height={100}
              width={100}
              src={s2}
            />
            <h4 className="text-pink-600 text-lg font-semibold mt-4">GPS Tracking</h4>
            <p className="text-gray-600 mt-2">
              temukan distributor yang terverifikasi di dekat anda atau jadilah distributor!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              alt="Icon of a report"
              className="w-16 h-16"
              height={100}
              width={100}
              src={s3}
            />
            <h4 className="text-pink-600 text-lg font-semibold mt-4">Layanan Laporan</h4>
            <p className="text-gray-600 mt-2">
              temukan distributor yang terverifikasi di dekat anda atau jadilah distributor!
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 bg-pink-50">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-black text-2xl md:text-3xl font-bold">About Us</h2>
            <h3 className="text-xl text-pink-600 font-semibold">
              RANAH : Respons dan Analisis Navigasi untuk Aksi Humanis
            </h3>
            <p className="text-gray-600">
              RANAH ini merupakan website yang menyediakan fitur canggih seperti predictive disaster mapping, smart resource allocation, Live GPS tracking, dan AI-driven analytics yang menghubungkan masyarakat, petugas lapangan, pemerintah daerah (OPD, RT/RW, admin) yang cepat dan tanggap darurat.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              alt="Illustration of a team of people working together"
              className="w-full"
              height={400}
              width={400}
              src={about}
            />
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-black text-2xl md:text-3xl font-bold">Why Chose RANAH</h2>
            <h3 className="text-xl text-pink-600 font-semibold">
              We provide tools that streamline response management for officer.
            </h3>
            <p className="text-gray-600">
              Melalui sistem monitoring real-time dan dukungan data berbasis AI, kami membantu Anda menghindari risiko dan menjaga keselamatan di setiap kondisi darurat.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              alt="Illustration of firefighters responding to an emergency"
              className="w-full"
              height={400}
              width={400}
              src={chose}
            />
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 bg-pink-50">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-black text-2xl md:text-3xl font-bold">
              Keselamatan Anda adalah Prioritas Utama Kami.
            </h2>
            <p className="text-gray-600">
              Melalui sistem monitoring real-time dan dukungan data berbasis AI, kami membantu Anda menghindari risiko dan menjaga keselamatan di setiap kondisi darurat.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              alt="Map showing a location in Melbourne"
              className="w-full"
              height={400}
              width={400}
              src={map}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
