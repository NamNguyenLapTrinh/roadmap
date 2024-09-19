import Image from 'next/image';
import Link from 'next/link';

export default function Notfound() {
  return (
    <section className="relative w-full mx-auto min-h-[calc(100vh-67px)] flex items-center justify-center lg:justify-start px-4 lg:px-[60px] ">
      <div className="mx-auto">
        <h1 className="text-center lg:text-start text-[32px] lg:text-[60px] leading-10 lg:leading-[72px] text-[#101828] font-medium mb-6">
          Page not found
        </h1>

        <p className="text-center lg:text-start text-sm lg:text-base text-[#777E90] mb-12">
          Sorry, the page you are looking for doesn&rsquo;t exist.
        </p>

        <div className="flex items-center justify-center lg:justify-start gap-3">
          <Link
            className="text-[14px] font-medium px-6 rounded-full h-12 flex items-center justify-center bg-black text-white"
            href="/"
          >
            Go Home
          </Link>
        </div>
      </div>

      <Image
        src={'/svg/not-found.svg'}
        width={865}
        height={848}
        alt="not found"
        className="absolute right-0 top-0 bottom-0 h-full -z-[1]"
      />
    </section>
  );
}
