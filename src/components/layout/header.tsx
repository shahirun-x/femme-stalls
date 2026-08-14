"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Sparkles, HeartHandshake } from "lucide-react";
import { navLinks } from "./nav-links";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "h-[70px] lg:h-[76px] bg-[#FFFBFE]/95 backdrop-blur-md shadow-sm border-[#F3D5E5]/60"
          : "h-[72px] lg:h-[84px] bg-[#FFFBFE]/90 backdrop-blur-sm border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo size="md" className="hidden sm:inline-flex" />
          <Logo variant="icon" size="sm" className="sm:hidden" />
        </div>

        {/* Desktop Navigation (>= 1024px) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const itemActive = isActive(item.href);

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NextLink
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md cursor-pointer",
                      itemActive
                        ? "text-[#E91E8B] font-semibold"
                        : "text-[#1A0A12] hover:text-[#E91E8B]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#6B445A] group-hover:text-[#E91E8B]" />
                  </NextLink>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 min-w-[220px] rounded-card border border-[#F3D5E5] bg-[#FFFBFE] p-2 shadow-xl backdrop-blur-lg transition-all duration-200 z-50",
                      activeDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="py-1">
                      {item.children?.map((child) => (
                        <NextLink
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-[#1A0A12] hover:bg-[#FFF0F7] hover:text-[#E91E8B] transition-colors"
                        >
                          <span>{child.label}</span>
                        </NextLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NextLink
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                  itemActive
                    ? "text-[#E91E8B] font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#E91E8B]"
                    : "text-[#1A0A12] hover:text-[#E91E8B]"
                )}
              >
                {item.label}
              </NextLink>
            );
          })}
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="default"
            className="bg-[#E91E8B] hover:bg-[#BE185D] text-white rounded-full px-6 py-2.5 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
          >
            <NextLink href="/contact#join">
              <Sparkles className="w-4 h-4 mr-1.5" />
              Join Us
            </NextLink>
          </Button>
        </div>

        {/* Mobile Hamburger (< 1024px) */}
        <div className="flex items-center lg:hidden gap-2">
          <Button
            asChild
            size="sm"
            className="bg-[#E91E8B] text-white rounded-full text-xs px-3.5 py-1.5 sm:flex hidden"
          >
            <NextLink href="/contact#join">Join Us</NextLink>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="p-2 rounded-lg text-[#1A0A12] hover:bg-[#FFF0F7] hover:text-[#E91E8B] focus:outline-none focus:ring-2 focus:ring-[#E91E8B]"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col justify-between overflow-y-auto">
              <div className="p-6">
                <SheetHeader className="text-left border-b border-[#F3D5E5] pb-4 mb-4">
                  <SheetTitle>
                    <Logo size="sm" />
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((item) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const itemActive = isActive(item.href);

                    if (hasChildren) {
                      return (
                        <Accordion key={item.label} type="single" collapsible className="w-full">
                          <AccordionItem value={item.label} className="border-b border-[#F3D5E5]/50">
                            <AccordionTrigger className="py-3 text-base font-medium hover:text-[#E91E8B]">
                              <span className={itemActive ? "text-[#E91E8B] font-semibold" : ""}>
                                {item.label}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="pl-4 pb-2 space-y-1">
                              <NextLink
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 text-sm font-medium text-[#E91E8B] hover:underline"
                              >
                                View all {item.label} &rarr;
                              </NextLink>
                              {item.children?.map((child) => (
                                <NextLink
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-2 text-sm text-[#6B445A] hover:text-[#E91E8B] transition-colors"
                                >
                                  {child.label}
                                </NextLink>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      );
                    }

                    return (
                      <NextLink
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block py-3 text-base font-medium border-b border-[#F3D5E5]/50 transition-colors",
                          itemActive ? "text-[#E91E8B] font-semibold" : "text-[#1A0A12] hover:text-[#E91E8B]"
                        )}
                      >
                        {item.label}
                      </NextLink>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA in Mobile Drawer */}
              <div className="p-6 bg-[#FDF2F8] border-t border-[#F3D5E5] mt-auto">
                <p className="font-script text-[#C5A55A] text-lg text-center mb-3">
                  Organise the Unorganised
                </p>
                <Button
                  asChild
                  className="w-full bg-[#E91E8B] hover:bg-[#BE185D] text-white rounded-full py-3 shadow-md"
                >
                  <NextLink href="/contact#join" onClick={() => setMobileMenuOpen(false)}>
                    <HeartHandshake className="w-4 h-4 mr-2" />
                    Join Femme Stalls
                  </NextLink>
                </Button>
                <div className="mt-3 text-center">
                  <span className="text-xs text-[#6B445A]">
                    An initiative of <strong className="text-[#C5A55A]">Geohomz</strong>
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
