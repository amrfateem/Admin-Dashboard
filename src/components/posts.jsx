import { useMediaQuery } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";
import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  EmailField,
  List,
  ReferenceField,
  ReferenceManyField,
  RichTextField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

export function postList() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  if (isSmallScreen) {
    return (
      <List>
        <SimpleList
          primaryText={(record) => record.title}
          tertiaryText={(record) => record.body}
          linkType="show"
        />
      </List>
    );
  }

  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" link="show" />
        <TextField source="title" />
        <RichTextField source="body" />
        <DeleteButton />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function postEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label="title" />
        <TextInput source="body" label="body" />
      </SimpleForm>
    </Edit>
  );
}

export function postShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <RichTextField source="body" />
        <ReferenceManyField
          label="Comments"
          reference="comments"
          target="postId"
        >
          <Datagrid bulkActionButtons={false}>
            <EmailField source="email" />
            <TextField source="name" label="Title" />
            <RichTextField source="body" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
}

export function postCreate() {
  return (
    <Create title="Create a Post">
      <SimpleForm fullWidth multiline>
        <ReferenceField source="userId" reference="users" />
        <TextInput source="title" label="Title" fullWidth multiline />
        <RichTextInput source="body" label="Body" fullWidth multiline />
      </SimpleForm>
    </Create>
  );
}
