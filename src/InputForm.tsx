import React from "react";

interface SetState {
    setSeed: React.Dispatch<React.SetStateAction<string>>
}
export const InputForm = ({setSeed}:SetState) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSeed((event.currentTarget[0] as HTMLInputElement).value);
  };    
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="input" placeholder="Enter value" name="seed" required />
      <button type="submit">Enter</button>
    </form>
  );
};
