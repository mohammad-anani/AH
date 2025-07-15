import testAppointmentViewEdit from "@/features/testAppointment/ViewEdit";
import testAppointmentCard from "@/features/testAppointment/Card";
import UpdateTestAppointment from "@/features/testAppointment/Update";
import InvalidPath from "@/ui/InvalidPath";
import Appointments from "@/features/tests/Appointments";
import listLoader from "@/utils/loaders/listLoader";
import findByIDLoader from "@/utils/loaders/findByIDLoader";

export const testAppointmentsRoutes = [
  {
    path: "appointments",
    children: [
      {
        index: true,
        Component: Appointments,
        loader: listLoader("TestAppointmentsList"),
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
            path: "delete",
            Component: InvalidPath,
          },
        ],
      },
    ],
  },
];
