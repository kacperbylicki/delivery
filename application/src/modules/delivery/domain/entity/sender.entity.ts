import { Addressee, IAddressee } from "./addressee.entity";

type ISender = IAddressee;

export class Sender extends Addressee<ISender> {
  public static create(props: ISender, uuid?: string) {
    return new Sender(
      {
        name: props.name,
        surname: props.surname,
        firstLineAddress: props.firstLineAddress,
        secondLineAddress: props.secondLineAddress,
        state: props.state,
        country: props.country,
      },
      uuid,
    );
  }
}
