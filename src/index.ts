// import { v4 as uuid4 } from "uuid"

// console.log(uuid4());

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("#new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")


form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  input.value
})