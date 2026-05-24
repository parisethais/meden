import type { Metadata } from "next";
import { PlanPage } from "@/components/PlanPage";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plano Referência · MedEn",
  description:
    "Para o consultório que não deixa nada passar. Interpretação laboratorial por IA, sumário pré-consulta no WhatsApp, Copilot completo e API aberta.",
};

export default function ReferenciaPage() {
  return (
    <PlanPage
      plan={plans.referencia}
      newAreas={["Inteligência Clínica", "Copilot WhatsApp", "Integrações"]}
    />
  );
}
