import { Entity } from "../../../common";

interface ICourier {
  uuid?: string;
  name: string;
  surname: string;
  pesel: string;
}

export class Courier extends Entity {
  public name!: string;
  public surname!: string;
  public pesel!: string;

  private constructor(props: ICourier, uuid?: string) {
    super(uuid);

    this.name = props.name;
    this.surname = props.surname;
    this.pesel = props.pesel;
  }

  public static create(props: ICourier, uuid?: string): Courier {
    return new Courier(
      {
        name: props.name,
        surname: props.surname,
        pesel: props.pesel,
      },
      uuid,
    );
  }
}
