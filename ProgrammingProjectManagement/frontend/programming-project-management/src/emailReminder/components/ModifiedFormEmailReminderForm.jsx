import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveEmailreminder from '../services/saveEmailreminder'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormEmailReminderForm = ({
	taskList
 }) => {
  const {
    control,
    handleSubmit,
  } = useForm()

  const navigate = useNavigate()

  const submit = (data) => {
    const cleanData = cleanFormData({ ...data, isDisabled: false })
    saveEmailreminder({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/emailreminder`);
  	notifySuccess(`Save Emailreminder berhasil!`);
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }


  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Email Reminder Form"
		  onSubmit={handleSubmit(submit)}

	    vas={[
		  ]}

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
	        key="remindingForId"
	        name="remindingForId"
	        control={control}
	        rules={{ required: "Harap pilih task" }}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          label="Reminding For"
	          options={taskList}
	          optionKey="idTask"
	          optionLabel="title"
	          placeholder="Pilih task"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
		  ]}

		  itemsEvents={[
		    <Button id="_4mkSoFOXEfGrfJrQ5Xvm_A" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />

	</div>
  )
}

export default ModifiedFormEmailReminderForm
