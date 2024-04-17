import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      
      <Input label="Title"></Input>
      <Input label="Description" isTextArea></Input>
      <Input label="Due date"></Input>

    </div>
  );
}
