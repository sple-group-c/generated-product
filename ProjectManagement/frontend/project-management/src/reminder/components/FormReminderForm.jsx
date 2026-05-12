
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
import saveReminder from '../services/saveReminder'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormReminderForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveReminder({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/reminder`)
  	notifySuccess(`Save Reminder berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="ReminderForm" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="resendIntervalMin"
	        name="resendIntervalMin"
	        control={control}
	        rules={{ required: "Harap masukkan resendintervalmin" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="resendIntervalMin"
	          placeholder="Masukkan resendintervalmin"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="hour"
	        name="hour"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Hour"
	          placeholder="Masukkan hour"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="minute"
	        name="minute"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Minute"
	          placeholder="Masukkan minute"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_T_rrQEiUEfGoJul5bIxc2g" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormReminderForm
