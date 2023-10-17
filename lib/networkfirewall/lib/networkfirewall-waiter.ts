/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { NetworkFirewallClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class NetworkFirewallWaiter {
  public constructor(
    private client: NetworkFirewallClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forNetworkFirewall till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNetworkFirewallResponse | null (null in case of 404 response)
   */
  public async forNetworkFirewall(
    request: serviceRequests.GetNetworkFirewallRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetNetworkFirewallResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNetworkFirewall(request),
      response => targetStates.includes(response.networkFirewall.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forNetworkFirewallPolicy till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNetworkFirewallPolicyResponse | null (null in case of 404 response)
   */
  public async forNetworkFirewallPolicy(
    request: serviceRequests.GetNetworkFirewallPolicyRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetNetworkFirewallPolicyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNetworkFirewallPolicy(request),
      response => targetStates.includes(response.networkFirewallPolicy.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
