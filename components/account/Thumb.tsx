import Image from "next/image";
import { Gem } from "lucide-react";

export default function Thumb({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md bg-sand ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width:1024px) 160px, 33vw" className="object-cover" />
      ) : (
        <Gem aria-hidden className="absolute inset-0 m-auto h-6 w-6 text-copper/60" />
      )}
    </div>
  );
}