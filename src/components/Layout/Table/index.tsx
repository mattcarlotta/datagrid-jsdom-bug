/* eslint-disable no-alert */
import * as React from "react";
import DataGrid from "~components/Layout/DataGrid";
import FadeIn from "~components/Layout/FadeIn";
import LoadingPanel from "~components/Layout/LoadingPanel";
import Padding from "~components/Layout/Padding";
import TableActions from "~components/Layout/TableActions";
import {
  GridColumns,
  GridColDef,
  GridPageChangeParams,
  GridRowId,
  GridSelectionModelChangeParams,
  GridValueGetterParams,
  ReactElement
} from "~types";

export type TTableProps = {
  disableCheckbox?: boolean;
  columns: GridColumns;
  edit?: string;
  resend?: boolean;
  schedule?: boolean;
  view?: string;
};

export type TTableState = {
  data: Array<any>;
  isLoading: boolean;
  totalDocs: number;
  selectedIds: Array<GridRowId>;
};

export type TTableData = {
  docs: Array<any>;
  totalDocs: number;
};

const initalState = {
  data: [],
  isLoading: true,
  totalDocs: 0,
  selectedIds: []
};

const Table = ({
  columns,
  disableCheckbox,
  ...rest
}: TTableProps): ReactElement => {
  const [state, setState] = React.useState<TTableState>(initalState);
  const { data, isLoading, selectedIds, totalDocs } = state;

  const fetchData = React.useCallback(async (): Promise<void> => {
    try {
      const data: TTableData = await new Promise(resolve =>
        setTimeout(() => {
          resolve({
            docs: [
              {
                callTimes: [
                  "2021-04-22T18:30:25-07:00",
                  "2021-04-22T18:45:42-07:00",
                  "2021-04-22T19:00:47-07:00"
                ],
                employeeResponses: [],
                eventDate: "2021-07-02T02:30:00.000Z",
                eventType: "Game",
                id: "608253a62f8e84ec172aa0b4",
                location: "SAP Center at San Jose",
                notes: "",
                opponent: "Calgary Flames",
                scheduledIds: [],
                seasonId: "20212022",
                sentEmailReminders: false,
                team: "San Jose Sharks",
                uniform: "Sharks Teal Jersey",
                _id: "608253a62f8e84ec172aa0b4"
              },
              {
                callTimes: [
                  "2021-04-20T18:30:04-07:00",
                  "2021-04-20T18:45:50-07:00",
                  "2021-04-20T19:00:56-07:00"
                ],
                employeeResponses: [],
                eventDate: "2021-07-01T02:30:00.000Z",
                eventType: "Game",
                id: "607f8d3b14aaba53ca79061e",
                location: "SAP Center at San Jose",
                notes: "",
                opponent: "Carolina Hurricanes",
                scheduledIds: [],
                seasonId: "20212022",
                sentEmailReminders: false,
                team: "San Jose Sharks",
                uniform: "Sharks Black Jersey",
                _id: "607f8d3b14aaba53ca79061e"
              }
            ],
            totalDocs: 2
          });
        }, 1000)
      );

      setState({
        data: data.docs,
        isLoading: false,
        totalDocs: data.totalDocs,
        selectedIds: []
      });
    } catch (err) {
      setState(prevState => ({ ...prevState, isLoading: false }));
    }
  }, []);

  const handlePageChange = ({ page }: GridPageChangeParams): void => {
    alert(`Page change to ${page}`);
  };

  const handleSelectionChange = ({
    selectionModel
  }: GridSelectionModelChangeParams): void => {
    setState(prevState => ({ ...prevState, selectedIds: selectionModel }));
  };

  const deleteRecord = React.useCallback((id: string): void => {
    alert(`Delete ${id}`);
  }, []);

  const deleteManyRecords = React.useCallback((): void => {
    alert(`Delete ${JSON.stringify(selectedIds, null, 2)}`);
  }, [selectedIds]);

  const resendRecordMail = React.useCallback((id: string): void => {
    alert(`Resend ${id}`);
  }, []);

  const columnsWithActions = React.useMemo(
    (): Array<GridColDef> => [
      ...columns,
      {
        field: "actions",
        headerName: "Actions",
        width: 95,
        sortable: false,
        renderCell: (params: GridValueGetterParams): ReactElement => (
          <TableActions
            disableCheckbox={disableCheckbox}
            handleDeleteRecord={deleteRecord}
            handleDeleteManyClick={deleteManyRecords}
            handleResendMail={resendRecordMail}
            params={params}
            selectedIds={selectedIds}
            {...rest}
          />
        )
      }
    ],
    [columns, selectedIds]
  );

  React.useEffect(() => {
    if (isLoading) fetchData();
  }, [isLoading, fetchData]);

  return (
    <Padding
      data-testid="data-table-container"
      left="20px"
      top="20px"
      right="20px"
      bottom="40px"
    >
      {isLoading ? (
        <FadeIn>
          <LoadingPanel
            data-testid="data-table-loading"
            borderRadius="5px"
            height="645px"
          />
        </FadeIn>
      ) : (
        <div
          data-testid="data-table"
          style={{
            height: 645,
            paddingTop: 20,
            width: "100%"
          }}
        >
          <DataGrid
            disableCheckbox={disableCheckbox}
            rows={data}
            totalDocs={totalDocs}
            handlePageChange={handlePageChange}
            handleSelectionChange={handleSelectionChange}
            page={0}
            columns={columnsWithActions}
          />
        </div>
      )}
    </Padding>
  );
};

export default Table;
