import React from "react";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  InputField,
  SelectionField,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateReminder from '../services/updateReminder'
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const isDisabledOptions = [
  { value: "false", label: "false" },
  { value: "true", label: "true" },
]

const FormEditReminderForm = ({ reminder }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      hour: reminder.hour,
      minute: reminder.minute,
      isDisabled: String(reminder.isDisabled),
    }
  })

  const navigate = useNavigate()

  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateReminder({
      ...cleanData,
      idReminder: String(reminder.idReminder),
      remindingForId: String(reminder.remindingForId),
      isDisabled: data.isDisabled === "true",
    })
    .then(({ data: { data } }) => {
      navigate(`/reminder`)
      notifySuccess(`Update Reminder berhasil!`);
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }

  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Reminder Form"
		  onSubmit={handleSubmit(save)}

	    vas={[]}

		  formFields={[

	      <Controller
	        key="hour"
	        name="hour"
	        control={control}
	        rules={{ required: "Harap masukkan hour" }}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Hour"
	          placeholder="Masukkan hour"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />

	,
	      <Controller
	        key="minute"
	        name="minute"
	        control={control}
	        rules={{ required: "Harap masukkan minute" }}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Minute"
	          placeholder="Masukkan minute"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />

		  ,

	      <Controller
	        key="isDisabled"
	        name="isDisabled"
	        control={control}
	        rules={{ required: "Harap pilih status" }}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          label="isDisabled"
	          options={isDisabledOptions}
	          optionKey="value"
	          optionLabel="label"
	          placeholder="Pilih status"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
		  ]}

		  itemsEvents={[
		    <Button id="_EZFrYF2REfGoIKyHUqClpA" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	</div>
  )
}

export default FormEditReminderForm
