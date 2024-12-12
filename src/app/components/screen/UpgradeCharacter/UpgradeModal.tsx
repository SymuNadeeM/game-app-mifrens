import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const UpgradeModal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex justify-center items-center z-50">
      <div className="upgrade-modal-bg w-[812px] h-full lg:h-[335px] mt-[80px] lg:mt-10 relative">
        {children}
      </div>
    </div>
  );
};

export default UpgradeModal;
