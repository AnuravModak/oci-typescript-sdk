/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeCompartmentRequest from "./change-compartment-request";
export import ChangeCompartmentRequest = ChangeCompartmentRequest.ChangeCompartmentRequest;
import * as CreateApplicationRequest from "./create-application-request";
export import CreateApplicationRequest = CreateApplicationRequest.CreateApplicationRequest;
import * as CreateConnectionRequest from "./create-connection-request";
export import CreateConnectionRequest = CreateConnectionRequest.CreateConnectionRequest;
import * as CreateConnectionValidationRequest from "./create-connection-validation-request";
export import CreateConnectionValidationRequest = CreateConnectionValidationRequest.CreateConnectionValidationRequest;
import * as CreateDataAssetRequest from "./create-data-asset-request";
export import CreateDataAssetRequest = CreateDataAssetRequest.CreateDataAssetRequest;
import * as CreateDataFlowRequest from "./create-data-flow-request";
export import CreateDataFlowRequest = CreateDataFlowRequest.CreateDataFlowRequest;
import * as CreateDataFlowValidationRequest from "./create-data-flow-validation-request";
export import CreateDataFlowValidationRequest = CreateDataFlowValidationRequest.CreateDataFlowValidationRequest;
import * as CreateEntityShapeRequest from "./create-entity-shape-request";
export import CreateEntityShapeRequest = CreateEntityShapeRequest.CreateEntityShapeRequest;
import * as CreateFolderRequest from "./create-folder-request";
export import CreateFolderRequest = CreateFolderRequest.CreateFolderRequest;
import * as CreatePatchRequest from "./create-patch-request";
export import CreatePatchRequest = CreatePatchRequest.CreatePatchRequest;
import * as CreateProjectRequest from "./create-project-request";
export import CreateProjectRequest = CreateProjectRequest.CreateProjectRequest;
import * as CreateTaskRequest from "./create-task-request";
export import CreateTaskRequest = CreateTaskRequest.CreateTaskRequest;
import * as CreateTaskRunRequest from "./create-task-run-request";
export import CreateTaskRunRequest = CreateTaskRunRequest.CreateTaskRunRequest;
import * as CreateTaskValidationRequest from "./create-task-validation-request";
export import CreateTaskValidationRequest = CreateTaskValidationRequest.CreateTaskValidationRequest;
import * as CreateWorkspaceRequest from "./create-workspace-request";
export import CreateWorkspaceRequest = CreateWorkspaceRequest.CreateWorkspaceRequest;
import * as DeleteApplicationRequest from "./delete-application-request";
export import DeleteApplicationRequest = DeleteApplicationRequest.DeleteApplicationRequest;
import * as DeleteConnectionRequest from "./delete-connection-request";
export import DeleteConnectionRequest = DeleteConnectionRequest.DeleteConnectionRequest;
import * as DeleteConnectionValidationRequest from "./delete-connection-validation-request";
export import DeleteConnectionValidationRequest = DeleteConnectionValidationRequest.DeleteConnectionValidationRequest;
import * as DeleteDataAssetRequest from "./delete-data-asset-request";
export import DeleteDataAssetRequest = DeleteDataAssetRequest.DeleteDataAssetRequest;
import * as DeleteDataFlowRequest from "./delete-data-flow-request";
export import DeleteDataFlowRequest = DeleteDataFlowRequest.DeleteDataFlowRequest;
import * as DeleteDataFlowValidationRequest from "./delete-data-flow-validation-request";
export import DeleteDataFlowValidationRequest = DeleteDataFlowValidationRequest.DeleteDataFlowValidationRequest;
import * as DeleteFolderRequest from "./delete-folder-request";
export import DeleteFolderRequest = DeleteFolderRequest.DeleteFolderRequest;
import * as DeletePatchRequest from "./delete-patch-request";
export import DeletePatchRequest = DeletePatchRequest.DeletePatchRequest;
import * as DeleteProjectRequest from "./delete-project-request";
export import DeleteProjectRequest = DeleteProjectRequest.DeleteProjectRequest;
import * as DeleteTaskRequest from "./delete-task-request";
export import DeleteTaskRequest = DeleteTaskRequest.DeleteTaskRequest;
import * as DeleteTaskRunRequest from "./delete-task-run-request";
export import DeleteTaskRunRequest = DeleteTaskRunRequest.DeleteTaskRunRequest;
import * as DeleteTaskValidationRequest from "./delete-task-validation-request";
export import DeleteTaskValidationRequest = DeleteTaskValidationRequest.DeleteTaskValidationRequest;
import * as DeleteWorkspaceRequest from "./delete-workspace-request";
export import DeleteWorkspaceRequest = DeleteWorkspaceRequest.DeleteWorkspaceRequest;
import * as GetApplicationRequest from "./get-application-request";
export import GetApplicationRequest = GetApplicationRequest.GetApplicationRequest;
import * as GetConnectionRequest from "./get-connection-request";
export import GetConnectionRequest = GetConnectionRequest.GetConnectionRequest;
import * as GetConnectionValidationRequest from "./get-connection-validation-request";
export import GetConnectionValidationRequest = GetConnectionValidationRequest.GetConnectionValidationRequest;
import * as GetCountStatisticRequest from "./get-count-statistic-request";
export import GetCountStatisticRequest = GetCountStatisticRequest.GetCountStatisticRequest;
import * as GetDataAssetRequest from "./get-data-asset-request";
export import GetDataAssetRequest = GetDataAssetRequest.GetDataAssetRequest;
import * as GetDataEntityRequest from "./get-data-entity-request";
export import GetDataEntityRequest = GetDataEntityRequest.GetDataEntityRequest;
import * as GetDataFlowRequest from "./get-data-flow-request";
export import GetDataFlowRequest = GetDataFlowRequest.GetDataFlowRequest;
import * as GetDataFlowValidationRequest from "./get-data-flow-validation-request";
export import GetDataFlowValidationRequest = GetDataFlowValidationRequest.GetDataFlowValidationRequest;
import * as GetDependentObjectRequest from "./get-dependent-object-request";
export import GetDependentObjectRequest = GetDependentObjectRequest.GetDependentObjectRequest;
import * as GetFolderRequest from "./get-folder-request";
export import GetFolderRequest = GetFolderRequest.GetFolderRequest;
import * as GetPatchRequest from "./get-patch-request";
export import GetPatchRequest = GetPatchRequest.GetPatchRequest;
import * as GetProjectRequest from "./get-project-request";
export import GetProjectRequest = GetProjectRequest.GetProjectRequest;
import * as GetPublishedObjectRequest from "./get-published-object-request";
export import GetPublishedObjectRequest = GetPublishedObjectRequest.GetPublishedObjectRequest;
import * as GetSchemaRequest from "./get-schema-request";
export import GetSchemaRequest = GetSchemaRequest.GetSchemaRequest;
import * as GetTaskRequest from "./get-task-request";
export import GetTaskRequest = GetTaskRequest.GetTaskRequest;
import * as GetTaskRunRequest from "./get-task-run-request";
export import GetTaskRunRequest = GetTaskRunRequest.GetTaskRunRequest;
import * as GetTaskValidationRequest from "./get-task-validation-request";
export import GetTaskValidationRequest = GetTaskValidationRequest.GetTaskValidationRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as GetWorkspaceRequest from "./get-workspace-request";
export import GetWorkspaceRequest = GetWorkspaceRequest.GetWorkspaceRequest;
import * as ListApplicationsRequest from "./list-applications-request";
export import ListApplicationsRequest = ListApplicationsRequest.ListApplicationsRequest;
import * as ListConnectionValidationsRequest from "./list-connection-validations-request";
export import ListConnectionValidationsRequest = ListConnectionValidationsRequest.ListConnectionValidationsRequest;
import * as ListConnectionsRequest from "./list-connections-request";
export import ListConnectionsRequest = ListConnectionsRequest.ListConnectionsRequest;
import * as ListDataAssetsRequest from "./list-data-assets-request";
export import ListDataAssetsRequest = ListDataAssetsRequest.ListDataAssetsRequest;
import * as ListDataEntitiesRequest from "./list-data-entities-request";
export import ListDataEntitiesRequest = ListDataEntitiesRequest.ListDataEntitiesRequest;
import * as ListDataFlowValidationsRequest from "./list-data-flow-validations-request";
export import ListDataFlowValidationsRequest = ListDataFlowValidationsRequest.ListDataFlowValidationsRequest;
import * as ListDataFlowsRequest from "./list-data-flows-request";
export import ListDataFlowsRequest = ListDataFlowsRequest.ListDataFlowsRequest;
import * as ListDependentObjectsRequest from "./list-dependent-objects-request";
export import ListDependentObjectsRequest = ListDependentObjectsRequest.ListDependentObjectsRequest;
import * as ListFoldersRequest from "./list-folders-request";
export import ListFoldersRequest = ListFoldersRequest.ListFoldersRequest;
import * as ListPatchesRequest from "./list-patches-request";
export import ListPatchesRequest = ListPatchesRequest.ListPatchesRequest;
import * as ListProjectsRequest from "./list-projects-request";
export import ListProjectsRequest = ListProjectsRequest.ListProjectsRequest;
import * as ListPublishedObjectsRequest from "./list-published-objects-request";
export import ListPublishedObjectsRequest = ListPublishedObjectsRequest.ListPublishedObjectsRequest;
import * as ListSchemasRequest from "./list-schemas-request";
export import ListSchemasRequest = ListSchemasRequest.ListSchemasRequest;
import * as ListTaskRunLogsRequest from "./list-task-run-logs-request";
export import ListTaskRunLogsRequest = ListTaskRunLogsRequest.ListTaskRunLogsRequest;
import * as ListTaskRunsRequest from "./list-task-runs-request";
export import ListTaskRunsRequest = ListTaskRunsRequest.ListTaskRunsRequest;
import * as ListTaskValidationsRequest from "./list-task-validations-request";
export import ListTaskValidationsRequest = ListTaskValidationsRequest.ListTaskValidationsRequest;
import * as ListTasksRequest from "./list-tasks-request";
export import ListTasksRequest = ListTasksRequest.ListTasksRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as ListWorkspacesRequest from "./list-workspaces-request";
export import ListWorkspacesRequest = ListWorkspacesRequest.ListWorkspacesRequest;
import * as StartWorkspaceRequest from "./start-workspace-request";
export import StartWorkspaceRequest = StartWorkspaceRequest.StartWorkspaceRequest;
import * as StopWorkspaceRequest from "./stop-workspace-request";
export import StopWorkspaceRequest = StopWorkspaceRequest.StopWorkspaceRequest;
import * as UpdateApplicationRequest from "./update-application-request";
export import UpdateApplicationRequest = UpdateApplicationRequest.UpdateApplicationRequest;
import * as UpdateConnectionRequest from "./update-connection-request";
export import UpdateConnectionRequest = UpdateConnectionRequest.UpdateConnectionRequest;
import * as UpdateDataAssetRequest from "./update-data-asset-request";
export import UpdateDataAssetRequest = UpdateDataAssetRequest.UpdateDataAssetRequest;
import * as UpdateDataFlowRequest from "./update-data-flow-request";
export import UpdateDataFlowRequest = UpdateDataFlowRequest.UpdateDataFlowRequest;
import * as UpdateFolderRequest from "./update-folder-request";
export import UpdateFolderRequest = UpdateFolderRequest.UpdateFolderRequest;
import * as UpdateProjectRequest from "./update-project-request";
export import UpdateProjectRequest = UpdateProjectRequest.UpdateProjectRequest;
import * as UpdateTaskRequest from "./update-task-request";
export import UpdateTaskRequest = UpdateTaskRequest.UpdateTaskRequest;
import * as UpdateTaskRunRequest from "./update-task-run-request";
export import UpdateTaskRunRequest = UpdateTaskRunRequest.UpdateTaskRunRequest;
import * as UpdateWorkspaceRequest from "./update-workspace-request";
export import UpdateWorkspaceRequest = UpdateWorkspaceRequest.UpdateWorkspaceRequest;