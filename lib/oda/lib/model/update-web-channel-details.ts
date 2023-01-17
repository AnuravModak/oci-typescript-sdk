/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties to update a Web channel.
 */
export interface UpdateWebChannelDetails extends model.UpdateChannelDetails {
  /**
   * The maximum time until the token expires (in minutes). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTokenExpirationTimeInMinutes"?: number;
  /**
   * Whether client authentication is enabled or not.
   */
  "isClientAuthenticationEnabled"?: boolean;
  /**
   * A comma-delimited whitelist of allowed domains.
   *
   * The channel will only communicate with the sites from the domains that you add to this list.
   * For example, *.corp.example.com, *.hdr.example.com. Entering a single asterisk (*) allows unrestricted access
   * to the channel from any domain.
   *
   * Typically, you'd only enter a single asterisk during development. For production, you would add an allowlist of domains.
   *
   */
  "allowedDomains"?: string;
  /**
   * The ID of the Skill or Digital Assistant that the Channel is routed to.
   */
  "botId"?: string;

  "type": string;
}

export namespace UpdateWebChannelDetails {
  export function getJsonObj(obj: UpdateWebChannelDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateChannelDetails.getJsonObj(obj) as UpdateWebChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "WEB";
  export function getDeserializedJsonObj(
    obj: UpdateWebChannelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateChannelDetails.getDeserializedJsonObj(obj) as UpdateWebChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
}
