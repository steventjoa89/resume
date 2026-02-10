import Link from "next/link";

function ServiceBanner() {
  return (
    <div
      data-aos="fade-up"
      className="mt-12 rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-l py-4 md:p-10 text-white shadow-lg"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold">
            Web Development Service
          </h3>
          <p className="text-sm opacity-90">
            Partner with us to bring your ideas to life with innovative
            solutions tailored to your needs
          </p>
        </div>

        {/* Trailing (CTA / Info) */}
        <div className="self-start sm:self-auto">
          <Link href="#contact-section">
            <button className="rounded-full bg-white px-8 py-3 text-sm text-rose-400 font-semibold backdrop-blur hover:scale-105 transition cursor-pointer">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner;
