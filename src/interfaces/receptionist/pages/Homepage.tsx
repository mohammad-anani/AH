import DoctorSelect from "@/features/doctor/DoctorSelect";
import { doctor } from "@/utils/models/componentsConfig/receptionist";
import type { DoctorRow } from "@/utils/models/types/row/rowTypes";

import { useState } from "react";

export default function Homepage() {
  const ss = useState<(DoctorRow | null)[]>([{ ID: 1 }, { ID: 2 }]);
  return (
    <>
      <h1>RECEPTIONIST HOMEPAGE</h1>
      <DoctorSelect selectedDoctorsState={ss} entityObject={doctor} />
    </>
  );
}
