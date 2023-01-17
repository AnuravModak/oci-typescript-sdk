/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20211001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Decryption Rule used in the firewall policy rules.
 * A Decryption Rule is used to define which traffic should be decrypted by the firewall, and how it should do so.
 *
 */
export interface DecryptionRule {
  /**
   * Name for the decryption rule, must be unique within the policy.
   */
  "name": string;
  "condition": model.DecryptionRuleMatchCriteria;
  /**
   * Action:
   * <p>
   * NO_DECRYPT - Matching traffic is not decrypted.
   * * DECRYPT - Matching traffic is decrypted with the specified `secret` according to the specified `decryptionProfile`.
   *
   */
  "action": DecryptionRule.Action;
  /**
   * The name of the decryption profile to use.
   */
  "decryptionProfile"?: string;
  /**
   * The name of a mapped secret. Its `type` must match that of the specified decryption profile.
   */
  "secret"?: string;
}

export namespace DecryptionRule {
  export enum Action {
    NoDecrypt = "NO_DECRYPT",
    Decrypt = "DECRYPT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DecryptionRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.DecryptionRuleMatchCriteria.getJsonObj(obj.condition)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DecryptionRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.DecryptionRuleMatchCriteria.getDeserializedJsonObj(obj.condition)
          : undefined
      }
    };

    return jsonObj;
  }
}
