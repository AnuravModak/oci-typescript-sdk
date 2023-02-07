/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The source of the verification material.
 */
export interface VerificationKeySource {
  "verificationKeySourceType": string;
}

export namespace VerificationKeySource {
  export function getJsonObj(obj: VerificationKeySource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "verificationKeySourceType" in obj && obj.verificationKeySourceType) {
      switch (obj.verificationKeySourceType) {
        case "INLINE_PUBLIC_KEY":
          return model.InlinePublicKeyVerificationKeySource.getJsonObj(
            <model.InlinePublicKeyVerificationKeySource>(<object>jsonObj),
            true
          );
        case "VAULT_SECRET":
          return model.VaultSecretVerificationKeySource.getJsonObj(
            <model.VaultSecretVerificationKeySource>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.NoneVerificationKeySource.getJsonObj(
            <model.NoneVerificationKeySource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.verificationKeySourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VerificationKeySource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "verificationKeySourceType" in obj && obj.verificationKeySourceType) {
      switch (obj.verificationKeySourceType) {
        case "INLINE_PUBLIC_KEY":
          return model.InlinePublicKeyVerificationKeySource.getDeserializedJsonObj(
            <model.InlinePublicKeyVerificationKeySource>(<object>jsonObj),
            true
          );
        case "VAULT_SECRET":
          return model.VaultSecretVerificationKeySource.getDeserializedJsonObj(
            <model.VaultSecretVerificationKeySource>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.NoneVerificationKeySource.getDeserializedJsonObj(
            <model.NoneVerificationKeySource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.verificationKeySourceType}`);
      }
    }
    return jsonObj;
  }
}