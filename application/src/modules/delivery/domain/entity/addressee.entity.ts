import { Entity } from "../../../common";

export interface IAddressee {
  uuid?: string;
  name: string;
  surname: string;
  firstLineAddress: string;
  secondLineAddress: string;
  state: string;
  country: string;
}

export abstract class Addressee<T extends IAddressee> extends Entity {
  public name!: string;
  public surname!: string;
  public firstLineAddress!: string;
  public secondLineAddress!: string;
  public state!: string;
  public country!: string;

  constructor(props: T, uuid?: string) {
    super(uuid);

    this.name = props.name;
    this.surname = props.surname;
    this.firstLineAddress = props.firstLineAddress;
    this.secondLineAddress = props.secondLineAddress;
    this.state = props.state;
    this.country = props.country;
  }
}
