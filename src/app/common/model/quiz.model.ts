import {Base} from "./base.model";

export class Quiz extends Base {

  name: string;
  description: string;
  questions: string[];
  timeAllowed: {
    perQuestion: number,
    total: number
  };

  constructor(json?: any) {
    super(json);
  }

}
