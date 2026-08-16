"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  businessCategoryOptions,
  experienceOptions,
  interestOptions,
  referralOptions,
  registrationNote,
} from "@/lib/members-data";

interface FormState {
  fullName: string;
  mobile: string;
  whatsapp: string;
  sameAsMobile: boolean;
  location: string;
  businessName: string;
  businessCategory: string;
  productsServices: string;
  experience: string;
  interests: string[];
  referral: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  mobile: "",
  whatsapp: "",
  sameAsMobile: false,
  location: "",
  businessName: "",
  businessCategory: "",
  productsServices: "",
  experience: "",
  interests: [],
  referral: "",
  message: "",
};

const requiredFields = ["fullName", "mobile", "location"] as const;

export function RegistrationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSameAsMobile(checked: boolean) {
    setForm((prev) => ({
      ...prev,
      sameAsMobile: checked,
      whatsapp: checked ? prev.mobile : prev.whatsapp,
    }));
  }

  function handleMobileChange(value: string) {
    setForm((prev) => ({
      ...prev,
      mobile: value,
      whatsapp: prev.sameAsMobile ? value : prev.whatsapp,
    }));
  }

  function toggleInterest(id: string) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    for (const field of requiredFields) {
      if (!form[field].trim()) newErrors[field] = true;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section id="register" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="sm">
        <SectionHeader badge="Join Us" title="Membership Registration" />

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Thank you for registering!
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-2 leading-relaxed">
                We&apos;ve received your application. A coordinator will contact you shortly on
                WhatsApp.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                In the meantime, explore our upcoming events and programmes.
              </p>
              <Button
                asChild
                className="bg-femme-pink hover:bg-femme-pink-700 text-white rounded-full px-8"
              >
                <Link href="/">
                  Back to Home
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="text-sm text-femme-gold-dark bg-femme-gold/10 border border-femme-gold/30 rounded-lg px-4 py-3 mb-8">
                {registrationNote}
              </p>

              <fieldset className="mb-8">
                <legend className="font-display font-semibold text-lg text-foreground mb-4">
                  Personal Details
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="fullName">
                      Full Name <span className="text-femme-pink">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      required
                      invalid={errors.fullName}
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">
                      Mobile Number <span className="text-femme-pink">*</span>
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      required
                      invalid={errors.mobile}
                      value={form.mobile}
                      onChange={(e) => handleMobileChange(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      disabled={form.sameAsMobile}
                      value={form.whatsapp}
                      onChange={(e) => updateField("whatsapp", e.target.value)}
                    />
                    <Checkbox
                      id="sameAsMobile"
                      label="Same as mobile"
                      className="mt-2"
                      checked={form.sameAsMobile}
                      onChange={(e) => handleSameAsMobile(e.target.checked)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">
                      Location / Area <span className="text-femme-pink">*</span>
                    </Label>
                    <Input
                      id="location"
                      required
                      invalid={errors.location}
                      value={form.location}
                      onChange={(e) => updateField("location", e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="mb-8">
                <legend className="font-display font-semibold text-lg text-foreground mb-4">
                  Business Details
                </legend>
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      placeholder="Leave blank if you don't have one yet"
                      value={form.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="businessCategory">Business Category</Label>
                      <Select
                        id="businessCategory"
                        value={form.businessCategory}
                        onChange={(e) => updateField("businessCategory", e.target.value)}
                      >
                        <option value="">Select a category</option>
                        {businessCategoryOptions.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select
                        id="experience"
                        value={form.experience}
                        onChange={(e) => updateField("experience", e.target.value)}
                      >
                        <option value="">Select an option</option>
                        {experienceOptions.map((exp) => (
                          <option key={exp} value={exp}>
                            {exp}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="productsServices">Products / Services</Label>
                    <Textarea
                      id="productsServices"
                      rows={3}
                      placeholder="Briefly describe what you make, sell or do"
                      value={form.productsServices}
                      onChange={(e) => updateField("productsServices", e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="mb-8">
                <legend className="font-display font-semibold text-lg text-foreground mb-4">
                  Interests
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <Checkbox
                      key={interest.id}
                      id={interest.id}
                      label={interest.label}
                      checked={form.interests.includes(interest.id)}
                      onChange={() => toggleInterest(interest.id)}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset className="mb-8">
                <legend className="font-display font-semibold text-lg text-foreground mb-4">
                  Additional Information
                </legend>
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="referral">How did you hear about Femme Stalls?</Label>
                    <Select
                      id="referral"
                      value={form.referral}
                      onChange={(e) => updateField("referral", e.target.value)}
                    >
                      <option value="">Select an option</option>
                      {referralOptions.map((ref) => (
                        <option key={ref} value={ref}>
                          {ref}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Any message or questions</Label>
                    <Textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full"
              >
                Join Femme Stalls
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
