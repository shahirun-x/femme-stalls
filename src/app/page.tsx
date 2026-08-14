import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Store, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { CTABand } from "@/components/shared/cta-band";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-[#1A0A12] via-[#240D1A] to-[#0D0509] text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Glows & Particle Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E91E8B]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C5A55A]/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#BE185D]/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Delicate decorative grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container size="md" className="relative z-10 text-center">
          {/* Logo Showcase */}
          <div className="mb-6 flex justify-center animate-float">
            <Logo variant="stacked" size="xl" />
          </div>

          {/* Tagline script badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D1420] border border-[#C5A55A]/40 text-[#C5A55A] text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Backed by Geohomz &bull; Kilakarai, Tamil Nadu</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            FEMME <span className="text-[#E91E8B]">STALLS</span>
          </h1>

          {/* Dancing Script Tagline */}
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-[#C5A55A] mb-6">
            Organise the Unorganised
          </p>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg md:text-xl text-[#FFE0EF] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A vibrant network of women entrepreneurs and aspiring entrepreneurs from Kilakarai and beyond. Showcasing creativity, commerce, and community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Button
              asChild
              size="lg"
              className="bg-[#E91E8B] hover:bg-[#BE185D] text-white font-semibold rounded-full px-8 py-4 text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Link href="/members#register">
                Join Femme Stalls
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outlineGold"
              size="lg"
              className="border-2 border-[#C5A55A] text-[#C5A55A] hover:bg-[#C5A55A]/15 rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-105"
            >
              <Link href="#about-preview">
                Explore Community
              </Link>
            </Button>
          </div>

          {/* Quick Stats Teaser */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 text-center">
            <div className="p-3">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#E91E8B]">12+</div>
              <div className="text-xs sm:text-sm text-white/70">Stall Expos Held</div>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#C5A55A]">500+</div>
              <div className="text-xs sm:text-sm text-white/70">Women Members</div>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#E91E8B]">100%</div>
              <div className="text-xs sm:text-sm text-white/70">Women Led</div>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#C5A55A]">Kilakarai</div>
              <div className="text-xs sm:text-sm text-white/70">Tamil Nadu, India</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SECTION CONTAINER: ABOUT PREVIEW */}
      <section id="about-preview" className="py-20 bg-[#FFFBFE] border-b border-[#F3D5E5]">
        <Container size="lg">
          <SectionHeader
            badge="Our Essence"
            title="About Femme Stalls"
            subtitle="Born out of the vision to unite home bakers, artisans, designers, and innovators under one structured, empowering umbrella."
          />
          <div className="bg-[#FDF2F8] p-8 md:p-12 rounded-section border border-[#F3D5E5] text-center max-w-4xl mx-auto space-y-4">
            <p className="text-[#6B445A] leading-relaxed">
              Femme Stalls provides the launchpad for women to convert personal passion into sustainable micro-businesses. Backed by Geohomz Arcade, we create real-world exhibitions, skill workshops, and collaborative networks.
            </p>
            <div className="pt-2">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/about">Read Full Story &rarr;</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SECTION CONTAINER: UPCOMING EVENTS & EXPO */}
      <section id="upcoming-event" className="py-20 bg-[#FDF2F8] border-b border-[#F3D5E5]">
        <Container size="lg">
          <SectionHeader
            badge="Exhibitions & Gatherings"
            title="Upcoming Femme Stalls"
            subtitle="Experience the vibrant atmosphere, handcrafted delicacies, artisanal textiles, and creative showcases."
          />
          <div className="bg-white p-8 md:p-12 rounded-section border border-[#F3D5E5] text-center max-w-3xl mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FFE0EF] text-[#E91E8B] flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#1A0A12] mb-2">
              Next Edition Schedule Coming Soon
            </h3>
            <p className="text-[#6B445A] text-sm mb-6">
              Our event calendar and stall booking forms are being finalized for the upcoming season in Kilakarai.
            </p>
            <Button asChild className="bg-[#E91E8B] hover:bg-[#BE185D] text-white rounded-full">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. SECTION CONTAINER: BECOME A MEMBER */}
      <section id="become-member" className="py-20 bg-[#FFFBFE] border-b border-[#F3D5E5]">
        <Container size="lg">
          <SectionHeader
            badge="Membership"
            title="Why Join Femme Stalls?"
            subtitle="Gain priority stall allocations, promotional visibility, mentorship, and business opportunities."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#FDF2F8] p-6 rounded-card border border-[#F3D5E5] text-center">
              <div className="w-10 h-10 rounded-full bg-[#FFE0EF] text-[#E91E8B] flex items-center justify-center mx-auto mb-3">
                <Store className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2 text-[#1A0A12]">Stall Access</h4>
              <p className="text-xs text-[#6B445A]">Prime exhibition space and preferred rates at all seasonal festivals.</p>
            </div>
            <div className="bg-[#FDF2F8] p-6 rounded-card border border-[#F3D5E5] text-center">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F7] text-[#C5A55A] flex items-center justify-center mx-auto mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2 text-[#1A0A12]">Mentorship</h4>
              <p className="text-xs text-[#6B445A]">Accounting, branding, packaging, and digital marketing bootcamps.</p>
            </div>
            <div className="bg-[#FDF2F8] p-6 rounded-card border border-[#F3D5E5] text-center">
              <div className="w-10 h-10 rounded-full bg-[#FFE0EF] text-[#E91E8B] flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2 text-[#1A0A12]">Community</h4>
              <p className="text-xs text-[#6B445A]">Connect with fellow women entrepreneurs, mentors, and investors.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CTA BAND */}
      <CTABand
        heading="Be a Part of Kilakarai's Entrepreneurial Movement"
        description="Whether you run a home boutique, craft homemade spices, or aspire to start your own brand, Femme Stalls welcomes you."
        primaryButtonText="Register as Member"
        primaryButtonHref="/members#register"
        secondaryButtonText="Explore Stalls"
        secondaryButtonHref="/femme-stalls"
      />
    </div>
  );
}
