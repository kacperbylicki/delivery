import { Addressee, IAddressee } from "./addressee.entity";

type IRecipient = IAddressee;

export class Recipient extends Addressee<IRecipient> {
  public static create(props: IRecipient, uuid?: string) {
    return new Recipient(
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
