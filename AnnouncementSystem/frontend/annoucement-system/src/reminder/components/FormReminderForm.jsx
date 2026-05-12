
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
import action from '../services/action'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormReminderForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    action({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Action berhasil!`);
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
		  onSubmit={handleSubmit(onSubmitEvent)}
	
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
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_T_rrQEiUEfGoJul5bIxc2g" key="OnSubmit Event" type="submit" variant="primary">OnSubmit Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormReminderForm
