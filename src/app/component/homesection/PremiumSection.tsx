"use client";
import React, { useState } from "react";
import ButtonWhiteText from "../common/button/ButtonWhiteText";
import ScheduleMeetModal from "../modal/ScheduleMeetModal";
import Toast from "../common/toast/Toast";

interface PremiumSectionProps {
  title: string;
  cta: string;
}

const PremiumSection = ({ cta, title }: PremiumSectionProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmit = (data: any) => {
    console.log("data submitted", data);

    setToastMessage(
      "Your meeting has been successfully scheduled! Our team will reach out to you shortly. Thank you for your cooperation."
    );
  };

  return (
    <section className="w-full h-auto bg-level text-white flex items-center justify-center py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center w-full px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left sm:w-[700px] mb-4 sm:mb-0 font-serif">
          {title}
        </h2>
        <ButtonWhiteText name={cta} onClick={() => setModalOpen(true)} />
      </div>

      <ScheduleMeetModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </section>
  );
};

export default PremiumSection;
