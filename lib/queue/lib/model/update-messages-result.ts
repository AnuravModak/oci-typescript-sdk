/**
 * Queue API
 * A description of the Queue API
 * OpenAPI spec version: 20210201
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
 * The response to a UpdateMessages request. It indicates the number of server and client failures as well as an array of entries for successful and failed actions.
 */
export interface UpdateMessagesResult {
  /**
   * The number of messages that failed to be updated in the queue because of a server failure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "serverFailures": number;
  /**
   * The number of messages that failed to be updated in the queue because of a client failure such as an invalid receipt or invalid visibilityInSeconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clientFailures": number;
  /**
   * An array of items representing the result of each action.
   * The order is guaranteed to be the same as in the `UpdateMessagesDetails` object.
   * If a message was successfully updated in the queue, the entry includes the `id` and `visibleAfter` fields.
   * If a message failed to be updated in the queue, the entry includes the `errorCode` and `errorMessage` fields.
   *
   */
  "entries": Array<model.UpdateMessagesResultEntry>;
}

export namespace UpdateMessagesResult {
  export function getJsonObj(obj: UpdateMessagesResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entries": obj.entries
          ? obj.entries.map(item => {
              return model.UpdateMessagesResultEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMessagesResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entries": obj.entries
          ? obj.entries.map(item => {
              return model.UpdateMessagesResultEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}