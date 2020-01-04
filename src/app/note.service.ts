export class Note {
  id: number;
  date: number;
  content: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
