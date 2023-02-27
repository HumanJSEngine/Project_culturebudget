type LocalStorage = typeof window.localStorage;

export default abstract class Storage<T extends string> {
  private readonly storage: LocalStorage;

  public constructor(getStorage = (): LocalStorage => window.localStorage) {
    this.storage = getStorage();
  }

  protected get(key: T): string | null {
    return this.storage.getItem(key);
  }

  protected set(key: T, value: string): void {
    this.storage.setItem(key, value);
  }

  protected clearItem(key: T): void {
    this.storage.removeItem(key);
  }
}
