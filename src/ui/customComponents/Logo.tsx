type LogoProps = { className?: string };

export default function Logo({ className = "" }: LogoProps) {
  return (
    <h1
      className={
        "text-primary! w-[100px] text-center text-5xl font-bold tracking-widest " +
        className
      }
    >
      AH
    </h1>
  );
}
