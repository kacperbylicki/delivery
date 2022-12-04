import { Courier } from "../../../courier";
import { DeliveryStatus } from "../enum/delivery-status.enum";
import { Entity } from "../../../common";
import { Recipient } from "./recipient.entity";
import { Sender } from "./sender.entity";

interface IDelivery {
  uuid?: string;
  sender: Sender;
  recipient: Recipient;
  courier: Courier;
  status: DeliveryStatus;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export class Delivery extends Entity {
  public sender!: Sender;
  public recipient!: Recipient;
  public courier!: Courier;
  public status!: DeliveryStatus;
  public length!: number;
  public width!: number;
  public height!: number;
  public weight!: number;

  private constructor(props: IDelivery, uuid?: string) {
    super(uuid);

    this.sender = props.sender;
    this.recipient = props.recipient;
    this.courier = props.courier;
    this.status = props.status;
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
    this.weight = props.weight;
  }

  public static create(props: IDelivery, uuid?: string): Delivery {
    return new Delivery(
      {
        sender: props.sender,
        recipient: props.recipient,
        courier: props.courier,
        status: DeliveryStatus[props.status],
        length: props.length,
        width: props.width,
        height: props.height,
        weight: props.weight,
      },
      uuid,
    );
  }
}
