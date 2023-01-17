/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Java Server usage during a specified time period.
 *
 */
export interface JavaServerUsage {
  /**
   * The internal identifier of the Java Server.
   *
   */
  "serverKey": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the related fleet.
   *
   */
  "fleetId": string;
  /**
   * The name of the Java Server.
   *
   */
  "serverName": string;
  /**
   * The version of the Java Server.
   *
   */
  "serverVersion"?: string;
  /**
   * The count of server instances of the Java Server.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "serverInstanceCount"?: number;
  /**
   * The approximate count of deployed applications in the Java Server.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateDeployedApplicationCount"?: number;
  /**
   * Lower bound of the specified time period filter. JMS provides a view of the data that is _per day_. The query uses only the date element of the parameter.
   */
  "timeStart"?: Date;
  /**
   * Upper bound of the specified time period filter. JMS provides a view of the data that is _per day_. The query uses only the date element of the parameter.
   */
  "timeEnd"?: Date;
  /**
   * The date and time the resource was _first_ reported to JMS.
   * This is potentially _before_ the specified time period provided by the filters.
   * For example, a resource can be first reported to JMS before the start of a specified time period,
   * if it is also reported during the time period.
   *
   */
  "timeFirstSeen"?: Date;
  /**
   * The date and time the resource was _last_ reported to JMS.
   * This is potentially _after_ the specified time period provided by the filters.
   * For example, a resource can be last reported to JMS before the start of a specified time period,
   * if it is also reported during the time period.
   *
   */
  "timeLastSeen"?: Date;
}

export namespace JavaServerUsage {
  export function getJsonObj(obj: JavaServerUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaServerUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
