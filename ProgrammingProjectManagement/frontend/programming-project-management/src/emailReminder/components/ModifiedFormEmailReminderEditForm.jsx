import React from "react";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  InputField,
  SelectionField,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateEmailReminder from '../services/updateEmailReminder'
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const isDisabledOptions = [
  { value: "false", label: "false" },
  { value: "true", label: "true" },
]

const ModifiedFormEmailReminderEditForm = ({ emailEditFields }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      hour: emailEditFields.hour,
      minute: emailEditFields.minute,
      email: emailEditFields.email,
      isDisabled: String(emailEditFields.isDisabled),
    }
  })

  const navigate = useNavigate()

  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateEmailReminder({
      ...cleanData,
      idReminder: String(emailEditFields.idReminder),
      remindingForId: String(emailEditFields.remindingForId),
    })
    .then(({ data: { data } }) => {
      navigate(`/emailreminder`)
      notifySuccess(`Update Email Reminder berhasil!`);
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }

  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Email Reminder Edit Form"
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
	        key="email"
	        name="email"
	        control={control}
	        rules={{ required: "Harap masukkan email" }}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Email"
	          placeholder="Masukkan email"
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
		    <Button id="_9P0B8F2YEfGoIKyHUqClpA" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	</div>
  )
}

export default ModifiedFormEmailReminderEditForm
