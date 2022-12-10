import Crypto from "crypto";
export class DeliveryUtils {
  static getRandomTrackingNumber(): string {
    return Crypto.randomBytes(20).toString("hex").slice(0, 20).toUpperCase();
  }
}
