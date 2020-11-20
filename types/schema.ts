// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Media extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Media entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Media entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Media", id.toString(), this);
  }

  static load(id: string): Media | null {
    return store.get("Media", id) as Media | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get prevOwner(): string {
    let value = this.get("prevOwner");
    return value.toString();
  }

  set prevOwner(value: string) {
    this.set("prevOwner", Value.fromString(value));
  }

  get contentHash(): Bytes {
    let value = this.get("contentHash");
    return value.toBytes();
  }

  set contentHash(value: Bytes) {
    this.set("contentHash", Value.fromBytes(value));
  }

  get metadataHash(): Bytes {
    let value = this.get("metadataHash");
    return value.toBytes();
  }

  set metadataHash(value: Bytes) {
    this.set("metadataHash", Value.fromBytes(value));
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get metadataURI(): string {
    let value = this.get("metadataURI");
    return value.toString();
  }

  set metadataURI(value: string) {
    this.set("metadataURI", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): Array<string> | null {
    let value = this.get("collection");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set collection(value: Array<string> | null) {
    if (value === null) {
      this.unset("collection");
    } else {
      this.set("collection", Value.fromStringArray(value as Array<string>));
    }
  }

  get creations(): Array<string> | null {
    let value = this.get("creations");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set creations(value: Array<string> | null) {
    if (value === null) {
      this.unset("creations");
    } else {
      this.set("creations", Value.fromStringArray(value as Array<string>));
    }
  }
}