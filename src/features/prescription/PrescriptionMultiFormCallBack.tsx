import type { AddPrescription } from "@/utils/models/types/add";
import type { customFormProps } from "@/utils/models/types/utils/Form&Filter";
import { useEffect, useState } from "react";
import PrescriptionMultiForm from "./PrescriptionMultiForm";

export const PrescriptionMutliFormCallback: customFormProps = [
  ({ field, onChange, isSubmitting }) => {



    const [prescriptions, setPrescriptions] = useState<AddPrescription[]>([]);

    useEffect(() => {

      onChange(prescriptions);
    }, [prescriptions, onChange]);


    return (
      <PrescriptionMultiForm

        prescriptions={prescriptions}
        setPrescriptions={setPrescriptions}

      />
    );
  },
  "multiselect",
];
