/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The configuration details for a load balancer backend set.
 * For more information on backend set configuration, see
 * [Managing Backend Sets](https://docs.cloud.oracle.com/Content/Balance/Tasks/managingbackendsets.htm).
 * <p>
 **Note:** The `sessionPersistenceConfiguration` (application cookie stickiness) and `lbCookieSessionPersistenceConfiguration`
 * (LB cookie stickiness) attributes are mutually exclusive. To avoid returning an error, configure only one of these two
 * attributes per backend set.
 *
 */
export interface BackendSetDetails {
  /**
    * The load balancer policy for the backend set. To get a list of available policies, use the
* {@link #listPolicies(ListPoliciesRequest) listPolicies} operation.
* <p>
Example: `LEAST_CONNECTIONS`
* 
    */
  "policy": string;
  "backends"?: Array<model.BackendDetails>;
  "healthChecker": model.HealthCheckerDetails;
  "sslConfiguration"?: model.SSLConfigurationDetails;
  "sessionPersistenceConfiguration"?: model.SessionPersistenceConfigurationDetails;
  "lbCookieSessionPersistenceConfiguration"?: model.LBCookieSessionPersistenceConfigurationDetails;
}

export namespace BackendSetDetails {
  export function getJsonObj(obj: BackendSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.BackendDetails.getJsonObj(item);
            })
          : undefined,
        "healthChecker": obj.healthChecker
          ? model.HealthCheckerDetails.getJsonObj(obj.healthChecker)
          : undefined,
        "sslConfiguration": obj.sslConfiguration
          ? model.SSLConfigurationDetails.getJsonObj(obj.sslConfiguration)
          : undefined,
        "sessionPersistenceConfiguration": obj.sessionPersistenceConfiguration
          ? model.SessionPersistenceConfigurationDetails.getJsonObj(
              obj.sessionPersistenceConfiguration
            )
          : undefined,
        "lbCookieSessionPersistenceConfiguration": obj.lbCookieSessionPersistenceConfiguration
          ? model.LBCookieSessionPersistenceConfigurationDetails.getJsonObj(
              obj.lbCookieSessionPersistenceConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackendSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.BackendDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "healthChecker": obj.healthChecker
          ? model.HealthCheckerDetails.getDeserializedJsonObj(obj.healthChecker)
          : undefined,
        "sslConfiguration": obj.sslConfiguration
          ? model.SSLConfigurationDetails.getDeserializedJsonObj(obj.sslConfiguration)
          : undefined,
        "sessionPersistenceConfiguration": obj.sessionPersistenceConfiguration
          ? model.SessionPersistenceConfigurationDetails.getDeserializedJsonObj(
              obj.sessionPersistenceConfiguration
            )
          : undefined,
        "lbCookieSessionPersistenceConfiguration": obj.lbCookieSessionPersistenceConfiguration
          ? model.LBCookieSessionPersistenceConfigurationDetails.getDeserializedJsonObj(
              obj.lbCookieSessionPersistenceConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
