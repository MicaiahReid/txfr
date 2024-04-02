import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

describe("cost optimization", () => {
  it("deploying a contract with hardcoded addresses", () => {
    const transfer = simnet.callPrivateFn(
      "txfr",
      "trans",
      [Cl.principal(address1)],
      address1
    );
    console.log(transfer.result);
  });
});
