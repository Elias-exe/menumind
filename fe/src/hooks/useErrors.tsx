/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useCallback } from 'react';

export interface ErrorsProps{
  field:any;
  message:string;
  prevState?: {
    field: any;
    message: string;
  }[]
}

export default function useErrors(){
  const [errors, setErrors] = useState([]);
  const setError = useCallback(({ field, message }:ErrorsProps) => {
    const errorAlreadyExists = errors.find((error:any) => error.field === field);
    if (errorAlreadyExists) {
      return;
    }
    // @ts-ignore
    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [errors]);

  const removeError = useCallback((fieldName:any) => {
    setErrors((prevState) => prevState.filter(
      (error:any) => error.field !== fieldName,
    ));
  }, []);

  const getErrorMessageByFieldName = useCallback((fieldName:any) => {
    //@ts-ignore
    return errors.find((error:any) => error.field === fieldName)?.message;
  }, [errors]);

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
