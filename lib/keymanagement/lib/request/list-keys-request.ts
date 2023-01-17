/**
 *
 *
 * OpenAPI spec version: release
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/keymanagement/ListKeys.ts.html |here} to see how to use ListKeysRequest.
 */
export interface ListKeysRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header
   * from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * Unique identifier for the request. If provided, the returned request ID
   * will include this value. Otherwise, a random request ID will be
   * generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * The field to sort by. You can specify only one sort order. The default
   * order for `TIMECREATED` is descending. The default order for `DISPLAYNAME`
   * is ascending.
   *
   */
  "sortBy"?: ListKeysRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListKeysRequest.SortOrder;
  /**
   * A key's protection mode indicates how the key persists and where cryptographic operations that use the key are performed. A
   * protection mode of `HSM` means that the key persists on a hardware security module (HSM) and all cryptographic operations are
   * performed inside the HSM. A protection mode of `SOFTWARE` means that the key persists on the server, protected by the vault's
   * RSA wrapping key which persists on the HSM. All cryptographic operations that use a key with a protection mode of
   * `SOFTWARE` are performed on the server.
   *
   */
  "protectionMode"?: ListKeysRequest.ProtectionMode;
  /**
   * The algorithm used by a key's key versions to encrypt or decrypt data. Currently, support includes AES, RSA, and ECDSA algorithms.
   *
   */
  "algorithm"?: ListKeysRequest.Algorithm;
  /**
   * The length of the key in bytes, expressed as an integer. Supported values include 16, 24, or 32.
   *
   */
  "length"?: number;
  /**
   * The curve ID of the keys. (This pertains only to ECDSA keys.)
   *
   */
  "curveId"?: ListKeysRequest.CurveId;
}

export namespace ListKeysRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum ProtectionMode {
    Hsm = "HSM",
    Software = "SOFTWARE"
  }

  export enum Algorithm {
    Aes = "AES",
    Rsa = "RSA",
    Ecdsa = "ECDSA"
  }

  export enum CurveId {
    NistP256 = "NIST_P256",
    NistP384 = "NIST_P384",
    NistP521 = "NIST_P521"
  }
}
