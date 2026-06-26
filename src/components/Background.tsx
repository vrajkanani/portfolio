export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--accent-1)] opacity-30 blur-[130px]"
        style={{ animation: "bgBlob1 25s ease-in-out infinite", willChange: "transform" }}
      />
      <div
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--accent-2)] opacity-25 blur-[130px]"
        style={{ animation: "bgBlob2 30s ease-in-out infinite", willChange: "transform" }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[var(--accent-3)] opacity-20 blur-[140px]"
        style={{ animation: "bgBlob3 20s ease-in-out infinite", willChange: "transform" }}
      />
    </div>
  );
}
