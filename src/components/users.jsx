import { useMediaQuery } from "@mui/material";
import {
  BooleanField,
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  EmailField,
  Labeled,
  List,
  NumberField,
  ReferenceManyField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TabbedShowLayout,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";

export function userList() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  if (isSmallScreen) {
    return (
      <List>
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => `ID: ${record.id}`}
          tertiaryText={(record) => record.username}
          linkType="show"
        />
      </List>
    );
  }

  // Render the larger screen view
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <DeleteButton basePath="/users" />
        <ShowButton basePath="/users" />
        <EditButton basePath="/users" />
      </Datagrid>
    </List>
  );
}

export function userEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="name" fullWidth />
        <TextInput source="username" label="username" fullWidth />
        <TextInput source="email" label="email" fullWidth />
        <TextInput source="address.street" label="street" fullWidth />
        <TextInput source="address.suite" label="suite" fullWidth />
        <TextInput source="address.city" label="city" fullWidth />
        <TextInput source="address.zipcode" label="zipcode" fullWidth />
        <TextInput source="phone" label="phone" fullWidth />
        <TextInput source="website" label="website" fullWidth />
        <TextInput source="company.name" label="name" fullWidth />
        <TextInput source="company.catchPhrase" label="catchPhrase" fullWidth />
        <TextInput source="company.bs" label="bs" fullWidth />
      </SimpleForm>
    </Edit>
  );
}

export function userShow() {
  return (
    <Show>
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="User Data">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <Labeled label="Address">
            <SimpleShowLayout>
              <TextField source="address.street" label="Street" />
              <TextField source="address.suite" label="Suite" />
              <TextField source="address.city" label="City" />
              <TextField source="address.zipcode" label="ZipCode" />
            </SimpleShowLayout>
          </Labeled>
          <NumberField source="phone" />
          <UrlField source="website" />
          <Labeled label="Company">
            <SimpleShowLayout>
              <TextField source="company.name" label="Name" />
              <TextField source="company.catchPhrase" label="Catch Phrase" />
              <TextField source="company.bs" label="Business" />
            </SimpleShowLayout>
          </Labeled>
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Posts">
          <ReferenceManyField label="Posts" reference="posts" target="userId">
            <Datagrid bulkActionButtons={false}>
              <TextField source="title" />
              <TextField source="body" />
            </Datagrid>
          </ReferenceManyField>
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="To do">
          <ReferenceManyField label="To do" reference="todos" target="userId">
            <Datagrid bulkActionButtons={false}>
              <TextField source="title" />
              <BooleanField source="completed" />
            </Datagrid>
          </ReferenceManyField>
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
}

export function userCreate() {
  return (
    <Create title="Create a User">
      <SimpleForm>
        <TextInput source="name" label="name" fullWidth />
        <TextInput source="username" label="username" fullWidth />
        <TextInput source="email" label="email" fullWidth />
        <TextInput source="address.street" label="street" fullWidth />
        <TextInput source="address.suite" label="suite" fullWidth />
        <TextInput source="address.city" label="city" fullWidth />
        <TextInput source="address.zipcode" label="zipcode" fullWidth />
        <TextInput source="phone" label="phone" fullWidth />
        <TextInput source="website" label="website" fullWidth />
        <TextInput source="company.name" label="name" fullWidth />
        <TextInput source="company.catchPhrase" label="catchPhrase" fullWidth />
        <TextInput source="company.bs" label="bs" fullWidth />
      </SimpleForm>
    </Create>
  );
}
