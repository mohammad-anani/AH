import H2 from "@/ui/customComponents/H2";
import Clickable from "@/ui/customComponents/Clickable";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form as RouterForm,
  useSubmit,
  useNavigation,
  useLocation,
} from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { MoneyInput, SelectInput } from "@/ui/form-inputs";
import { useEffect, useState } from "react";
import { type Appointment, type Bill, type Operation, type TestAppointment } from "@/utils/models/types/normal/types";
import findByID from "@/api/findByID";
import { formatMoney } from "@/utils/formatters/formatMoney";
import { AddPaymentSchema } from "@/utils/models/zod/addSchemas/finance/payment";


export default function Pay({ entity }: { entity: string }) {
  const submit = useSubmit();
  const location = useLocation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const serviceID = +(location.pathname.split("/").at(-2) ?? -1);




  const [bill, setBill] = useState<Bill | null>(null);

  useEffect(() => {


    async function fetch() {

      const data: Operation | TestAppointment | Appointment = await findByID(entity + "/" + serviceID);
      console.log(data);

      setBill(data.Service.Bill);

    };

    fetch();

  }, [])



  const amountLeft = (bill?.Amount ?? 0) - (bill?.AmountPaid ?? 0);


  const methods = useForm({
    resolver: zodResolver(AddPaymentSchema(amountLeft)),
    defaultValues: {
      Amount: 0,
      Method: "",
    },
  });

  const {
    handleSubmit,
  } = methods;

  if (bill?.ID === -1)
    return null;


  const onSubmit = (data: any) => {
    submit(data, {
      method: "post",
      encType: "application/json",
    });
  };

  return (
    <>
      <Clickable className="text-sm!" as="Back" variant="secondary">
        Back
      </Clickable>

      <H2 className="mb-6">Make Payment</H2>


      <FormProvider {...methods}>
        <RouterForm
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 *:text-xl! *:odd:font-bold"

        >
          <label >Amount Left:</label>
          <span>
            {formatMoney(amountLeft)}
          </span>
          <MoneyInput
            fieldKey="Amount"
            label="Amount:"
            disabled={isSubmitting}
          />
          <SelectInput
            fieldKey="Method"
            label="Method:"
            data={[
              { label: "Card", value: "Card" },
              { label: "Cash", value: "Cash" },
            ]}
            disabled={isSubmitting}
          />
          <Clickable
            className="col-span-2 mt-10"
            as="button"
            type={"submit"}
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Paying..." : "Pay"}
          </Clickable>

        </RouterForm>
      </FormProvider>

    </>
  );
}
