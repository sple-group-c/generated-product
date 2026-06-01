
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
import saveBerita from '../services/saveBerita'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahBerita = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    saveBerita({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/berita`)
  	notifySuccess(`Save Berita berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Berita" 
		  onSubmit={handleSubmit(onSubmitEvent)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="content"
	        name="content"
	        control={control}
	        rules={{ required: "Harap masukkan content" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Content"
	          placeholder="Masukkan content"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_3jxEwEw3EfG1qvAbnuoO6w" key="OnSubmit Event" type="submit" variant="primary">OnSubmit Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormTambahBerita
