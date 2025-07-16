import testAppointmentViewEdit from "@/features/tests/appointment/ViewEdit";
import testAppointmentCard from "@/features/tests/appointment/Card";
import UpdateTestAppointment from "@/features/tests/appointment/Update";
import InvalidPath from "@/ui/InvalidPath";
import Appointments from "@/interfaces/admin/pages/tests/Appointments";
import listLoader from "@/utils/loaders/listLoader";
import findByIDLoader from "@/utils/loaders/findByIDLoader";
import Card from "@/features/payments/Card";
import Update from "@/features/payments/Update";
import ViewEdit from "@/features/payments/ViewEdit";
import addUpdateAction from "@/utils/actions/addUpdateAction";

export const testAppointmentsRoutes = [
  {
    path: "appointments",
    children: [
      {
        index: true,
        Component: Appointments,
        loader: listLoader("TestAppointmentRows"),
      },
      {
        path: ":id",
        Component: testAppointmentViewEdit,
        loader: findByIDLoader("TestAppointments"),
        children: [
          { index: true, Component: testAppointmentCard },
          {
            path: "edit",
            Component: UpdateTestAppointment,
          },
          {
            path: "payment",
            Component: ViewEdit,
            children: [
              { index: true, Component: Card },
              {
                path: "pay",
                Component: Update,
                action: addUpdateAction("Payments"),
              },
            ],
          },
          {
            path: "delete",
            Component: InvalidPath,
          },
        ],
      },
    ],
  },
];
