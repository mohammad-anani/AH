import testAppointmentData from "@/features/testAppointment/Data";
import testAppointmentViewEdit from "@/features/testAppointment/ViewEdit";
import testAppointmentCard from "@/features/testAppointment/Card";
import UpdateTestAppointment from "@/features/testAppointment/Update";
import InvalidPath from "@/ui/InvalidPath";

export const testAppointmentsRoutes = [
  {
    path: "appointments",
    children: [
      { index: true, Component: testAppointmentData },
      {
        path: ":id",
        Component: testAppointmentViewEdit,
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
