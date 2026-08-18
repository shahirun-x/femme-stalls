import type { Metadata } from "next";
import {
  MembersHero,
  WhyJoin,
  MembershipAdvantages,
  MembershipJourney,
  RegistrationForm,
  MemberDirectory,
  MemberLoginTeaser,
} from "@/components/members";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Join Femme Stalls — a growing network of women entrepreneurs from Kilakarai. Access training, market opportunities, business support and a community that grows together.",
};

export default function MembersPage() {
  return (
    <>
      <MembersHero />
      <WhyJoin />
      <MembershipAdvantages />
      <MembershipJourney />
      <RegistrationForm />
      <MemberDirectory />
      <MemberLoginTeaser />
    </>
  );
}
