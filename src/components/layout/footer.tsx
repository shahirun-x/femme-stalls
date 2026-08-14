"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A0A12] text-white">
      {/* Pre-footer CTA Band */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#E91E8B] via-[#EC4899] to-[#BE185D] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-center md:text-left">
            <span className="font-script text-[#FFD700] text-xl md:text-2xl block mb-1">
              Empowering Kilakarai & Beyond
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Ready to grow with Femme Stalls?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mt-2 max-w-xl font-light">
              Join hundreds of women entrepreneurs creating vibrant stalls, businesses, and communities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Button
              asChild
              className="bg-white text-[#E91E8B] hover:bg-[#FFF0F7] font-semibold rounded-full px-7 py-3 text-base shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="/members#register">
                Register as Member
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outlineGold"
              className="border-white/80 text-white hover:bg-white/10 rounded-full px-6 py-3 text-base"
            >
              <Link href="/femme-stalls#register">
                Book a Stall
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand Info (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-[#0D0509] p-3 rounded-2xl border border-white/10">
              <Logo size="md" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md pt-2">
              Femme Stalls is a women-led grassroots community platform from Kilakarai, Tamil Nadu. We empower aspiring and established women entrepreneurs to showcase talents, launch micro-enterprises, and achieve financial independence.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2D1420] border border-[#C5A55A]/30 text-xs">
                <span className="text-[#C5A55A] font-semibold">An initiative of</span>
                <strong className="text-white tracking-wide">GEOHOMZ</strong>
              </div>
            </div>
          </div>

          {/* Desktop Column 2: Quick Links */}
          <div className="hidden md:block space-y-4">
            <h4 className="font-display font-semibold text-base text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Members & Benefits
                </Link>
              </li>
              <li>
                <Link href="/femme-stalls" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Femme Stalls Expo
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Programmes & Training
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Events & History
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Bye-Laws & Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Column 3: Get Involved */}
          <div className="hidden md:block space-y-4">
            <h4 className="font-display font-semibold text-base text-white tracking-wider uppercase">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/members#register" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Join as Member
                </Link>
              </li>
              <li>
                <Link href="/opportunities#collaborators" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link href="/opportunities#investors" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  FEMMEI Investors
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Media & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#E91E8B] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Accordion for Quick Links & Get Involved */}
          <div className="md:hidden col-span-1 space-y-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="quick-links" className="border-b border-white/10">
                <AccordionTrigger className="text-white text-sm font-semibold hover:text-[#E91E8B]">
                  QUICK LINKS
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm text-white/70">
                  <div><Link href="/about" className="hover:text-[#E91E8B]">About Us</Link></div>
                  <div><Link href="/members" className="hover:text-[#E91E8B]">Members & Benefits</Link></div>
                  <div><Link href="/femme-stalls" className="hover:text-[#E91E8B]">Femme Stalls Expo</Link></div>
                  <div><Link href="/programmes" className="hover:text-[#E91E8B]">Programmes & Training</Link></div>
                  <div><Link href="/events" className="hover:text-[#E91E8B]">Events</Link></div>
                  <div><Link href="/transparency" className="hover:text-[#E91E8B]">Transparency</Link></div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="get-involved" className="border-b border-white/10">
                <AccordionTrigger className="text-white text-sm font-semibold hover:text-[#E91E8B]">
                  GET INVOLVED
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm text-white/70">
                  <div><Link href="/members#register" className="hover:text-[#E91E8B]">Join as Member</Link></div>
                  <div><Link href="/opportunities#collaborators" className="hover:text-[#E91E8B]">Partner with Us</Link></div>
                  <div><Link href="/opportunities#investors" className="hover:text-[#E91E8B]">FEMMEI Investors</Link></div>
                  <div><Link href="/partners" className="hover:text-[#E91E8B]">Our Partners</Link></div>
                  <div><Link href="/media" className="hover:text-[#E91E8B]">Media & News</Link></div>
                  <div><Link href="/contact" className="hover:text-[#E91E8B]">Contact Us</Link></div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base text-white tracking-wider uppercase">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E91E8B] shrink-0 mt-0.5" />
                <span>Kilakarai, Ramanathapuram District, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E91E8B] shrink-0" />
                <a href="mailto:info@femmestalls.com" className="hover:text-white transition-colors">
                  info@femmestalls.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E91E8B] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 (0) 98765 43210
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-white/50 block mb-2 font-semibold">
                Social Media
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2.5 rounded-full bg-[#2D1420] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-full bg-[#2D1420] text-[#E91E8B] hover:bg-[#E91E8B] hover:text-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2.5 rounded-full bg-[#2D1420] text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-full bg-[#2D1420] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2.5 rounded-full bg-[#2D1420] text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — darker (#0D0509) */}
      <div className="bg-[#0D0509] border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 text-xs text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Left */}
          <div>
            <p>&copy; {new Date().getFullYear()} Femme Stalls. All rights reserved.</p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-1.5 text-[#C5A55A]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>An initiative backed by <strong className="font-semibold text-white">Geohomz</strong></span>
          </div>

          {/* Right */}
          <div className="font-script text-[#C5A55A] text-lg">
            Organise the Unorganised
          </div>
        </div>
      </div>
    </footer>
  );
}
