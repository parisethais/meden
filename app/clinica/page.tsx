import type { Metadata } from "next";
import { PlanPage } from "@/components/PlanPage";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plano Clínica · MedEn",
  description:
    "Para quem já tem equipe, ou está construindo uma. OCR de laudos, prescrição Memed, permissões granulares, relatórios clínicos completos e Copilot intermediário.",
};

export default function ClinicaPage() {
  return (
    <PlanPage
      plan={plans.clinica}
      newAreas={["Prontuário", "Equipe", "Relatórios", "Copilot WhatsApp"]}
    />
  );
}
