import { useState } from "react";
import "./PasswordInput.css";

export default function PasswordInput({
  label, onChange, value, inputProps
}) {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden((isHidden) => !isHidden);
  }

  const type = isHidden ? "password" : "text";
  const buttonLabel = isHidden ? "Show" : "Hide";

  return (
    <div className="PasswordInput">
      <label> {label}
        <input {...inputProps}
          type={type}
          onChange={onChange}
          value={value}
        />
        <button type="button" onClick={handleClick}>{buttonLabel}</button>
      </label>
    </div>
  )
}