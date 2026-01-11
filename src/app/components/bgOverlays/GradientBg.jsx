import Image from "next/image";

const gradientOverlay = ({ children }) => {
  return (
    <div className="col-(--full-col) grid grid-cols-subgrid relative w-full h-full">
      <Image
        src="/assets/bg/slider_bg_overlay.png"
        alt="Gradient background overlay"
        fill
        className="object-cover opacity-40"
      />

      <div className=" relative z-10 col-(--content-col)">{children}</div>
    </div>
  );
};

export default gradientOverlay;
