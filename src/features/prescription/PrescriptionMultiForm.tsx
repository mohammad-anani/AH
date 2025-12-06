import Clickable from "@/ui/customComponents/Clickable";
import List from "@/ui/entityComponents/List";
import { prescription } from "@/utils/models/componentsConfig/doctor";
import { type AddPrescription } from "@/utils/models/types/add";
import type { PrescriptionRow } from "@/utils/models/types/row/rowTypes";
import type { Setter } from "@/utils/models/types/utils/basics";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import PrescriptionForm from "./PrescriptionForm";

export default function PrescriptionMultiForm(
  { prescriptions, setPrescriptions }: {

    prescriptions: AddPrescription[],
    setPrescriptions: Setter<AddPrescription[]>

  }
) {

  const [index, setIndex] = useState(-1);

  const gridStyle = {
    display: "grid",
    gap: "15px",
    gridTemplateColumns: "2fr 4fr 1fr 1fr",
  };


  const [, dataFields] = prescription["rowTemplate"];

  const headerFields = ["Medication", "Dosage"]

  const Header = (
    <li key="Header" style={gridStyle}>
      {headerFields.map((field) => (
        <span>{field}</span>
      ))}
    </li>
  );


  const render = (item: AddPrescription) => {

    const currentIndex = prescriptions.findIndex(p => p.Medication == item.Medication);
    return (
      <li style={gridStyle} key={item?.Medication}>
        {dataFields(item as PrescriptionRow).slice(0, 2).map((field) => (
          <span>{String(field)}</span>
        ))}
        <Clickable
          className="flex! items-center gap-x-1"
          as="button"
          variant="secondary"
          onClick={() => {

            setIndex(currentIndex)
          }}
        >
          <Pencil className="*:text-primary! h-[20px] w-[20px]" />
          Edit
        </Clickable>
        <Clickable
          className="flex! items-center gap-x-1"
          as="button"
          variant="secondary"
          onClick={() => {

            setPrescriptions(pres => pres.filter(p => p.Medication !== item.Medication))

            if (index === currentIndex) {
              setIndex(-1)
            }

          }}
        >
          <Trash className="*:text-primary! h-[20px] w-[20px]" />
          Remove
        </Clickable>
      </li>
    );
  };



  return (
    <>
      <PrescriptionForm
        key={index}
        index={index}
        prescriptions={prescriptions}
        setPrescriptions={setPrescriptions}
      />
      <List<AddPrescription>

        items={prescriptions}
      >
        <List.Items

          Header={Header}
          render={render}
          itemsCount={prescriptions.length}


        />
      </List>


    </>
  );
}
