export function AmbientLight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <div className="absolute -left-32 top-20 h-[34rem] w-[34rem] rounded-full bg-[rgba(74,38,56,0.28)] blur-3xl" />
      <div className="absolute -right-40 top-8 h-[30rem] w-[30rem] rounded-full bg-[rgba(180,106,90,0.14)] blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[rgba(38,53,45,0.22)] blur-3xl" />
    </div>
  );
}