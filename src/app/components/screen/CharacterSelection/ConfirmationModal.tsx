import Image from "next/image";
import React from "react";
import close from "../../../../assets/character-select/close.svg";

interface ModalProps {
  isOpen: boolean;
  characterName: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ModalProps> = ({
  isOpen,
  characterName,
  onConfirm,
  onClose,
}) => {
  if (!isOpen) return null;

  console.log(onConfirm);

  return (
    <div className="fixed inset-0 bg-[#050A1CD4] flex items-center justify-center z-40">
      <div className="w-[390px] h-[207px] bg-[#121C38]/[50%] confirm-modal relative">
        <div className="w-full h-9 rounded-tl-lg rounded-tr-lg flex items-center justify-center confirm-header bg-[#0E1E3E]">
          <h3 className="text-lg font-semibold text-[#C5C9D1]">Confirmation</h3>
        </div>
        <div className="pl-[30px] pt-[30px]">
          <p className="text-sm text-white/[70%] max-w-[300px]">
            Are you sure you want to proceed with{" "}
            <span className="font-bold">{characterName}</span>. You can’t change
            this character once you proceed.
          </p>
        </div>
        <div className="mt-7 flex items-center justify-center">
          <div className="flex items-center gap-6">
            <button
              className="w-[116px] h-8 rounded back-button font-semibold text-[#E7E9EC] flex items-center justify-center"
              onClick={onClose}
            >
              Back
            </button>
            <button
              className="w-[116px] h-8 rounded proceed-button font-semibold text-[#0C1A35] flex items-center justify-center"
              onClick={onConfirm}
            >
              Proceed
            </button>
          </div>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-[-11.77px] right-[-11.77px] w-[30.39px] h-[30.39px] rounded-full flex items-center justify-center close-modal cursor-pointer"
          onClick={onClose}
        >
          <Image src={close} alt="close" />
        </button>

        {/* Modal Message */}
      </div>
    </div>
  );
};

export default ConfirmationModal;
