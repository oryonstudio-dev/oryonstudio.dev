'use client';

import { useState } from 'react';
import type { Children } from '@/utils/types';

export default function ContactForm({ children }: Children) {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4bee587a-bc2a-48a8-a19e-8cf9eb73f57d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit}>
      { children }
    </form>
  );
}