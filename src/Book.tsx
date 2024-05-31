export function Book({ href }: { href: string }) {
  return (
    <div className="BookContainer w-[200px] h-[260px] m-[30px] flex items-center justify-center perspective-900">
      <div
        className="Book w-[200px] h-[260px] relative preserve-3d rotate-y-30 transition-transform-075s"
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "rotateY(0deg)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "rotateY(-30deg)")
        }
      >
        <img
          src={href}
          alt="Book Cover"
          className="FrontCover w-full h-full absolute rounded-r rounded-l-[3px] shadow-image-shadow"
        />
        <div className="Pages bg-[#fff] h-[calc(260px-2*6px)] w-[50px] top-[3px] absolute page-transform" />
        <div className="BackCover rounded-r bg-[#01060f] h-[260px] w-[200px] left-0 absolute back-cover-transform back-cover-shadow" />
      </div>
    </div>
  );
}
