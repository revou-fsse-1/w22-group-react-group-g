type LogoProps = {
  width: string;
  height: string;
};

export default function Logo({ width, height }: LogoProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 93 94" fill="none">
      <path
        d="M1.5 73.9925V19.5176L46.5 1.61435L91.5 19.5176V73.9925L46.5 92.3796L1.5 73.9925Z"
        stroke="black"
        strokeWidth="3"
      />
      <path d="M3 21L45 39V90.5L3 73V21Z" fill="#0E141A" />
      <path d="M3 21L45 39V47L3 29V21Z" fill="#0051CC" />
      <path d="M3 21L7 22.7089V74.668L3 73V21Z" fill="#0051CC" />
      <path d="M5.5 19.5L46.5 3L87.5 19.5L46.5 36.5L5.5 19.5Z" fill="#3F5574" />
      <path d="M90 21L48 39V90.5L90 73V21Z" fill="#2D3D53" />
      <path d="M90 21L48 39V47L90 29V21Z" fill="#0051CC" />
      <path d="M90 21L86 22.7089V74.668L90 73V21Z" fill="#0051CC" />
    </svg>
  );
}
