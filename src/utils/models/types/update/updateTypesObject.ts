import type {
  UpdatePerson,
  UpdateEmployee,
  UpdateAdmin,
  UpdateReceptionist,
  UpdateDoctor,
  UpdatePatient,
  UpdateDepartment,
  UpdateTestType,
  UpdateService,
  UpdateAppointment,
  UpdateTestAppointment,
  UpdateOperation,
  UpdatePrescription,
  UpdateInsurance,
  RenewInsurance,
  StartService,
  CancelService,
  CompleteService,
  RescheduleService,
} from "./updateTypes";

export type updateTypesObject = {
  Person: UpdatePerson;
  Employee: UpdateEmployee;
  Admin: UpdateAdmin;
  Receptionist: UpdateReceptionist;
  Doctor: UpdateDoctor;
  Patient: UpdatePatient;
  Department: UpdateDepartment;
  TestType: UpdateTestType;
  Service: UpdateService;
  Appointment: UpdateAppointment;
  TestAppointment: UpdateTestAppointment;
  Operation: UpdateOperation;
  Prescription: UpdatePrescription;
  Insurance: UpdateInsurance;
  RenewInsurance: RenewInsurance;
  StartService: StartService;
  CancelService: CancelService;
  CompleteService: CompleteService;
  RescheduleService: RescheduleService;
};
