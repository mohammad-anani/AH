import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const appointmentSelectorConfig: SelectorConfig<"Appointment"> = {
  selectedDisplay: ({ DoctorName, PatientName }) =>
    DoctorName + "," + PatientName,
  path: "/admin/appointments",
};
