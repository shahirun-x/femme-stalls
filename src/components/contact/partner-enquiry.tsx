"use client";

import React, { useState } from "react";
import {
  Building2,
  Heart,
  Landmark,
  Newspaper,
  TrendingUp,
  Handshake,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  partnerTypes,
  partnershipTypeOptions,
  type PartnerType,
} from "@/lib/contact-data";

const iconMap: Record<PartnerType["icon"], LucideIcon> = {
  Building2,
  Heart,
  Landmark,
  Newspaper,
  TrendingUp,
  Handshake,
};

interface FormState {
  name: string;
  organisation: string;
  partnershipType: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  organisation: "",
  partnershipType: "",
  email: "",
  phone: "",
  message: "",
};

const requiredFields = ["name", "email", "message"] as const;

export function PartnerEnquiry() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
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
    <section id="partner" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Collaborate" title="Partner With Femme Stalls" />

        <div className="flex md:grid md:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 mb-12">
          {partnerTypes.map((type) => {
            const Icon = iconMap[type.icon];
            return (
              <div
                key={type.title}
                className="shrink-0 w-40 md:w-auto bg-white rounded-xl border border-femme-warm-border p-4 text-center"
              >
                <div className="w-9 h-9 mx-auto rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                  {type.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Thank you — we&apos;ll be in touch shortly.
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                Your partnership enquiry has been received. A coordinator will reach out to discuss
                next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">
                    Name <span className="text-femme-pink">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    invalid={errors.name}
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input
                    id="organisation"
                    value={form.organisation}
                    onChange={(e) => updateField("organisation", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="partnershipType">Type of Partnership</Label>
                <Select
                  id="partnershipType"
                  value={form.partnershipType}
                  onChange={(e) => updateField("partnershipType", e.target.value)}
                >
                  <option value="">Select a type</option>
                  {partnershipTypeOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-femme-pink">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    invalid={errors.email}
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">
                  Message <span className="text-femme-pink">*</span>
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  required
                  invalid={errors.message}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full"
              >
                Send Enquiry
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
