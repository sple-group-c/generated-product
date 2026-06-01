import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  InputField,
  SelectionField,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveMeeting from '../services/saveMeeting';
import getListProject from '@/project/services/getListProject';
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahMeeting = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [projectOptions, setProjectOptions] = useState([]);

  useEffect(() => {
    getListProject()
      .then(({ data }) => {
        const opts = (data.data || []).map((p) => ({
          value: String(p.idProject),
          label: p.name,
        }));
        setProjectOptions(opts);
      })
      .catch(console.error);
  }, []);

  const onSubmit = (data) => {
    const cleanData = cleanFormData(data);
    saveMeeting({ ...cleanData })
      .then(({ data: { data } }) => {
        navigate('/meeting-management');
        notifySuccess('Save Meeting berhasil!');
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <div>
      <Layouts.FormComponentLayout
        title="Tambah Meeting"
        onSubmit={handleSubmit(onSubmit)}
        vas={[]}
        formFields={[
          <Controller
            key="name"
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Nama Meeting"
                placeholder="Masukkan nama meeting"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          <Controller
            key="startDate"
            name="startDate"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Start Date"
                placeholder="Masukkan start date"
                type="date"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          <Controller
            key="endDate"
            name="endDate"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="End Date"
                placeholder="Masukkan end date"
                type="date"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          <Controller
            key="location"
            name="location"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Lokasi"
                placeholder="Masukkan lokasi"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          <Controller
            key="idProject"
            name="idProject"
            control={control}
            render={({ field, fieldState }) => (
              <SelectionField
                label="Project"
                placeholder="Pilih project"
                options={projectOptions}
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="save" type="submit" variant="primary">Save</Button>
        ]}
      />
    </div>
  );
};

export default FormTambahMeeting;
