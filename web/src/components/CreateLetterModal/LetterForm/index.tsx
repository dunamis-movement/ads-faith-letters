import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./LetterForm.module.css";
import { useAppContext } from "../../../contexts/appContext";
import { useState } from "react";
import { saveLetterToAPI } from "../../../api/api";

const schema = z.object({
  missionaryId: z.string().min(1, "Selecione um missionário"),
  senderName: z.string().min(1, "Digite seu nome"),
  content: z.string().min(1, "Digite sua mensagem"),
});

type LetterFormData = z.infer<typeof schema>;

export function LetterForm() {
  const { missionaries, setSelectedMissionary } = useAppContext();
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LetterFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LetterFormData) => {
    const missionary = missionaries.find((m) => m.id === data.missionaryId) || null;
    setSelectedMissionary(missionary);

    // Aqui você pode enviar os dados para sua API ou função addLetter
    saveLetterToAPI({
      missionaryId: data.missionaryId,
      content: data.content,
      senderName: data.senderName,
      date: new Date().toISOString()
    });

    reset();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className={styles.formContainer}>
      {showSuccess && (
        <div className={styles.successMessage}>
          Sua carta foi enviada com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off">
        {/* Missionary Select */}
        <div className={styles.formGroup}>
          <label htmlFor="missionary-select" className={styles.label}>
            Selecione um missionário:
          </label>
          <select
            id="missionary-select"
            {...register("missionaryId")}
            className={styles.input}
            disabled={isSubmitting}
          >
            <option value="">-- Selecione um missionário --</option>
            {missionaries.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} - {m.country}
              </option>
            ))}
          </select>
          {errors.missionaryId && (
            <span className={styles.error}>{errors.missionaryId.message}</span>
          )}
        </div>

        {/* Sender Name */}
        <div className={styles.formGroup}>
          <label htmlFor="senderName">Seu nome:</label>
          <input
            id="senderName"
            {...register("senderName")}
            placeholder="Digite seu nome"
            className={styles.input}
            disabled={isSubmitting}
          />
          {errors.senderName && (
            <span className={styles.error}>{errors.senderName.message}</span>
          )}
        </div>

        {/* Content */}
        <div className={styles.formGroup}>
          <label htmlFor="content">Sua mensagem:</label>
          <textarea
            id="content"
            {...register("content")}
            placeholder="Escreva sua carta..."
            className={styles.textarea}
            rows={6}
            disabled={isSubmitting}
          />
          {errors.content && (
            <span className={styles.error}>{errors.content.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          Enviar carta
        </button>
      </form>
    </div>
  );
}

