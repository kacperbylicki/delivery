export interface Repository<T> {
  exists(identifier: string): Promise<boolean>;
  saveAndReturn(t: T): Promise<T>;
  updateAndReturn(t: Partial<T>): Promise<T | null>;
  deleteOne(identifier: string): Promise<void>;
}
