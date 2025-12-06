import Clickable from "@/ui/customComponents/Clickable";
import Form from "@/ui/entityComponents/Form";
import { prescription } from "@/utils/models/componentsConfig/doctor";
import { type AddPrescription } from "@/utils/models/types/add";
import type { Setter } from "@/utils/models/types/utils/basics";
import { AddPrescriptionSchema } from "@/utils/models/zod/addSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

interface PrescriptionFormProps {
  index: number;
  setIndex: Setter<number>;
  prescriptions: AddPrescription[];
  setPrescriptions: Setter<AddPrescription[]>;
}

export default function PrescriptionForm({
  index,
  setIndex,
  prescriptions,
  setPrescriptions,
}: PrescriptionFormProps) {
  const methods = useForm<AddPrescription>({
    resolver: zodResolver(AddPrescriptionSchema),
    defaultValues:

      // {
      //   Diagnosis
      //     :
      //     "ddddddddddddd",
      //   Dosage
      //     :
      //     "ddddddddddddddddd",
      //   Frequency
      //     :
      //     "ddddddddddddddd",
      //   Medication
      //     :
      //     "dddddddddddd",
      //   MedicationEnd
      //     :
      //     "2025-12-26T10:41",
      //   MedicationStart
      //     :
      //     "2025-12-11T10:41", Notes: "",
      // }

      // ||
      index !== -1 ? prescriptions.at(index) : {},
  });

  const { trigger } = methods;



  const handleAdd = async () => {
    const isValid = await trigger();
    if (isValid) {

      console.log(methods.getValues());

      if (index === -1)
        setPrescriptions((pres) => [methods.getValues() as AddPrescription, ...pres]);
      else
        setPrescriptions((pres) => pres.map((p, i) => i === index ? methods.getValues() as AddPrescription : p));

      if (index !== -1) setIndex(-1);
      methods.reset();
    }
  };


  return (
    <FormProvider {...methods} >
      <div
        className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 *:text-xl! *:odd:font-bold"
      >
        <Form fields={prescription.formConfig} mode="add" />
      </div>

      <div className="flex gap-2 mt-5 justify-end">

        <Clickable
          as="button"
          type="button"
          variant="secondary"
          onClick={handleAdd}
        >
          {index === -1 ? "Add" : "Edit"} Prescription
        </Clickable>

      </div>
    </FormProvider>
  );
}
