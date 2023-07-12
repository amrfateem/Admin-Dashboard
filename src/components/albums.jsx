import { useMediaQuery } from "@mui/material";
import {
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  ImageInput,
  List,
  Pagination,
  ReferenceManyField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

export function albumsList() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  if (isSmallScreen) {
    return (
      <List>
        <SimpleList
          primaryText={record => record.title}
          linkType="show"
        />
      </List>
    );
  }

  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DeleteButton />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function albumsEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label="title" />
        <ReferenceManyField label="photos" reference="photos" target="albumId">
          <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="url" title="title" />
            <ImageInput source="image" label="image" accept="image/*" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleForm>
    </Edit>
  );
}

export function albumsShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <ReferenceManyField
          pagination={<Pagination />}
          perPage={10}
          label="photos"
          reference="photos"
          target="albumId"
        >
          <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="thumbnailUrl" title="title" label="Photo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
}
