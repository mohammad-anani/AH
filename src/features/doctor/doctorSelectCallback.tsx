import { doctor } from "@/utils/models/componentsConfig/receptionist/human-resources/doctor.ts";
import type {
  customFilterProps,
  customFormProps,
} from "@/utils/models/types/utils/Form&Filter";
import type { Setter } from "@/utils/models/types/utils/basics";
import { useEffect, useState } from "react";
import DoctorSelect, { type DoctorSelectState } from "./DoctorSelect";
export function useSelectedDoctors(
  field: [ID: number, Role: string][] | undefined,
  onChange: Setter<{ ID: number; Role: string }[] | undefined>,
): [DoctorSelectState, Setter<DoctorSelectState>] {
  const [selectedDoctors, setSelectedDoctors] = useState<DoctorSelectState>(
    field?.map((f) => ({ Doctor: { ID: f[0] }, Role: f[1] })) || [],
  );

  useEffect(() => {
    const formDoctors = selectedDoctors.map((docItem) => ({
      ID: docItem.Doctor.ID,
      Role: docItem.Role,
    }));
    onChange(formDoctors);
  }, [selectedDoctors, onChange]);

  return [selectedDoctors, setSelectedDoctors] as const;
}

export const DoctorFormSelectorCallback: customFormProps = [
  ({ field, onChange, isSubmitting }) => {
    const [selectedDoctors, setSelectedDoctors] = useSelectedDoctors(
      field as [ID: number, Role: string][] | undefined,
      onChange as Setter<{ ID: number; Role: string }[] | undefined>,
    );

    return (
      <DoctorSelect
        disabled={isSubmitting}
        doctors={selectedDoctors}
        setDoctors={setSelectedDoctors}
        entityObject={doctor}
      />
    );
  },
  "multiselect",
];

export const DoctorFilterSelectorCallback: customFilterProps = [
  ({ field, onChange }) => {
    const [selectedDoctors, setSelectedDoctors] = useSelectedDoctors(
      field as [id: number, role: string][] | undefined,
      onChange as Setter<{ ID: number; Role: string }[] | undefined>,
    );
    return (
      <DoctorSelect
        doctors={selectedDoctors}
        setDoctors={setSelectedDoctors}
        entityObject={doctor}
      />
    );
  },
  "multiselect",
];
