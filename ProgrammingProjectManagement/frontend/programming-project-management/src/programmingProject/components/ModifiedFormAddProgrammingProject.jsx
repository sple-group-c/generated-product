
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
import saveProgrammingProject from '../services/saveProgrammingProject'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddProgrammingProject = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveProgrammingProject({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/programmingproject`)
  	notifySuccess(`Save ProgrammingProject berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add ProgrammingProject" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="name"
	        name="name"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Project Name"
	          placeholder="Masukkan project name"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="description"
	        name="description"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Project Description"
	          placeholder="Masukkan project description"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="onlineRepository"
	        name="onlineRepository"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Repository Client"
	          placeholder="Masukkan repository client"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="defaultBranch"
	        name="defaultBranch"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Project Branch"
	          placeholder="Masukkan project branch"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="repositoryLink"
	        name="repositoryLink"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Repository Link"
	          placeholder="Masukkan repository link"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_-YCokF2IEfGZyZcHNmogjQ" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddProgrammingProject
