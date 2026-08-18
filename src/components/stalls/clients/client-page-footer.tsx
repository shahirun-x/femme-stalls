import Link from "next/link";
import { Logo } from "@/components/shared/logo";

/** "Powered by Femme Stalls" strip shown at the bottom of every stall page. */
export function ClientPageFooter() {
  return (
    <footer className="bg-[#1A0A12] text-white py-10 px-4 text-center">
      <div className="max-w-md mx-auto space-y-4">
        <Logo variant="icon" size="sm" className="inline-flex" />
        <p className="text-sm text-white/60">Powered by Femme Stalls</p>
        <div className="pt-2 border-t border-white/10">
          <p className="text-sm text-white/80 mb-3">Want a page like this for YOUR business?</p>
          <Link
            href="/members#register"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#E91E8B] hover:bg-[#BE185D] text-white font-semibold text-sm transition-colors"
          >
            Get Your Free Femme Stalls Page
          </Link>
        </div>
      </div>
    </footer>
  );
}
