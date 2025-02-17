// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NewGravatar extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("displayName", Value.fromString(""));
    this.set("imageUrl", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewGravatar entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NewGravatar entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NewGravatar", id.toString(), this);
    }
  }

  static load(id: string): NewGravatar | null {
    return changetype<NewGravatar | null>(store.get("NewGravatar", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get displayName(): string {
    let value = this.get("displayName");
    return value!.toString();
  }

  set displayName(value: string) {
    this.set("displayName", Value.fromString(value));
  }

  get imageUrl(): string {
    let value = this.get("imageUrl");
    return value!.toString();
  }

  set imageUrl(value: string) {
    this.set("imageUrl", Value.fromString(value));
  }
}

export class UpdatedGravatar extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("displayName", Value.fromString(""));
    this.set("imageUrl", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UpdatedGravatar entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UpdatedGravatar entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UpdatedGravatar", id.toString(), this);
    }
  }

  static load(id: string): UpdatedGravatar | null {
    return changetype<UpdatedGravatar | null>(store.get("UpdatedGravatar", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get displayName(): string {
    let value = this.get("displayName");
    return value!.toString();
  }

  set displayName(value: string) {
    this.set("displayName", Value.fromString(value));
  }

  get imageUrl(): string {
    let value = this.get("imageUrl");
    return value!.toString();
  }

  set imageUrl(value: string) {
    this.set("imageUrl", Value.fromString(value));
  }
}
