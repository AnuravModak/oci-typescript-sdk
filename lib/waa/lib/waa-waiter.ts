/**
 * Web Application Acceleration (WAA) API
 * API for the Web Application Acceleration service.
Use this API to manage regional Web App Acceleration policies such as Caching and Compression
for accelerating HTTP services.

 * OpenAPI spec version: 20211230
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
import { WaaClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class WaaWaiter {
  public constructor(private client: WaaClient, private readonly config?: WaiterConfiguration) {}

  /**
   * Waits forWebAppAcceleration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetWebAppAccelerationResponse | null (null in case of 404 response)
   */
  public async forWebAppAcceleration(
    request: serviceRequests.GetWebAppAccelerationRequest,
    ...targetStates: models.WebAppAcceleration.LifecycleState[]
  ): Promise<serviceResponses.GetWebAppAccelerationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getWebAppAcceleration(request),
      response => targetStates.includes(response.webAppAcceleration.lifecycleState!),
      targetStates.includes(models.WebAppAcceleration.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWebAppAccelerationPolicy till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetWebAppAccelerationPolicyResponse | null (null in case of 404 response)
   */
  public async forWebAppAccelerationPolicy(
    request: serviceRequests.GetWebAppAccelerationPolicyRequest,
    ...targetStates: models.WebAppAccelerationPolicy.LifecycleState[]
  ): Promise<serviceResponses.GetWebAppAccelerationPolicyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getWebAppAccelerationPolicy(request),
      response => targetStates.includes(response.webAppAccelerationPolicy.lifecycleState!),
      targetStates.includes(models.WebAppAccelerationPolicy.LifecycleState.Deleted)
    );
  }
}
