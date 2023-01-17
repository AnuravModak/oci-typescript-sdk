/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Details required to create a Channel.
 */
export interface CreateChannelDetails {
  /**
   * The OCID of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The user-friendly name for the Channel. It does not have to be unique.
   */
  "displayName"?: string;
  /**
   * Whether the Channel should be enabled upon creation. If set to true, the Channel
   * will be asynchronously started as a result of the create Channel operation.
   *
   */
  "isEnabled"?: boolean;
  "source": model.CreateChannelSourceFromMysqlDetails;
  "target": model.CreateChannelTargetFromDbSystemDetails;
  /**
   * User provided information about the Channel.
   */
  "description"?: string;
  /**
   * Simple key-value pair applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateChannelDetails {
  export function getJsonObj(obj: CreateChannelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.CreateChannelSourceDetails.getJsonObj(obj.source) : undefined,
        "target": obj.target ? model.CreateChannelTargetDetails.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateChannelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.CreateChannelSourceDetails.getDeserializedJsonObj(obj.source)
          : undefined,
        "target": obj.target
          ? model.CreateChannelTargetDetails.getDeserializedJsonObj(obj.target)
          : undefined
      }
    };

    return jsonObj;
  }
}
