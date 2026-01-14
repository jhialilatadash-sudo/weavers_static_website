export default function AboutSection() {
  return (
    <section className="relative bg-[#F3FAFF] py-20 px-6 overflow-hidden">

      {/* Decorative left pattern */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20">
        <img
          src="/patterns/mandala-left.png"
          alt=""
          className="w-72 md:w-96"
        />
      </div>

      {/* Decorative right pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        <img
          src="/patterns/mandala-right.png"
          alt=""
          className="w-72 md:w-96"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-4 text-center">
          About Us
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
          Discover The Stories Behind Every Piece
        </h3>

        <p className="text-gray-600 text-lg leading-9 text-left">
          Weaving together a vibrant community of artisans, the Weaver’s
          Service Center Bhubaneswar is dedicated to preserving and
          promoting the rich heritage of handloom weaving. Our mission
          is to empower weavers, foster sustainable practices, and
          bridge the gap between traditional craftsmanship and modern
          markets. We provide a platform for weavers to showcase their
          unique creations, access training and resources, and thrive
          in a competitive world. Join us in celebrating the beauty and
          resilience of handloom weaving.
        </p>
      </div>

    </section>
  );
}
