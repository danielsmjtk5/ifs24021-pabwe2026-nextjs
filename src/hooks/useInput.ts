"use client";

import { useState, type ChangeEvent } from "react";

export function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValue(event.currentTarget.value);
  return { value, onChange, setValue };
}
