/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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

export interface UpdateVnicDetails {
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
    * The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname
* portion of the primary private IP's fully qualified domain name (FQDN)
* (for example, `bminstance-1` in FQDN `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Must be unique across all VNICs in the subnet and comply with
* [RFC 952](https://tools.ietf.org/html/rfc952) and
* [RFC 1123](https://tools.ietf.org/html/rfc1123).
* The value appears in the {@link Vnic} object and also the
* {@link PrivateIp} object returned by
* {@link #listPrivateIps(ListPrivateIpsRequest) listPrivateIps} and
* {@link #getPrivateIp(GetPrivateIpRequest) getPrivateIp}.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* 
    */
  "hostnameLabel"?: string;
  /**
    * A list of the OCIDs of the network security groups (NSGs) to add the VNIC to. Setting this as
* an empty array removes the VNIC from all network security groups.
* <p>
For more information about NSGs, see
* {@link NetworkSecurityGroup}.
* 
    */
  "nsgIds"?: Array<string>;
  /**
   * Whether the source/destination check is disabled on the VNIC.
   * Defaults to `false`, which means the check is performed. For information about why you would
   * skip the source/destination check, see
   * [Using a Private IP as a Route Target](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#privateip).
   * Example: `true`
   *
   */
  "skipSourceDestCheck"?: boolean;
}

export namespace UpdateVnicDetails {
  export function getJsonObj(obj: UpdateVnicDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateVnicDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
