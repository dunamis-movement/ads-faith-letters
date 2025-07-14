import { Modal } from "../Modal";
import { LetterForm } from "./LetterForm";

export function CreateLetterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onClose()}
      title="Criar uma Carta"
    >
      <LetterForm />
    </Modal>
  );
}

export default CreateLetterModal;