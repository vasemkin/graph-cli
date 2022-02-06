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

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asERC20(): string | null {
    let value = this.get("asERC20");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asERC20(value: string | null) {
    if (!value) {
      this.unset("asERC20");
    } else {
      this.set("asERC20", Value.fromString(<string>value));
    }
  }

  get ERC20balances(): Array<string> {
    let value = this.get("ERC20balances");
    return value!.toStringArray();
  }

  set ERC20balances(value: Array<string>) {
    this.set("ERC20balances", Value.fromStringArray(value));
  }

  get ERC20approvalsOwner(): Array<string> {
    let value = this.get("ERC20approvalsOwner");
    return value!.toStringArray();
  }

  set ERC20approvalsOwner(value: Array<string>) {
    this.set("ERC20approvalsOwner", Value.fromStringArray(value));
  }

  get ERC20approvalsSpender(): Array<string> {
    let value = this.get("ERC20approvalsSpender");
    return value!.toStringArray();
  }

  set ERC20approvalsSpender(value: Array<string>) {
    this.set("ERC20approvalsSpender", Value.fromStringArray(value));
  }

  get ERC20transferFromEvent(): Array<string> {
    let value = this.get("ERC20transferFromEvent");
    return value!.toStringArray();
  }

  set ERC20transferFromEvent(value: Array<string>) {
    this.set("ERC20transferFromEvent", Value.fromStringArray(value));
  }

  get ERC20transferToEvent(): Array<string> {
    let value = this.get("ERC20transferToEvent");
    return value!.toStringArray();
  }

  set ERC20transferToEvent(value: Array<string>) {
    this.set("ERC20transferToEvent", Value.fromStringArray(value));
  }

  get asAccessControl(): string | null {
    let value = this.get("asAccessControl");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asAccessControl(value: string | null) {
    if (!value) {
      this.unset("asAccessControl");
    } else {
      this.set("asAccessControl", Value.fromString(<string>value));
    }
  }

  get membership(): Array<string> {
    let value = this.get("membership");
    return value!.toStringArray();
  }

  set membership(value: Array<string>) {
    this.set("membership", Value.fromStringArray(value));
  }

  get roleGranted(): Array<string> {
    let value = this.get("roleGranted");
    return value!.toStringArray();
  }

  set roleGranted(value: Array<string>) {
    this.set("roleGranted", Value.fromStringArray(value));
  }

  get roleGrantedSender(): Array<string> {
    let value = this.get("roleGrantedSender");
    return value!.toStringArray();
  }

  set roleGrantedSender(value: Array<string>) {
    this.set("roleGrantedSender", Value.fromStringArray(value));
  }

  get roleRevoked(): Array<string> {
    let value = this.get("roleRevoked");
    return value!.toStringArray();
  }

  set roleRevoked(value: Array<string>) {
    this.set("roleRevoked", Value.fromStringArray(value));
  }

  get roleRevokedSender(): Array<string> {
    let value = this.get("roleRevokedSender");
    return value!.toStringArray();
  }

  set roleRevokedSender(value: Array<string>) {
    this.set("roleRevokedSender", Value.fromStringArray(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class ERC20Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("asAccount", Value.fromString(""));
    this.set("decimals", Value.fromI32(0));
    this.set("totalSupply", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC20Contract entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC20Contract", id.toString(), this);
    }
  }

  static load(id: string): ERC20Contract | null {
    return changetype<ERC20Contract | null>(store.get("ERC20Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value!.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get totalSupply(): string {
    let value = this.get("totalSupply");
    return value!.toString();
  }

  set totalSupply(value: string) {
    this.set("totalSupply", Value.fromString(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value!.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }

  get approvals(): Array<string> {
    let value = this.get("approvals");
    return value!.toStringArray();
  }

  set approvals(value: Array<string>) {
    this.set("approvals", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC20Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("valueExact", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Balance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC20Balance entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC20Balance", id.toString(), this);
    }
  }

  static load(id: string): ERC20Balance | null {
    return changetype<ERC20Balance | null>(store.get("ERC20Balance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get account(): string | null {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set account(value: string | null) {
    if (!value) {
      this.unset("account");
    } else {
      this.set("account", Value.fromString(<string>value));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }

  get transferFromEvent(): Array<string> {
    let value = this.get("transferFromEvent");
    return value!.toStringArray();
  }

  set transferFromEvent(value: Array<string>) {
    this.set("transferFromEvent", Value.fromStringArray(value));
  }

  get transferToEvent(): Array<string> {
    let value = this.get("transferToEvent");
    return value!.toStringArray();
  }

  set transferToEvent(value: Array<string>) {
    this.set("transferToEvent", Value.fromStringArray(value));
  }
}

export class ERC20Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("spender", Value.fromString(""));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("valueExact", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC20Approval entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC20Approval", id.toString(), this);
    }
  }

  static load(id: string): ERC20Approval | null {
    return changetype<ERC20Approval | null>(store.get("ERC20Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get spender(): string {
    let value = this.get("spender");
    return value!.toString();
  }

  set spender(value: string) {
    this.set("spender", Value.fromString(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class ERC20Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("valueExact", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC20Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC20Transfer", id.toString(), this);
    }
  }

  static load(id: string): ERC20Transfer | null {
    return changetype<ERC20Transfer | null>(store.get("ERC20Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get from(): string | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set from(value: string | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromString(<string>value));
    }
  }

  get fromBalance(): string | null {
    let value = this.get("fromBalance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromBalance(value: string | null) {
    if (!value) {
      this.unset("fromBalance");
    } else {
      this.set("fromBalance", Value.fromString(<string>value));
    }
  }

  get to(): string | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set to(value: string | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromString(<string>value));
    }
  }

  get toBalance(): string | null {
    let value = this.get("toBalance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set toBalance(value: string | null) {
    if (!value) {
      this.unset("toBalance");
    } else {
      this.set("toBalance", Value.fromString(<string>value));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class AccessControl extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("asAccount", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessControl entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccessControl entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccessControl", id.toString(), this);
    }
  }

  static load(id: string): AccessControl | null {
    return changetype<AccessControl | null>(store.get("AccessControl", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value!.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
  }

  get roles(): Array<string> {
    let value = this.get("roles");
    return value!.toStringArray();
  }

  set roles(value: Array<string>) {
    this.set("roles", Value.fromStringArray(value));
  }
}

export class Role extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Role entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Role entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Role", id.toString(), this);
    }
  }

  static load(id: string): Role | null {
    return changetype<Role | null>(store.get("Role", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get roleOf(): Array<string> {
    let value = this.get("roleOf");
    return value!.toStringArray();
  }

  set roleOf(value: Array<string>) {
    this.set("roleOf", Value.fromStringArray(value));
  }
}

export class AccessControlRole extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("role", Value.fromString(""));
    this.set("admin", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessControlRole entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccessControlRole entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccessControlRole", id.toString(), this);
    }
  }

  static load(id: string): AccessControlRole | null {
    return changetype<AccessControlRole | null>(
      store.get("AccessControlRole", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get admin(): string {
    let value = this.get("admin");
    return value!.toString();
  }

  set admin(value: string) {
    this.set("admin", Value.fromString(value));
  }

  get adminOf(): Array<string> {
    let value = this.get("adminOf");
    return value!.toStringArray();
  }

  set adminOf(value: Array<string>) {
    this.set("adminOf", Value.fromStringArray(value));
  }

  get members(): Array<string> {
    let value = this.get("members");
    return value!.toStringArray();
  }

  set members(value: Array<string>) {
    this.set("members", Value.fromStringArray(value));
  }

  get roleGranted(): Array<string> {
    let value = this.get("roleGranted");
    return value!.toStringArray();
  }

  set roleGranted(value: Array<string>) {
    this.set("roleGranted", Value.fromStringArray(value));
  }

  get roleRevoked(): Array<string> {
    let value = this.get("roleRevoked");
    return value!.toStringArray();
  }

  set roleRevoked(value: Array<string>) {
    this.set("roleRevoked", Value.fromStringArray(value));
  }

  get roleAdminChanged(): Array<string> {
    let value = this.get("roleAdminChanged");
    return value!.toStringArray();
  }

  set roleAdminChanged(value: Array<string>) {
    this.set("roleAdminChanged", Value.fromStringArray(value));
  }
}

export class AccessControlRoleMember extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("accesscontrolrole", Value.fromString(""));
    this.set("account", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AccessControlRoleMember entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccessControlRoleMember entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccessControlRoleMember", id.toString(), this);
    }
  }

  static load(id: string): AccessControlRoleMember | null {
    return changetype<AccessControlRoleMember | null>(
      store.get("AccessControlRoleMember", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accesscontrolrole(): string {
    let value = this.get("accesscontrolrole");
    return value!.toString();
  }

  set accesscontrolrole(value: string) {
    this.set("accesscontrolrole", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }
}

export class RoleAdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("role", Value.fromString(""));
    this.set("newAdminRole", Value.fromString(""));
    this.set("previousAdminRole", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleAdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleAdminChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleAdminChanged", id.toString(), this);
    }
  }

  static load(id: string): RoleAdminChanged | null {
    return changetype<RoleAdminChanged | null>(
      store.get("RoleAdminChanged", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get newAdminRole(): string {
    let value = this.get("newAdminRole");
    return value!.toString();
  }

  set newAdminRole(value: string) {
    this.set("newAdminRole", Value.fromString(value));
  }

  get previousAdminRole(): string {
    let value = this.get("previousAdminRole");
    return value!.toString();
  }

  set previousAdminRole(value: string) {
    this.set("previousAdminRole", Value.fromString(value));
  }
}

export class RoleGranted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("role", Value.fromString(""));
    this.set("account", Value.fromString(""));
    this.set("sender", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleGranted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleGranted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleGranted", id.toString(), this);
    }
  }

  static load(id: string): RoleGranted | null {
    return changetype<RoleGranted | null>(store.get("RoleGranted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }
}

export class RoleRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("role", Value.fromString(""));
    this.set("account", Value.fromString(""));
    this.set("sender", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleRevoked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleRevoked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleRevoked", id.toString(), this);
    }
  }

  static load(id: string): RoleRevoked | null {
    return changetype<RoleRevoked | null>(store.get("RoleRevoked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}
