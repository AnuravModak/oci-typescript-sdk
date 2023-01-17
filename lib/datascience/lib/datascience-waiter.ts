/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
import { DataScienceClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DataScienceWaiter {
  public constructor(
    private client: DataScienceClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobResponse | null (null in case of 404 response)
   */
  public async forJob(
    request: serviceRequests.GetJobRequest,
    ...targetStates: models.JobLifecycleState[]
  ): Promise<serviceResponses.GetJobResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getJob(request),
      response => targetStates.includes(response.job.lifecycleState!),
      targetStates.includes(models.JobLifecycleState.Deleted)
    );
  }

  /**
   * Waits forJobRun till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobRunResponse | null (null in case of 404 response)
   */
  public async forJobRun(
    request: serviceRequests.GetJobRunRequest,
    ...targetStates: models.JobRunLifecycleState[]
  ): Promise<serviceResponses.GetJobRunResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getJobRun(request),
      response => targetStates.includes(response.jobRun.lifecycleState!),
      targetStates.includes(models.JobRunLifecycleState.Deleted)
    );
  }

  /**
   * Waits forModel till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetModelResponse | null (null in case of 404 response)
   */
  public async forModel(
    request: serviceRequests.GetModelRequest,
    ...targetStates: models.ModelLifecycleState[]
  ): Promise<serviceResponses.GetModelResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getModel(request),
      response => targetStates.includes(response.model.lifecycleState!),
      targetStates.includes(models.ModelLifecycleState.Deleted)
    );
  }

  /**
   * Waits forModelDeployment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetModelDeploymentResponse | null (null in case of 404 response)
   */
  public async forModelDeployment(
    request: serviceRequests.GetModelDeploymentRequest,
    ...targetStates: models.ModelDeploymentLifecycleState[]
  ): Promise<serviceResponses.GetModelDeploymentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getModelDeployment(request),
      response => targetStates.includes(response.modelDeployment.lifecycleState!),
      targetStates.includes(models.ModelDeploymentLifecycleState.Deleted)
    );
  }

  /**
   * Waits forModelVersionSet till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetModelVersionSetResponse | null (null in case of 404 response)
   */
  public async forModelVersionSet(
    request: serviceRequests.GetModelVersionSetRequest,
    ...targetStates: models.ModelVersionSetLifecycleState[]
  ): Promise<serviceResponses.GetModelVersionSetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getModelVersionSet(request),
      response => targetStates.includes(response.modelVersionSet.lifecycleState!),
      targetStates.includes(models.ModelVersionSetLifecycleState.Deleted)
    );
  }

  /**
   * Waits forNotebookSession till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNotebookSessionResponse | null (null in case of 404 response)
   */
  public async forNotebookSession(
    request: serviceRequests.GetNotebookSessionRequest,
    ...targetStates: models.NotebookSessionLifecycleState[]
  ): Promise<serviceResponses.GetNotebookSessionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNotebookSession(request),
      response => targetStates.includes(response.notebookSession.lifecycleState!),
      targetStates.includes(models.NotebookSessionLifecycleState.Deleted)
    );
  }

  /**
   * Waits forProject till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetProjectResponse | null (null in case of 404 response)
   */
  public async forProject(
    request: serviceRequests.GetProjectRequest,
    ...targetStates: models.ProjectLifecycleState[]
  ): Promise<serviceResponses.GetProjectResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getProject(request),
      response => targetStates.includes(response.project.lifecycleState!),
      targetStates.includes(models.ProjectLifecycleState.Deleted)
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
