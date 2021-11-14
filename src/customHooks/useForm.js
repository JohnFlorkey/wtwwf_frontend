import { useState } from "react";

function useForm(initialState = {}) {
  const [formData, setFormData] = useState(initialState);

  const addFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const clearFormData = (initialState) => {
    setFormData(initialState);
  };
  return [formData, addFormData, clearFormData];
}

export default useForm;
