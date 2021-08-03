/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { FunctionsManagementWaiter } from "./functionsmanagement-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum FunctionsInvokeApiKeys {}

export class FunctionsInvokeClient {
  protected static serviceEndpointTemplate = "https://functions.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      if (!clientConfiguration.retryConfiguration) {
        this._clientConfiguration.retryConfiguration = common.NoRetryConfigurationDetails;
      }
    } else {
      // Disable default retries for the service
      this._clientConfiguration = {
        retryConfiguration: common.NoRetryConfigurationDetails
      };
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20181201";
    if (this.logger) this.logger.info(`FunctionsInvokeClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Invokes a function
   * @param InvokeFunctionRequest
   * @return InvokeFunctionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/InvokeFunction.ts.html |here} to see how to use InvokeFunction API.
   */
  public async invokeFunction(
    invokeFunctionRequest: requests.InvokeFunctionRequest
  ): Promise<responses.InvokeFunctionResponse> {
    if (this.logger) this.logger.debug("Calling operation FunctionsInvokeClient#invokeFunction.");
    const pathParams = {
      "{functionId}": invokeFunctionRequest.functionId
    };

    const queryParams = {};

    let headerParams = {
      "fn-intent": invokeFunctionRequest.fnIntent,
      "fn-invoke-type": invokeFunctionRequest.fnInvokeType,
      "opc-request-id": invokeFunctionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      invokeFunctionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/functions/{functionId}/actions/invoke",
      method: "POST",
      bodyContent: invokeFunctionRequest.invokeFunctionBody,
      pathParams: pathParams,
      headerParams: headerParams,
      backupBinaryBody: retrier.backUpBinaryBody,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.InvokeFunctionResponse>{},

        body: response.body!,
        bodyKey: "value",
        bodyModel: "string",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
export enum FunctionsManagementApiKeys {}

export class FunctionsManagementClient {
  protected static serviceEndpointTemplate = "https://functions.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": FunctionsManagementWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      if (!clientConfiguration.retryConfiguration) {
        this._clientConfiguration.retryConfiguration = common.NoRetryConfigurationDetails;
      }
    } else {
      // Disable default retries for the service
      this._clientConfiguration = {
        retryConfiguration: common.NoRetryConfigurationDetails
      };
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20181201";
    if (this.logger)
      this.logger.info(`FunctionsManagementClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      FunctionsManagementClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      FunctionsManagementClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new FunctionsManagementWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): FunctionsManagementWaiter {
    this._waiters = new FunctionsManagementWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): FunctionsManagementWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Moves an application into a different compartment within the same tenancy.
   * For information about moving resources between compartments, see [Moving Resources Between Compartments](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
   *
   * @param ChangeApplicationCompartmentRequest
   * @return ChangeApplicationCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/ChangeApplicationCompartment.ts.html |here} to see how to use ChangeApplicationCompartment API.
   */
  public async changeApplicationCompartment(
    changeApplicationCompartmentRequest: requests.ChangeApplicationCompartmentRequest
  ): Promise<responses.ChangeApplicationCompartmentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation FunctionsManagementClient#changeApplicationCompartment."
      );
    const pathParams = {
      "{applicationId}": changeApplicationCompartmentRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeApplicationCompartmentRequest.ifMatch,
      "opc-request-id": changeApplicationCompartmentRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeApplicationCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeApplicationCompartmentRequest.changeApplicationCompartmentDetails,
        "ChangeApplicationCompartmentDetails",
        model.ChangeApplicationCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeApplicationCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new application.
   * @param CreateApplicationRequest
   * @return CreateApplicationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/CreateApplication.ts.html |here} to see how to use CreateApplication API.
   */
  public async createApplication(
    createApplicationRequest: requests.CreateApplicationRequest
  ): Promise<responses.CreateApplicationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#createApplication.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createApplicationRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createApplicationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createApplicationRequest.createApplicationDetails,
        "CreateApplicationDetails",
        model.CreateApplicationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateApplicationResponse>{},
        body: await response.json(),
        bodyKey: "application",
        bodyModel: model.Application,
        type: "model.Application",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new function.
   * @param CreateFunctionRequest
   * @return CreateFunctionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/CreateFunction.ts.html |here} to see how to use CreateFunction API.
   */
  public async createFunction(
    createFunctionRequest: requests.CreateFunctionRequest
  ): Promise<responses.CreateFunctionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#createFunction.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createFunctionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createFunctionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/functions",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createFunctionRequest.createFunctionDetails,
        "CreateFunctionDetails",
        model.CreateFunctionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateFunctionResponse>{},
        body: await response.json(),
        bodyKey: "function",
        bodyModel: model.Function,
        type: "model.Function",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes an application.
   * @param DeleteApplicationRequest
   * @return DeleteApplicationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/DeleteApplication.ts.html |here} to see how to use DeleteApplication API.
   */
  public async deleteApplication(
    deleteApplicationRequest: requests.DeleteApplicationRequest
  ): Promise<responses.DeleteApplicationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#deleteApplication.");
    const pathParams = {
      "{applicationId}": deleteApplicationRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteApplicationRequest.ifMatch,
      "opc-request-id": deleteApplicationRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteApplicationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteApplicationResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes a function.
   * @param DeleteFunctionRequest
   * @return DeleteFunctionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/DeleteFunction.ts.html |here} to see how to use DeleteFunction API.
   */
  public async deleteFunction(
    deleteFunctionRequest: requests.DeleteFunctionRequest
  ): Promise<responses.DeleteFunctionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#deleteFunction.");
    const pathParams = {
      "{functionId}": deleteFunctionRequest.functionId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteFunctionRequest.ifMatch,
      "opc-request-id": deleteFunctionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteFunctionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/functions/{functionId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteFunctionResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Retrieves an application.
   * @param GetApplicationRequest
   * @return GetApplicationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/GetApplication.ts.html |here} to see how to use GetApplication API.
   */
  public async getApplication(
    getApplicationRequest: requests.GetApplicationRequest
  ): Promise<responses.GetApplicationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#getApplication.");
    const pathParams = {
      "{applicationId}": getApplicationRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getApplicationRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getApplicationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetApplicationResponse>{},
        body: await response.json(),
        bodyKey: "application",
        bodyModel: model.Application,
        type: "model.Application",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Retrieves a function.
   * @param GetFunctionRequest
   * @return GetFunctionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/GetFunction.ts.html |here} to see how to use GetFunction API.
   */
  public async getFunction(
    getFunctionRequest: requests.GetFunctionRequest
  ): Promise<responses.GetFunctionResponse> {
    if (this.logger) this.logger.debug("Calling operation FunctionsManagementClient#getFunction.");
    const pathParams = {
      "{functionId}": getFunctionRequest.functionId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getFunctionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getFunctionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/functions/{functionId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetFunctionResponse>{},
        body: await response.json(),
        bodyKey: "function",
        bodyModel: model.Function,
        type: "model.Function",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists applications for a compartment.
   * @param ListApplicationsRequest
   * @return ListApplicationsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/ListApplications.ts.html |here} to see how to use ListApplications API.
   */
  public async listApplications(
    listApplicationsRequest: requests.ListApplicationsRequest
  ): Promise<responses.ListApplicationsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#listApplications.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listApplicationsRequest.compartmentId,
      "limit": listApplicationsRequest.limit,
      "page": listApplicationsRequest.page,
      "lifecycleState": listApplicationsRequest.lifecycleState,
      "displayName": listApplicationsRequest.displayName,
      "id": listApplicationsRequest.id,
      "sortOrder": listApplicationsRequest.sortOrder,
      "sortBy": listApplicationsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listApplicationsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listApplicationsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListApplicationsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.ApplicationSummary,
        type: "Array<model.ApplicationSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.ApplicationSummary objects
   * contained in responses from the listApplications operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllApplications(
    request: requests.ListApplicationsRequest
  ): AsyncIterableIterator<model.ApplicationSummary> {
    return paginateRecords(request, req => this.listApplications(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listApplications operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllApplicationsResponses(
    request: requests.ListApplicationsRequest
  ): AsyncIterableIterator<responses.ListApplicationsResponse> {
    return paginateResponses(request, req => this.listApplications(req));
  }

  /**
   * Lists functions for an application.
   * @param ListFunctionsRequest
   * @return ListFunctionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/ListFunctions.ts.html |here} to see how to use ListFunctions API.
   */
  public async listFunctions(
    listFunctionsRequest: requests.ListFunctionsRequest
  ): Promise<responses.ListFunctionsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#listFunctions.");
    const pathParams = {};

    const queryParams = {
      "applicationId": listFunctionsRequest.applicationId,
      "limit": listFunctionsRequest.limit,
      "page": listFunctionsRequest.page,
      "lifecycleState": listFunctionsRequest.lifecycleState,
      "displayName": listFunctionsRequest.displayName,
      "id": listFunctionsRequest.id,
      "sortOrder": listFunctionsRequest.sortOrder,
      "sortBy": listFunctionsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listFunctionsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listFunctionsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/functions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListFunctionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.FunctionSummary,
        type: "Array<model.FunctionSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new async iterator which will iterate over the models.FunctionSummary objects
   * contained in responses from the listFunctions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllFunctions(
    request: requests.ListFunctionsRequest
  ): AsyncIterableIterator<model.FunctionSummary> {
    return paginateRecords(request, req => this.listFunctions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listFunctions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllFunctionsResponses(
    request: requests.ListFunctionsRequest
  ): AsyncIterableIterator<responses.ListFunctionsResponse> {
    return paginateResponses(request, req => this.listFunctions(req));
  }

  /**
   * Modifies an application
   * @param UpdateApplicationRequest
   * @return UpdateApplicationResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/UpdateApplication.ts.html |here} to see how to use UpdateApplication API.
   */
  public async updateApplication(
    updateApplicationRequest: requests.UpdateApplicationRequest
  ): Promise<responses.UpdateApplicationResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#updateApplication.");
    const pathParams = {
      "{applicationId}": updateApplicationRequest.applicationId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateApplicationRequest.ifMatch,
      "opc-request-id": updateApplicationRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateApplicationRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/applications/{applicationId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateApplicationRequest.updateApplicationDetails,
        "UpdateApplicationDetails",
        model.UpdateApplicationDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateApplicationResponse>{},
        body: await response.json(),
        bodyKey: "application",
        bodyModel: model.Application,
        type: "model.Application",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Modifies a function
   * @param UpdateFunctionRequest
   * @return UpdateFunctionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/UpdateFunction.ts.html |here} to see how to use UpdateFunction API.
   */
  public async updateFunction(
    updateFunctionRequest: requests.UpdateFunctionRequest
  ): Promise<responses.UpdateFunctionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation FunctionsManagementClient#updateFunction.");
    const pathParams = {
      "{functionId}": updateFunctionRequest.functionId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateFunctionRequest.ifMatch,
      "opc-request-id": updateFunctionRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateFunctionRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/functions/{functionId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateFunctionRequest.updateFunctionDetails,
        "UpdateFunctionDetails",
        model.UpdateFunctionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateFunctionResponse>{},
        body: await response.json(),
        bodyKey: "function",
        bodyModel: model.Function,
        type: "model.Function",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
