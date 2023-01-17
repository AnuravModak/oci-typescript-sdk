/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
 * Information about an instance that belongs to an instance pool.
 */
export interface InstancePoolInstance {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the instance.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the instance pool.
   */
  "instancePoolId": string;
  /**
   * The availability domain the instance is running in.
   */
  "availabilityDomain": string;
  /**
   * The attachment state of the instance in relation to the instance pool.
   */
  "lifecycleState": InstancePoolInstance.LifecycleState;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the
   * instance.
   *
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The fault domain the instance is running in.
   */
  "faultDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the instance configuration
   * used to create the instance.
   *
   */
  "instanceConfigurationId": string;
  /**
   * The region that contains the availability domain the instance is running in.
   */
  "region": string;
  /**
   * The shape of the instance. The shape determines the number of CPUs, amount of memory,
   * and other resources allocated to the instance.
   *
   */
  "shape": string;
  /**
   * The lifecycle state of the instance. Refer to `lifecycleState` in the {@link Instance} resource.
   */
  "state": string;
  /**
   * The date and time the instance pool instance was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The load balancer backends that are configured for the instance.
   *
   */
  "loadBalancerBackends"?: Array<model.InstancePoolInstanceLoadBalancerBackend>;
}

export namespace InstancePoolInstance {
  export enum LifecycleState {
    Attaching = "ATTACHING",
    Active = "ACTIVE",
    Detaching = "DETACHING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstancePoolInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "loadBalancerBackends": obj.loadBalancerBackends
          ? obj.loadBalancerBackends.map(item => {
              return model.InstancePoolInstanceLoadBalancerBackend.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstancePoolInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "loadBalancerBackends": obj.loadBalancerBackends
          ? obj.loadBalancerBackends.map(item => {
              return model.InstancePoolInstanceLoadBalancerBackend.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
