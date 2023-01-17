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
 * Properties required to create a Facebook channel.
 */
export interface CreateFacebookChannelDetails extends model.CreateChannelDetails {
  /**
   * The app secret for your Facebook app.
   */
  "appSecret": string;
  /**
   * The page access token that you generated for your Facebook page.
   */
  "pageAccessToken": string;
  /**
   * The ID of the Skill or Digital Assistant that the Channel is routed to.
   */
  "botId"?: string;

  "type": string;
}

export namespace CreateFacebookChannelDetails {
  export function getJsonObj(obj: CreateFacebookChannelDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelDetails.getJsonObj(obj) as CreateFacebookChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "FACEBOOK";
  export function getDeserializedJsonObj(
    obj: CreateFacebookChannelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelDetails.getDeserializedJsonObj(obj) as CreateFacebookChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
}
