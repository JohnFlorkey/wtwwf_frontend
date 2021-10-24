import { useState } from "react";

function useForm(initialState = {}) {
  const [formData, setFormData] = useState(initialState);

  const addFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  return [formData, addFormData];
}

export default useForm;
