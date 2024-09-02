export class ToDo {
  toDoID: string;
  toDoContent: string;
  istoDoDone: boolean;

  constructor(toDoID: string, ToDoContent: string, IstoDoDone: boolean) {
    this.toDoID = toDoID;
    this.toDoContent = ToDoContent;
    this.istoDoDone = IstoDoDone;
  }
}
