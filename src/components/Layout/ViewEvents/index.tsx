import * as React from "react";
import Card from "~components/Layout/Card";
import Header from "~components/Navigation/Header";
import Table from "~components/Layout/Table";
import { MdEventNote } from "~icons";
import columns from "./Columns";
import { ReactElement } from "~types";

export const ViewEvents = (): ReactElement => (
  <>
    <Header title="View Events" url="/employee/events/viewall" />
    <Card
      dataTestId="view-events-page"
      icon={<MdEventNote />}
      title="View Events"
      subtitle="Past and Present Events"
    >
      <Table resend columns={columns} />
    </Card>
  </>
);

export default ViewEvents;
