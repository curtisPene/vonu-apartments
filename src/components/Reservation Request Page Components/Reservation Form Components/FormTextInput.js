const FormTextInput = ({ label, icon, name, placeholder }) => {
  return (
    <div>
      <p>{label}</p>
      <input type="text" name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormTextInput;
