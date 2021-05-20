import CallTimes from "~components/Layout/CallTimes";
import Center from "~components/Layout/Center";
import EmailReminders from "~components/Layout/EmailReminders";
import FormatDate from "~components/Layout/FormatDate";
import ScheduledEmployees from "~components/Layout/ScheduledEmployees";
import { shortDateTimeFormat } from "~utils/dateFormats";
import {
  GridColumns,
  GridValueGetterParams,
  ReactElement,
  TEmployeeIds
} from "~types";

const Columns: GridColumns = [
  { field: "_id", headerName: "Database Id", flex: 1.5, sortable: false },
  { field: "seasonId", headerName: "Season", width: 110, sortable: false },
  {
    field: "team",
    headerName: "Team",
    flex: 1,
    sortable: false
  },
  {
    field: "opponent",
    headerName: "Opponent",
    flex: 1,
    sortable: false
  },
  {
    field: "eventType",
    headerName: "Type",
    width: 80,
    sortable: false
  },
  {
    field: "uniform",
    headerName: "Uniform",
    flex: 2,
    sortable: false
  },
  {
    field: "eventDate",
    headerName: "Date",
    flex: 2.33,
    sortable: false,
    renderCell: (params: GridValueGetterParams): ReactElement => (
      <FormatDate
        format={shortDateTimeFormat}
        date={params.getValue(params.id, "eventDate") as Date}
        style={{ width: "100%" }}
      />
    )
  },
  {
    field: "callTimes",
    headerName: "Call Times",
    flex: 1,
    sortable: false,
    renderCell: (params: GridValueGetterParams): ReactElement => (
      <CallTimes
        times={params.getValue(params.id, "callTimes") as Array<string>}
      />
    )
  },
  {
    field: "employeeResponses",
    headerName: "Employee Responses",
    flex: 1,
    sortable: false,
    renderCell: (params: GridValueGetterParams): ReactElement => (
      <Center style={{ width: "100%" }}>
        {(params.getValue(params.id, "employeeResponses") as Array<any>).length}
      </Center>
    )
  },
  {
    field: "scheduledIds",
    headerName: "Scheduled Employees",
    flex: 1,
    sortable: false,
    renderCell: (params: GridValueGetterParams): ReactElement => (
      <ScheduledEmployees
        employees={params.getValue(params.id, "scheduledIds") as TEmployeeIds}
      />
    )
  },
  {
    field: "sentEmailReminders",
    headerName: "Email Reminders",
    flex: 0.66,
    sortable: false,
    renderCell: (params: GridValueGetterParams): ReactElement => (
      <EmailReminders
        status={params.getValue(params.id, "sentEmailReminders") as boolean}
      />
    )
  }
];

export default Columns;
