/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * The request details to be updated in the address List for the policy.
 */
export interface UpdateAddressListDetails {
  "type": string;
}

export namespace UpdateAddressListDetails {
  export function getJsonObj(obj: UpdateAddressListDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "FQDN":
          return model.UpdateFqdnAddressListDetails.getJsonObj(
            <model.UpdateFqdnAddressListDetails>(<object>jsonObj),
            true
          );
        case "IP":
          return model.UpdateIpAddressListDetails.getJsonObj(
            <model.UpdateIpAddressListDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAddressListDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "FQDN":
          return model.UpdateFqdnAddressListDetails.getDeserializedJsonObj(
            <model.UpdateFqdnAddressListDetails>(<object>jsonObj),
            true
          );
        case "IP":
          return model.UpdateIpAddressListDetails.getDeserializedJsonObj(
            <model.UpdateIpAddressListDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
