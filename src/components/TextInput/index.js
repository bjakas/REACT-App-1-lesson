import "./TextInput.css";

export default function TextInput({ label, onChange, value, inputProps }) {
  return (
    <div className="TextInput">
      <label>
        {label}
        <input
          {...inputProps}
          type="text"
          onChange={onChange}
          value={value}
        ></input>
      </label>
    </div>
  )
}

// classu stavimo na div jer nam je tako lakše

// onChange i value pišemo nakon propsa zato što se prvo sve što smo spreadali prikazuje, a onda se preko toga napiše preko onChange i value
// def. vrijednosti spredamo prve, a onda ove ostale koje se prepisuju preko pišemo nakon