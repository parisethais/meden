import type { Metadata } from "next";
import { PlanPage } from "@/components/PlanPage";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plano Solo · MedEn",
  description:
    "Para o médico que toca o consultório com as próprias mãos. CRM, prontuário, agenda, portal do paciente, financeiro e Copilot básico no WhatsApp.",
};

export default function SoloPage() {
  return <PlanPage plan={plans.solo} />;
}
