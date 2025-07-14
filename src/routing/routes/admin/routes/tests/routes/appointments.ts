import testAppointmentData from "@/features/testAppointment/Data";
import testAppointmentViewEdit from "@/features/testAppointment/ViewEdit";
import testAppointmentCard from "@/features/testAppointment/Card";
import UpdateTestAppointment from "@/features/testAppointment/Update";
import AddTestAppointment from "@/features/testAppointment/Add";
import testAppointmentRow from "@/features/testAppointment/Row";
import testAppointmentHeader from "@/features/testAppointment/Header";
import testAppointmentForm from "@/features/testAppointment/Form";

export const testAppointmentsRoutes = [
  {
    path: "appointments",
    children: [
      { index: true, Component: testAppointmentData },
      { path: "header", Component: testAppointmentHeader },
      { path: "row", Component: testAppointmentRow },
      { path: "form", Component: testAppointmentForm },
      {
        path: "add",
        Component: AddTestAppointment,
      },
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
            Component: () => {
              throw new Error("This URL is not a valid path");
              return null;
            },
          },
        ],
      },
    ],
  },
];
