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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Defines the configuration for getting an ad-hoc path analysis.
 */
export interface AdhocGetPathAnalysisDetails extends model.GetPathAnalysisDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the compartment.
   */
  "compartmentId": string;
  /**
   * The IP protocol to used for the path analysis. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "protocol": number;
  "sourceEndpoint":
    | model.NetworkLoadBalancerListenerEndpoint
    | model.ComputeInstanceEndpoint
    | model.NetworkLoadBalancerEndpoint
    | model.LoadBalancerEndpoint
    | model.VnicEndpoint
    | model.IpAddressEndpoint
    | model.VlanEndpoint
    | model.SubnetEndpoint
    | model.LoadBalancerListenerEndpoint;
  "destinationEndpoint":
    | model.NetworkLoadBalancerListenerEndpoint
    | model.ComputeInstanceEndpoint
    | model.NetworkLoadBalancerEndpoint
    | model.LoadBalancerEndpoint
    | model.VnicEndpoint
    | model.IpAddressEndpoint
    | model.VlanEndpoint
    | model.SubnetEndpoint
    | model.LoadBalancerListenerEndpoint;
  "protocolParameters"?:
    | model.UdpProtocolParameters
    | model.TcpProtocolParameters
    | model.IcmpProtocolParameters;
  "queryOptions"?: model.QueryOptions;

  "type": string;
}

export namespace AdhocGetPathAnalysisDetails {
  export function getJsonObj(obj: AdhocGetPathAnalysisDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GetPathAnalysisDetails.getJsonObj(obj) as AdhocGetPathAnalysisDetails)),
      ...{
        "sourceEndpoint": obj.sourceEndpoint
          ? model.Endpoint.getJsonObj(obj.sourceEndpoint)
          : undefined,
        "destinationEndpoint": obj.destinationEndpoint
          ? model.Endpoint.getJsonObj(obj.destinationEndpoint)
          : undefined,
        "protocolParameters": obj.protocolParameters
          ? model.ProtocolParameters.getJsonObj(obj.protocolParameters)
          : undefined,
        "queryOptions": obj.queryOptions
          ? model.QueryOptions.getJsonObj(obj.queryOptions)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "ADHOC_QUERY";
  export function getDeserializedJsonObj(
    obj: AdhocGetPathAnalysisDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GetPathAnalysisDetails.getDeserializedJsonObj(
            obj
          ) as AdhocGetPathAnalysisDetails)),
      ...{
        "sourceEndpoint": obj.sourceEndpoint
          ? model.Endpoint.getDeserializedJsonObj(obj.sourceEndpoint)
          : undefined,
        "destinationEndpoint": obj.destinationEndpoint
          ? model.Endpoint.getDeserializedJsonObj(obj.destinationEndpoint)
          : undefined,
        "protocolParameters": obj.protocolParameters
          ? model.ProtocolParameters.getDeserializedJsonObj(obj.protocolParameters)
          : undefined,
        "queryOptions": obj.queryOptions
          ? model.QueryOptions.getDeserializedJsonObj(obj.queryOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
