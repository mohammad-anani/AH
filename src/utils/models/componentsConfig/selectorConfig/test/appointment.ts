import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";

export const testAppointmentSelectorConfig: SelectorConfig<"TestAppointment"> =
  {
    selectedDisplay: ({ TestName, PatientName }) =>
      TestName + "," + PatientName,
    path: "/admin/tests/appointments",
  };
