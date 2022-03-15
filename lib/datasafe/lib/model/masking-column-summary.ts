/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of a masking column.
 */
export interface MaskingColumnSummary {
  /**
   * The unique key that identifies a masking column. The key is numeric and unique within a masking policy.
   */
  "key": string;
  /**
   * The OCID of the masking policy that contains the masking column.
   */
  "maskingPolicyId": string;
  /**
   * The current state of the masking column.
   */
  "lifecycleState": model.MaskingColumnLifecycleState;
  /**
   * Details about the current state of the masking column.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the masking column was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the masking column was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated": Date;
  /**
   * The name of the schema that contains the database column.
   */
  "schemaName": string;
  /**
   * The name of the object (table or editioning view) that contains the database column.
   */
  "objectName": string;
  /**
   * The type of the object that contains the database column.
   */
  "objectType"?: model.ObjectType;
  /**
   * The name of the database column. Note that the same name is used for the masking column.
   * There is no separate displayName attribute for the masking column.
   *
   */
  "columnName": string;
  /**
   * An array of child columns that are in referential relationship with the masking column.
   */
  "childColumns"?: Array<string>;
  /**
   * The group of the masking column. All the columns in a group are masked together to ensure
   * that the masked data across these columns continue
   * to retain the same logical relationship. For more details, check <a href=https://docs.oracle.com/en/cloud/paas/data-safe/udscs/group-masking1.html#GUID-755056B9-9540-48C0-9491-262A44A85037>Group Masking in the Data Safe documentation.</a>
   *
   */
  "maskingColumnGroup"?: string;
  /**
   * The OCID of the sensitive type associated with the masking column.
   */
  "sensitiveTypeId"?: string;
  /**
   * Indicates if data masking is enabled for the masking column.
   */
  "isMaskingEnabled": boolean;
  /**
   * The data type of the masking column.
   */
  "dataType"?: string;
  /**
   * An array of masking formats assigned to the masking column.
   */
  "maskingFormats"?: Array<model.MaskingFormat>;
}

export namespace MaskingColumnSummary {
  export function getJsonObj(obj: MaskingColumnSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maskingFormats": obj.maskingFormats
          ? obj.maskingFormats.map(item => {
              return model.MaskingFormat.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaskingColumnSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maskingFormats": obj.maskingFormats
          ? obj.maskingFormats.map(item => {
              return model.MaskingFormat.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}