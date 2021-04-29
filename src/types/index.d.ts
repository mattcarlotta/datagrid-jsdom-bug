/* istanbul ignore file */
import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { NextRouter } from "next/router";
import { AppProps } from "next/app";
import { AxiosResponse } from "axios";
import {
  ComponentType,
  ChangeEvent,
  CSSProperties,
  FC,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  ReactChild,
  ReactElement,
  ReactNode,
  ReactPortal,
  ReactText,
  Ref,
  RefObject
} from "react";
import { Moment } from "moment-timezone";
import {
  GridColDef,
  GridColumns,
  GridPageChangeParams,
  GridRowId,
  GridRowsProp,
  GridSelectionModelChangeParams,
  GridValueGetterParams
} from "@material-ui/data-grid";
import { TransitionProps } from "@material-ui/core/transitions";
import { DatePickerView } from "@material-ui/pickers";
import { AnyAction, Store } from "redux";
import { ConnectedProps } from "react-redux";
import { SagaIterator, Task } from "redux-saga";
import { TRootState } from "~reducers";

export type PickReduxState<T> = Pick<TRootState, T>;

export type TAvatarData = {
  form: FormData;
  id: string;
};

export type TAvatarResData = {
  avatar: string;
};

export type TAuthData = {
  id?: string;
  avatar?: string;
  email?: string;
  emailReminders?: boolean;
  firstName?: string;
  lastName?: string;
  registered?: string;
  role?: string;
  status?: string;
};

export type TUser = {
  id: string;
  avatar?: string;
  email: string;
  emailReminders: boolean;
  firstName: string;
  lastName: string;
  registered: string;
  role: string;
  status: string;
};

export type TLoginData = {
  email: string;
  password: string;
};

export type TMailData = {
  _id: string;
  sendTo: Array<string>;
  status: string;
  sendFrom: string;
  sendDate: string;
  message: string;
  subject: string;
};

export type TSignupData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  token: string;
};

export type TSeasonData = {
  seasonId: string;
  startDate: string;
  endDate: string;
};

export type TSeasonAPIQueryConfig = { id?: string } & TSeasonData;

export type TService = {
  _id: string;
  automatedOnline: boolean;
  emailOnline: boolean;
  eventOnline: boolean;
  eventDay: string;
  eventMonth: string;
  eventTime: string;
  formReminderOnline: boolean;
  formReminderDay: string;
  formReminderMonth: string;
  formReminderTime: string;
  scheduleOnline: boolean;
  scheduleDay: string;
  scheduleMonth: string;
  scheduleTime: string;
};

export type TNewPasswordData = {
  password: string;
  token: string;
};

export type TResetPasswordData = {
  email: string;
};

export type TSideMenuNodeIds = Array<string>;

export type TInputType = "text" | "password" | "email" | string;
export type TTextAreaType = "textarea";

export type TIconType =
  | "calander"
  | "erase"
  | "id"
  | "key"
  | "location"
  | "lock"
  | "mail"
  | "note"
  | "person"
  | "puck"
  | "remove"
  | "search"
  | "tshirt"
  | "user"
  | "usertag"
  | string;

export type EventTarget = {
  target: {
    name: string;
    value: string | boolean | Array<any>;
  };
};

export type EventTargetMoment = {
  target: {
    name: string;
    value: Moment | null;
  };
};

export type EventTargetDataset = {
  target: {
    dataset: {
      name: string;
      value: string;
    };
  };
};

export type TURLQuery = Record<string, any>;

export type TFilters = Array<{
  name: string;
  selectType?: string;
  title: string;
  type: string;
}>;

export type TEmployeeIds = Array<{
  _id?: string;
  firstName?: string;
  lastName?: string;
}>;

export type EmailTransferList = Array<string>;

export type TBaseFieldProps = {
  id?: string;
  containerStyle?: CSSProperties;
  disabled?: boolean;
  emptyLabel?: string;
  errors?: string;
  format?: string;
  icon?: TIconType;
  inputStyle?: CSSProperties;
  innerStyle?: CSSProperties;
  isSearchable?: boolean;
  label?: ReactNode;
  justifyContent?: string;
  maxLength?: number;
  name: string;
  onChange?: (event: ChangeEvent<any>) => void;
  onFieldRemove?: (name: string) => void;
  placeholder?: string;
  required: boolean;
  readOnly?: boolean;
  notes?: string;
  radioContainerStyle?: CSSProperties;
  radioLabelStyle?: CSSProperties;
  radioStyle?: CSSProperties;
  style?: CSSProperties;
  selectOptions?: Array<string>;
  textAlign?: string;
  type: string;
  tooltip?: string;
  transferList?: EmailTransferList;
  value?: string | Moment | Array<Moment> | Array<string> | boolean | null;
  updateEvent?: boolean;
};

export type TEvent = {
  _id: string;
  eventType: string;
  team: string;
  opponent?: string;
  location: string;
  callTimes: Array<string>;
  uniform: string;
  seasonId: string;
  eventDate: string;
  notes?: string;
  employeeResponses: Array<{
    _id: string;
    response: string;
    notes: string;
  }>;
};

export type TEventScheduleUserDrop = {
  source?: {
    index: number;
    droppableId: string;
  };
  destination?: {
    index: number;
    droppableId: string;
  };
  draggableId?: string;
};

export type TEventAPIQueryConfig = { id?: string } & TEvent;

export type TEventColumn = {
  _id: string;
  title: string;
  employeeIds: Array<string>;
};

export type TEventColumns = Array<TEventColumn>;

export type TEventData = {
  _id: string;
  eventDate: string;
  eventNotes?: string;
  eventType: string;
  notes?: string;
  opponent?: string;
  location?: string;
  employeeResponse?: string;
  employeeNotes?: string;
  uniform?: string;
  team: string;
  schedule: Array<{
    _id: string;
    title?: string;
    employeeIds: TEmployeeIds;
  }>;
};

export type TEventUsers = Array<{
  _id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  response: string;
  notes?: string;
}>;

export type TEventSchedule = {
  event: TEvent;
  users: TEventUsers;
  columns: TEventColumns;
};

export type TForm = {
  endMonth: string;
  expirationDate: string;
  seasonId: string;
  sentEmails: boolean;
  startMonth: string;
  sendEmailNotificationsDate: string;
  notes?: string;
};

export type TFormData = {
  _id?: string;
  startMonth?: string;
  endMonth?: string;
  expirationDate?: string;
  eventCounts?: number;
};

export type TFormAPIQueryConfig = { id?: string } & TForm;

export type TEventEmployeeResponse = Array<{
  _id?: string;
  response?: string;
  notes?: string;
}>;

export type TApEventDetails = {
  _id: string;
  eventDate: string;
  eventType: string;
  notes?: string;
  opponent?: string;
  location: string;
  employeeResponse?: TEventEmployeeResponse;
  team: string;
};

export type TAPFormDetails = {
  _id: string;
  endMonth: string;
  expirationDate: string;
  notes?: string;
  sendEmailNotificationsDate: string;
  sentEmails: boolean;
  startMonth: string;
};

export type TAPFormData = {
  events: Array<TApEventDetails>;
  form: TAPFormDetails;
};

export type TAvailabilityData = {
  id: string;
  value: string;
};

export type TEmployeeAvailabilityData = {
  id: string;
  availability: number;
};

export type TEventDistributionData = {
  name: string;
  "Event Count": number;
};

export type TEventResponseCount = {
  id: string;
  value: number;
};

export type TEventResponse = {
  id: string;
  value: string;
  notes?: string;
  updateEvent: boolean;
};

export type TEventScheduledEvents = {
  id: string;
  events: number;
};

export type TAvailabilityAggData = {
  eventAvailability: Array<TAvailabilityData>;
  memberResponseCount: Array<TEventResponseCount>;
  memberScheduleEvents: Array<TEventScheduledEvents>;
};

export interface SagaStore extends Store {
  sagaTask: Task;
}

export {
  AnyAction,
  AppProps,
  AxiosResponse,
  ChangeEvent,
  ComponentType,
  ConnectedProps,
  CSSProperties,
  DatePickerView,
  FC,
  FormEvent,
  GridColDef,
  GridColumns,
  GridPageChangeParams,
  GridRowId,
  GridRowsProp,
  GridSelectionModelChangeParams,
  GridValueGetterParams,
  KeyboardEvent,
  MouseEvent,
  Moment,
  NextApiRequest,
  NextApiResponse,
  NextPage,
  NextRouter,
  ReactChild,
  ReactElement,
  ReactNode,
  ReactPortal,
  ReactText,
  Ref,
  RefObject,
  SagaIterator,
  TransitionProps,
  TRootState
};
