"use client"

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        isOpen
        onClose={() => {}}
        title="test"
        description="test description"
      />
    </div>
  );
};

export default SetupPage;
