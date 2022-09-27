### Connector Services

#### testWrite(channelId,channelName,textData)

Summary: Tests whether a file can be written to the specified directory.

Parameters:

| Name        | Description              | Required | Properties |
| ----------- | ------------------------ | -------- | ---------- |
| channelId   | The ID of the channel.   | Yes      |
| channelName | The name of the channel. | Yes      |
| textData    | string                   | Yes      |            |

---

#### testWrite_1(channelId,channelName,fileDispatcherProperties)

Summary: Tests whether a file can be written to the specified directory.

Parameters:

| Name                     | Description              | Required | Properties                                                                                                                                                                                                                                                                                            |
| ------------------------ | ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId                | The ID of the channel.   | Yes      |
| channelName              | The name of the channel. | Yes      |
| fileDispatcherProperties | object                   | Yes      | {pluginProperties,destinationConnectorProperties,scheme,schemeProperties,host,outputPattern,anonymous,username,password,timeout,keepConnectionOpen,maxIdleTime,secure,passive,validateConnection,outputAppend,errorOnExists,temporary,binary,charsetEncoding,template,name,protocol,purgedProperties} |

---

#### testRead(channelId,channelName,fileReceiverProperties)

Summary: Tests whether a file can be read from the specified directory.

Parameters:

| Name                   | Description              | Required | Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId              | The ID of the channel.   | Yes      |
| channelName            | The name of the channel. | Yes      |
| fileReceiverProperties | object                   | Yes      | {pluginProperties,pollConnectorProperties,sourceConnectorProperties,scheme,schemeProperties,host,fileFilter,regex,directoryRecursion,ignoreDot,anonymous,username,password,timeout,secure,passive,validateConnection,afterProcessingAction,moveToDirectory,moveToFileName,errorReadingAction,errorResponseAction,errorMoveToDirectory,errorMoveToFileName,checkFileAge,fileAge,fileSizeMinimum,fileSizeMaximum,ignoreFileSizeMaximum,sortBy,binary,charsetEncoding,name,protocol,purgedProperties} |

---

#### testConnection(channelId,channelName,httpDispatcherProperties)

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Parameters:

| Name                     | Description              | Required | Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId                | The ID of the channel.   | Yes      |
| channelName              | The name of the channel. | Yes      |
| httpDispatcherProperties | object                   | Yes      | {pluginProperties,destinationConnectorProperties,host,useProxyServer,proxyAddress,proxyPort,method,useHeadersVariable,headersVariable,useParametersVariable,parametersVariable,responseXmlBody,responseParseMultipart,responseIncludeMetadata,responseBinaryMimeTypes,responseBinaryMimeTypesRegex,multipart,useAuthentication,authenticationType,usePreemptiveAuthentication,username,password,content,contentType,dataTypeBinary,charset,socketTimeout,name,protocol,parametersMap,headersMap,purgedProperties} |

---

#### getTables( {channelId,channelName,driver,username,password,tableNamePattern,selectLimit,resourceId})

Summary: Executes a query to retrieve database table metadata.

Parameters:

| Name             | Description                                                                    | Required | Properties |
| ---------------- | ------------------------------------------------------------------------------ | -------- | ---------- |
| channelId        | The ID of the channel.                                                         | Yes      |
| channelName      | The name of the channel.                                                       | Yes      |
| driver           | The JDBC driver class to use. (ex: org.postgresql.Driver)                      | Yes      |
| url              | The JDBC connection URL to use. (ex: jdbc:postgresql://localhost:5432/mirthdb) | Yes      |
| username         | The username to authenticate with.                                             | No       |
| password         | The password to authenticate with.                                             | No       |
| tableNamePattern | If specified, filters by table name. Wildcards (\* or %) are allowed.          | No       |
| selectLimit      | A simple query to use to retrieve database metadata information.               | No       |
| resourceId       | Library resource IDs to use, if a custom driver is necessary.                  | No       |

---

#### getTemplate(templateName)

Summary: Retrieves a single JMS connector settings template.

Parameters:

| Name         | Description               | Required | Properties |
| ------------ | ------------------------- | -------- | ---------- |
| templateName | The name of the template. | Yes      |

---

#### saveTemplate(templateName,jmsConnectorProperties)

Summary: Creates or updates a JMS connector settings template.

Parameters:

| Name                   | Description               | Required | Properties                                                                                                                                                                                                                 |
| ---------------------- | ------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| templateName           | The name of the template. | Yes      |
| jmsConnectorProperties | object                    | Yes      | {pluginProperties,useJndi,jndiProviderUrl,jndiInitialContextFactory,jndiConnectionFactoryName,connectionFactoryClass,connectionProperties,username,password,destinationName,topic,clientId,name,protocol,purgedProperties} |

---

#### deleteTemplate(templateName)

Summary: Creates or updates a JMS connector settings template.

Parameters:

| Name         | Description               | Required | Properties |
| ------------ | ------------------------- | -------- | ---------- |
| templateName | The name of the template. | Yes      |

---

#### getTemplates()

Summary: Retrieves JMS connector settings templates.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### sendTestEmail(channelId,channelName,smtpDispatcherProperties)

Summary: Sends a test e-mail, replacing any connector properties first.

Parameters:

| Name                     | Description              | Required | Properties                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId                | The ID of the channel.   | Yes      |
| channelName              | The name of the channel. | Yes      |
| smtpDispatcherProperties | object                   | Yes      | {pluginProperties,destinationConnectorProperties,smtpHost,smtpPort,overrideLocalBinding,localAddress,localPort,timeout,encryption,authentication,username,password,to,from,cc,bcc,replyTo,headersVariable,subject,charsetEncoding,html,body,attachmentsVariable,name,protocol,useAttachmentsVariable,useHeadersVariable,headersMap,attachmentsList,purgedProperties} |

---

#### testConnection_1(channelId,channelName,tcpDispatcherProperties)

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Parameters:

| Name                    | Description              | Required | Properties                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------- | ------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| channelId               | The ID of the channel.   | Yes      |
| channelName             | The name of the channel. | Yes      |
| tcpDispatcherProperties | object                   | Yes      | {pluginProperties,destinationConnectorProperties,transmissionModeProperties,serverMode,remoteAddress,remotePort,overrideLocalBinding,localAddress,localPort,sendTimeout,bufferSize,maxConnections,keepConnectionOpen,checkRemoteHost,responseTimeout,ignoreResponse,queueOnResponseTimeout,dataTypeBinary,charsetEncoding,template,name,protocol,purgedProperties} |

---

#### getDefinition(channelId,channelName,wsdlUrl)

Summary: Retrieves the definition service map corresponding to the specified WSDL.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### testConnection_2(channelId,channelName,webServiceDispatcherProperties)

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Parameters:

| Name                           | Description              | Required | Properties                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | ------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| channelId                      | The ID of the channel.   | Yes      |
| channelName                    | The name of the channel. | Yes      |
| webServiceDispatcherProperties | object                   | Yes      | {pluginProperties,destinationConnectorProperties,wsdlUrl,service,port,operation,locationURI,socketTimeout,useAuthentication,username,password,envelope,oneWay,headersVariable,useMtom,attachmentNames,attachmentContents,attachmentTypes,attachmentsVariable,soapAction,wsdlDefinitionMap,name,protocol,useAttachmentsVariable,useHeadersVariable,headersMap,purgedProperties} |

---

#### cacheWsdlFromUrl(channelId,channelName,webServiceDispatcherProperties)

Summary: Downloads the WSDL at the specified URL and caches the web service definition tree.

Parameters:

| Name                           | Description              | Required | Properties                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | ------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| channelId                      | The ID of the channel.   | Yes      |
| channelName                    | The name of the channel. | Yes      |
| webServiceDispatcherProperties | object                   | Yes      | {pluginProperties,destinationConnectorProperties,wsdlUrl,service,port,operation,locationURI,socketTimeout,useAuthentication,username,password,envelope,oneWay,headersVariable,useMtom,attachmentNames,attachmentContents,attachmentTypes,attachmentsVariable,soapAction,wsdlDefinitionMap,name,protocol,useAttachmentsVariable,useHeadersVariable,headersMap,purgedProperties} |

---

#### isWsdlCached(channelId,channelName,wsdlUrl)

Summary: Returns true if the definition tree for the WSDL is cached by the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### generateEnvelope(channelId,channelName,wsdlUrl)

Summary: Generate SOAP envelope for a given WSDL operation.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getSoapAction(channelId,channelName,wsdlUrl)

Summary: Retrieves the default SOAP Action for a given WSDL operation.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

### Extension Services

#### getChannelLog(serverId,fetchSize,lastLogId,channelId)

Summary: Retrieves connection logs for a specific channel.

Parameters:

| Name      | Description                                                                                                | Required | Properties |
| --------- | ---------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| serverId  | The server ID to retrieve logs for. Logs for all servers are retrieved is this parameter is not specified. | No       |
| channelId | The channel ID to retrieve logs for.                                                                       | Yes      |
| fetchSize | Specifies the maximum number of log items to return.                                                       | Yes      |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned.                   | No       |

---

#### getConnectorStateMap(serverId)

Summary: Retrieves all dashboard connector states.

Parameters:

| Name     | Description                                                                                                                               | Required | Properties |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| serverId | The server ID to retrieve connector statuses for. Connector Statuses across all servers are retrieved is this parameter is not specified. | No       |

---

#### getChannelStates()

Summary: Retrieves all dashboard channel states.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getChannelState(channelId)

Summary: Retrieves a single dashboard channel state.

Parameters:

| Name      | Description                                      | Required | Properties |
| --------- | ------------------------------------------------ | -------- | ---------- |
| channelId | The channel ID to return a dashboard status for. | Yes      |

---

#### getAllChannelLogs(serverId,fetchSize,lastLogId)

Summary: Retrieves connection logs for all channels.

Parameters:

| Name      | Description                                                                                                | Required | Properties |
| --------- | ---------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| serverId  | The server ID to retrieve logs for. Logs for all servers are retrieved is this parameter is not specified. | No       |
| fetchSize | Specifies the maximum number of log items to return.                                                       | Yes      |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned.                   | No       |

---

#### start()

Summary: Starts the data pruner on-demand.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### stop()

Summary: Stops the data pruner if currently running.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getStatusMap()

Summary: Retrieves the current data pruner status.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getLibraries(resourceId)

Summary: Retrieves all library URLs for the given directory resource.

Parameters:

| Name       | Description                       | Required | Properties |
| ---------- | --------------------------------- | -------- | ---------- |
| resourceId | The ID of the directory resource. | Yes      |

---

#### getAllMapsPost(includeGlobalMap)

Summary: Retrieves global and/or global channel map information. This is a POST request alternative to GET /maps/all that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name             | Description                               | Required | Properties |
| ---------------- | ----------------------------------------- | -------- | ---------- |
| includeGlobalMap | If true, the global map will be returned. | No       |

---

#### getGlobalChannelMap(channelId)

Summary: Retrieves global channel map information for a single channel.

Parameters:

| Name      | Description                                                           | Required | Properties |
| --------- | --------------------------------------------------------------------- | -------- | ---------- |
| channelId | The ID of the channel to retrieve global channel map information for. | Yes      |

---

#### getAllMaps(channelId,includeGlobalMap)

Summary: Retrieves global and/or global channel map information.

Parameters:

| Name             | Description                                                           | Required | Properties |
| ---------------- | --------------------------------------------------------------------- | -------- | ---------- |
| channelId        | The ID of the channel to retrieve global channel map information for. | No       |
| includeGlobalMap | If true, the global map will be returned.                             | No       |

---

#### getGlobalMap()

Summary: Retrieves global map information.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getServerLogs(fetchSize,lastLogId)

Summary: Retrieves server log entries.

Parameters:

| Name      | Description                                                                              | Required | Properties |
| --------- | ---------------------------------------------------------------------------------------- | -------- | ---------- |
| fetchSize | Specifies the maximum number of log items to return.                                     | Yes      |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned. | No       |

---

### Alerts

#### getAlerts(alertId)

Summary: Retrieves multiple alerts by ID, or all alerts if not specified.

Parameters:

| Name    | Description                                                     | Required | Properties |
| ------- | --------------------------------------------------------------- | -------- | ---------- |
| alertId | The ID of the alert(s). If absent, all alerts will be returned. | No       |

---

#### createAlert(alertModel)

Summary: Creates a new alert.

Parameters:

| Name       | Description | Required | Properties                                                         |
| ---------- | ----------- | -------- | ------------------------------------------------------------------ |
| alertModel | object      | Yes      | {id,name,enabled,trigger,actionGroups,properties,purgedProperties} |

---

#### getAlertsPost()

Summary: Retrieves multiple alerts by ID, or all alerts if not specified. This is a POST request alternative to GET /alerts that may be used when there are too many alert IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getAlertInfo(alertId)

Summary: Returns an AlertInfo object containing the alert model, alert protocol options, and any updated channel summaries.

Parameters:

| Name    | Description          | Required | Properties |
| ------- | -------------------- | -------- | ---------- |
| alertId | The ID of the alert. | Yes      |

---

#### getAlertInfo_1()

Summary: Returns an AlertInfo object containing alert protocol options and any updated channel summaries.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getAlertProtocolOptions()

Summary: Returns all alert protocol options.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getAlertStatusList()

Summary: Returns all alert dashboard statuses.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getAlert(alertId)

Summary: Retrieves an alert by ID.

Parameters:

| Name    | Description          | Required | Properties |
| ------- | -------------------- | -------- | ---------- |
| alertId | The ID of the alert. | Yes      |

---

#### updateAlert(alertId,alertModel)

Summary: Updates the specified alert.

Parameters:

| Name       | Description          | Required | Properties                                                         |
| ---------- | -------------------- | -------- | ------------------------------------------------------------------ |
| alertId    | The ID of the alert. | Yes      |
| alertModel | object               | Yes      | {id,name,enabled,trigger,actionGroups,properties,purgedProperties} |

---

#### removeAlert(alertId)

Summary: Removes the specified alert.

Parameters:

| Name    | Description          | Required | Properties |
| ------- | -------------------- | -------- | ---------- |
| alertId | The ID of the alert. | Yes      |

---

#### enableAlert(alertId)

Summary: Enables the specified alert.

Parameters:

| Name    | Description          | Required | Properties |
| ------- | -------------------- | -------- | ---------- |
| alertId | The ID of the alert. | Yes      |

---

#### disableAlert(alertId)

Summary: Disables the specified alert.

Parameters:

| Name    | Description          | Required | Properties |
| ------- | -------------------- | -------- | ---------- |
| alertId | The ID of the alert. | Yes      |

---

### Channel Groups

#### getChannelGroupsPost()

Summary: Retrieve a list of all channel groups, or multiple channel groups by ID. This is a POST request alternative to GET /channelgroups that may be used when there are too many channel group IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getChannelGroups(channelGroupId)

Summary: Retrieve a list of all channel groups, or multiple channel groups by ID.

Parameters:

| Name           | Description                                                                         | Required | Properties |
| -------------- | ----------------------------------------------------------------------------------- | -------- | ---------- |
| channelGroupId | The IDs of the channel groups to retrieve. If absent, all groups will be retrieved. | No       |

---

#### updateChannelGroups(override)

Summary: Updates all channel groups in one request. ("Try it out" doesn't work for this endpoint, but the descriptions are valid. Please use another tool for testing.)

Parameters:

| Name     | Description                                                                                  | Required | Properties |
| -------- | -------------------------------------------------------------------------------------------- | -------- | ---------- |
| override | If true, the channel groups will be updated even if different revisions exist on the server. | No       |

---

### Channels

#### getChannel(includeCodeTemplateLibraries,channelId)

Summary: Retrieve a single channel by ID.

Parameters:

| Name                         | Description                                                       | Required | Properties |
| ---------------------------- | ----------------------------------------------------------------- | -------- | ---------- |
| channelId                    | The ID of the channel to retrieve.                                | Yes      |
| includeCodeTemplateLibraries | If true, code template libraries will be included in the channel. | No       |

---

#### updateChannel(override,channelId,channel)

Summary: Updates the specified channel.

Parameters:

| Name      | Description                                                                             | Required | Properties                                                                                                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId | The ID of the channel to update.                                                        | Yes      |
| override  | If true, the channel will be updated even if a different revision exists on the server. | No       |
| channel   | object                                                                                  | Yes      | {id,nextMetaDataId,name,description,revision,sourceConnector,destinationConnectors,preprocessingScript,postprocessingScript,deployScript,undeployScript,properties,exportData,purgedProperties,enabledDestinationConnectors} |

---

#### removeChannel(channelId)

Summary: Removes the channel with the specified ID.

Parameters:

| Name      | Description                      | Required | Properties |
| --------- | -------------------------------- | -------- | ---------- |
| channelId | The ID of the channel to remove. | Yes      |

---

#### removeChannelsPost()

Summary: Removes the channels with the specified IDs. This is a POST request alternative to DELETE /channels that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getChannelsPost(pollingOnly,includeCodeTemplateLibraries)

Summary: Retrieve a list of all channels, or multiple channels by ID. This is a POST request alternative to GET /channels that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name                         | Description                                                             | Required | Properties |
| ---------------------------- | ----------------------------------------------------------------------- | -------- | ---------- |
| pollingOnly                  | If true, only channels with polling source connectors will be returned. | No       |
| includeCodeTemplateLibraries | If true, code template libraries will be included in the channel.       | No       |

---

#### getChannelIdsAndNames()

Summary: Returns a map of all channel IDs and names.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getChannels(channelId,pollingOnly,includeCodeTemplateLibraries)

Summary: Retrieve a list of all channels, or multiple channels by ID.

Parameters:

| Name                         | Description                                                                     | Required | Properties |
| ---------------------------- | ------------------------------------------------------------------------------- | -------- | ---------- |
| channelId                    | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No       |
| pollingOnly                  | If true, only channels with polling source connectors will be returned.         | No       |
| includeCodeTemplateLibraries | If true, code template libraries will be included in the channel.               | No       |

---

#### createChannel(channel)

Summary: Creates a new channel.

Parameters:

| Name    | Description | Required | Properties                                                                                                                                                                                                                   |
| ------- | ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channel | object      | Yes      | {id,nextMetaDataId,name,description,revision,sourceConnector,destinationConnectors,preprocessingScript,postprocessingScript,deployScript,undeployScript,properties,exportData,purgedProperties,enabledDestinationConnectors} |

---

#### removeChannels(channelId)

Summary: Removes the channels with the specified IDs.

Parameters:

| Name      | Description                        | Required | Properties |
| --------- | ---------------------------------- | -------- | ---------- |
| channelId | The IDs of the channels to remove. | Yes      |

---

#### getMetaDataColumns(channelId)

Summary: Returns all metadata columns for a channel.

Parameters:

| Name      | Description            | Required | Properties |
| --------- | ---------------------- | -------- | ---------- |
| channelId | The ID of the channel. | Yes      |

---

#### getChannelSummary(ignoreNewChannels)

Summary: Returns a list of channel summaries, indicating to a client which channels have changed (been updated, deleted, undeployed, etc.). If a channel was modified, the entire Channel object will be returned.

Parameters:

| Name              | Description                                                                   | Required | Properties |
| ----------------- | ----------------------------------------------------------------------------- | -------- | ---------- |
| ignoreNewChannels | If true, summaries will only be returned for channels in the map's entry set. | Yes      |

---

#### setChannelEnabled(enabled)

Summary: Enables/disables the specified channels. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setChannelEnabled_1(channelId,enabled)

Summary: Enables/disables the specified channel.

Parameters:

| Name      | Description                           | Required | Properties |
| --------- | ------------------------------------- | -------- | ---------- |
| channelId | The ID of the channel.                | Yes      |
| enabled   | The enabled flag (true/false) to set. | Yes      |

---

#### setChannelInitialState(initialState)

Summary: Sets the initial state for the specified channels. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setChannelInitialState_1(channelId,initialState)

Summary: Sets the initial state for a single channel.

Parameters:

| Name         | Description                       | Required | Properties |
| ------------ | --------------------------------- | -------- | ---------- |
| channelId    | The ID of the channel.            | Yes      |
| initialState | The initial state of the channel. | Yes      |

---

#### getConnectorNames(channelId)

Summary: Returns all connector names for a channel.

Parameters:

| Name      | Description            | Required | Properties |
| --------- | ---------------------- | -------- | ---------- |
| channelId | The ID of the channel. | Yes      |

---

### Channel Statistics

#### clearAllStatistics()

Summary: Clears all statistics (including lifetime) for all channels/connectors.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getStatisticsPost()

Summary: Returns the Statistics for all channels. This is a POST request alternative to GET /statistics that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### clearStatistics(received,filtered,sent,error)

Summary: Clears the statistics for the given channels and/or connectors.

Parameters:

| Name     | Description                              | Required | Properties |
| -------- | ---------------------------------------- | -------- | ---------- |
| received | If true, received stats will be cleared. | No       |
| filtered | If true, filtered stats will be cleared. | No       |
| sent     | If true, sent stats will be cleared.     | No       |
| error    | If true, error stats will be cleared.    | No       |

---

#### getStatistics(channelId,includeUndeployed,includeMetadataId,excludeMetadataId,aggregateStats)

Summary: Returns the Statistics for all channels.

Parameters:

| Name              | Description                                                                     | Required | Properties |
| ----------------- | ------------------------------------------------------------------------------- | -------- | ---------- |
| channelId         | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No       |
| includeUndeployed | If true, statistics for undeployed channels will also be included.              | No       |
| includeMetadataId | The ids of connectors to include. Cannot include and exclude connectors.        | No       |
| excludeMetadataId | The ids of connectors to exclude. Cannot include and exclude connectors.        | No       |
| aggregateStats    | If true, statistics will be aggregated into one result                          | No       |

---

#### getStatistics_1(channelId)

Summary: Returns the Statistics for the channel with the specified id.

Parameters:

| Name      | Description                                       | Required | Properties |
| --------- | ------------------------------------------------- | -------- | ---------- |
| channelId | The ID of the channel to retrieve statistics for. | Yes      |

---

### Channel Status Operations

#### stopChannel(returnErrors,channelId)

Summary: Stops the channel with the specified ID.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The channel ID to stop.                                             | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### haltChannel(returnErrors,channelId)

Summary: Halts the channel with the specified ID.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The channel ID to halt.                                             | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### pauseChannel(returnErrors,channelId)

Summary: Pauses the channel with the specified ID.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The channel ID to pause.                                            | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### resumeChannel(returnErrors,channelId)

Summary: Resumes the channel with the specified ID.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The channel ID to resume.                                           | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### startConnectors(returnErrors)

Summary: Starts the connectors with the specified channel and metadata IDs.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### getChannelStatusListPost(filter,includeUndeployed)

Summary: Returns all channel dashboard statuses, or multiple statuses by channel ID. This is a POST request alternative to GET /statuses that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name              | Description                                                      | Required | Properties |
| ----------------- | ---------------------------------------------------------------- | -------- | ---------- |
| filter            | The filter string to limit dashboard statuses with.              | No       |
| includeUndeployed | If true, statuses for undeployed channels will also be included. | No       |

---

#### getDashboardChannelInfo(fetchSize,filter)

Summary: Returns a DashboardChannelInfo object containing a partial channel status list and a set of remaining channel IDs.

Parameters:

| Name      | Description                                         | Required | Properties |
| --------- | --------------------------------------------------- | -------- | ---------- |
| fetchSize | Specifies the maximum number of statuses to return. | Yes      |
| filter    | The filter string to limit dashboard statuses with. | No       |

---

#### startChannel(returnErrors,channelId)

Summary: Starts the channel with the specified ID.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The channel ID to start.                                            | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### stopConnectors(returnErrors)

Summary: Stops the connectors with the specified channel and metadata IDs.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### startChannels(returnErrors,channelId)

Summary: Starts the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### stopChannels(returnErrors,channelId)

Summary: Stops the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### pauseChannels(returnErrors,channelId)

Summary: Pauses the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### resumeChannels(returnErrors,channelId)

Summary: Resume the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### startConnector(returnErrors,channelId,metaDataId)

Summary: Starts the connector with the specified channel and metadata ID.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The channel ID to start a connector for.                            | Yes      |
| metaDataId   | The connector metadata ID to start.                                 | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### stopConnector(returnErrors,channelId,metaDataId)

Summary: Stops the connector with the specified channel and metadata ID.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The channel ID to stop a connector for.                             | Yes      |
| metaDataId   | The connector metadata ID to stop.                                  | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### haltChannels(returnErrors,channelId)

Summary: Halts the channels with the specified IDs. ("Try it Out" only works when submitting an array containing one element for this endpoint, but the descriptions are valid. If you want to modify multiple items at once, please use another tool for testing.)

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### getChannelStatus(channelId)

Summary: Returns the dashboard status for a single channel ID.

Parameters:

| Name      | Description                                      | Required | Properties |
| --------- | ------------------------------------------------ | -------- | ---------- |
| channelId | The channel ID to return a dashboard status for. | Yes      |

---

#### getChannelStatusList(channelId,filter,includeUndeployed)

Summary: Returns all channel dashboard statuses, or multiple statuses by channel ID.

Parameters:

| Name              | Description                                                                                 | Required | Properties |
| ----------------- | ------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId         | The channel IDs to return dashboard statuses for. If absent, all statuses will be returned. | No       |
| filter            | The filter string to limit dashboard statuses with.                                         | No       |
| includeUndeployed | If true, statuses for undeployed channels will also be included.                            | No       |

---

### Code Templates

#### getCodeTemplateLibrary(includeCodeTemplates,libraryId)

Summary: Retrieves a single code template library.

Parameters:

| Name                 | Description                                                        | Required | Properties |
| -------------------- | ------------------------------------------------------------------ | -------- | ---------- |
| libraryId            | The ID of the library to retrieve.                                 | Yes      |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No       |

---

#### getCodeTemplateLibraries(libraryId,includeCodeTemplates)

Summary: Retrieves multiple code template libraries by ID, or all libraries if not specified.

Parameters:

| Name                 | Description                                                        | Required | Properties |
| -------------------- | ------------------------------------------------------------------ | -------- | ---------- |
| libraryId            | The ID of the library(s) to retrieve.                              | No       |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No       |

---

#### updateCodeTemplateLibraries(override)

Summary: Replaces all code template libraries.

Parameters:

| Name     | Description                                                                                           | Required | Properties |
| -------- | ----------------------------------------------------------------------------------------------------- | -------- | ---------- |
| override | If true, the code template library will be updated even if a different revision exists on the server. | No       |

---

#### getCodeTemplateLibrariesPost(includeCodeTemplates)

Summary: Retrieves multiple code template libraries by ID, or all libraries if not specified. This is a POST request alternative to GET /codeTemplateLibraries that may be used when there are too many library IDs to include in the query parameters.

Parameters:

| Name                 | Description                                                        | Required | Properties |
| -------------------- | ------------------------------------------------------------------ | -------- | ---------- |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No       |

---

#### getCodeTemplatesPost()

Summary: Retrieves multiple code templates by ID, or all templates if not specified. This is a POST request alternative to GET /codeTemplates that may be used when there are too many code template IDs to include in the query parameters.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getCodeTemplate(codeTemplateId)

Summary: Retrieves a single code template.

Parameters:

| Name           | Description                              | Required | Properties |
| -------------- | ---------------------------------------- | -------- | ---------- |
| codeTemplateId | The ID of the code template to retrieve. | Yes      |

---

#### updateCodeTemplate(override,codeTemplateId,codeTemplate)

Summary: Updates a single code template.

Parameters:

| Name           | Description                                                                                   | Required | Properties                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| codeTemplateId | The ID of the code template.                                                                  | Yes      |
| override       | If true, the code template will be updated even if a different revision exists on the server. | No       |
| codeTemplate   | object                                                                                        | Yes      | {id,name,revision,lastModified,contextSet,properties,type,description,code,purgedProperties,addToScripts,functionDefinition} |

---

#### removeCodeTemplate(codeTemplateId)

Summary: Removes a single code template.

Parameters:

| Name           | Description                  | Required | Properties |
| -------------- | ---------------------------- | -------- | ---------- |
| codeTemplateId | The ID of the code template. | Yes      |

---

#### getCodeTemplates(codeTemplateId)

Summary: Retrieves multiple code templates by ID, or all templates if not specified.

Parameters:

| Name           | Description                                 | Required | Properties |
| -------------- | ------------------------------------------- | -------- | ---------- |
| codeTemplateId | The ID of the code template(s) to retrieve. | No       |

---

#### getCodeTemplateSummary()

Summary: Returns a list of code template summaries, indicating to a client which code templates have changed. If a code template was modified, the entire CodeTemplate object will be returned.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### updateLibrariesAndTemplates(override)

Summary: Updates all libraries and updates/removes selected code templates in one request. ("Try it out" doesn't work for this endpoint, but the descriptions are valid. Please use another tool for testing.)

Parameters:

| Name     | Description                                                                                                | Required | Properties |
| -------- | ---------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| override | If true, the libraries and code templates will be updated even if different revisions exist on the server. | No       |

---

### Server Configuration

#### getResources()

Summary: Returns all resources for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setResources()

Summary: Updates all resources for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getVersion()

Summary: Returns the version of the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getJVMName()

Summary: Returns the name of the JVM running Mirth Connect.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getAbout()

Summary: Returns a map of common information about the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getLicenseInfo()

Summary: Returns a LicenseInfo object with the expiration date and other information.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getGuid()

Summary: Returns a globally unique id.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getProtocolsAndCipherSuites()

Summary: Returns a map containing all supported and enabled TLS protocols and cipher suites.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getStatus()

Summary: Returns the status of the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getServerId()

Summary: Returns the server id.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getUpdateSettings()

Summary: Returns an UpdateSettings object with all update settings.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setUpdateSettings(updateSettings)

Summary: Updates the update settings.

Parameters:

| Name           | Description | Required | Properties                                               |
| -------------- | ----------- | -------- | -------------------------------------------------------- |
| updateSettings | object      | Yes      | {statsEnabled,lastStatsTime,properties,purgedProperties} |

---

#### getConfigurationMap()

Summary: Returns all entries in the configuration map.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setConfigurationMap()

Summary: Updates all entries in the configuration map.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getServerSettings()

Summary: Returns a ServerSettings object with all server settings.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setServerSettings(serverSettings)

Summary: Updates the server configuration settings.

Parameters:

| Name           | Description | Required | Properties                                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serverSettings | object      | Yes      | {environmentName,serverName,clearGlobalMap,queueBufferSize,defaultMetaDataColumns,defaultAdministratorBackgroundColor,smtpHost,smtpPort,smtpTimeout,smtpFrom,smtpSecure,smtpAuth,smtpUsername,smtpPassword,loginNotificationEnabled,loginNotificationMessage,administratorAutoLogoutIntervalEnabled,administratorAutoLogoutIntervalField,properties,purgedProperties} |

---

#### getChannelMetadata()

Summary: Returns all channel metadata for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setChannelMetadata()

Summary: Updates all channel metadata for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getChannelTags()

Summary: Returns a set containing all channel tags for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setChannelTags()

Summary: Updates all channel tags.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getGlobalScripts()

Summary: Returns a map containing all of the global scripts.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setGlobalScripts()

Summary: Updates all of the global scripts.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getChannelDependencies()

Summary: Returns all channel dependencies for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setChannelDependencies()

Summary: Updates all channel dependencies for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getRhinoLanguageVersion()

Summary: Returns the language version that the Rhino engine should use.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getServerTimezone()

Summary: Returns the time zone of the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getServerTime()

Summary: Returns the time of the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getAvailableCharsetEncodings()

Summary: Returns a List of all of the charset encodings supported by the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getPublicServerSettings()

Summary: Returns a PublicServerSettings object containing server settings available to all users.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getEncryptionSettings()

Summary: Returns an EncryptionSettings object with all encryption settings.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getDatabaseDrivers()

Summary: Returns the database driver list.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setDatabaseDrivers()

Summary: Updates the list of database drivers.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getBuildDate()

Summary: Returns the build date of the Mirth Connect server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getServerConfiguration(initialState,pollingOnly,disableAlerts)

Summary: Returns a ServerConfiguration object which contains all of the channels, alerts, configuration map, and properties stored on the Mirth Connect server.

Parameters:

| Name          | Description                                                                                                                                                                   | Required | Properties |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| initialState  | The initial state to set all channels in the configuration to.                                                                                                                | No       |
| pollingOnly   | If true, and the initialState parameter is set, only channels with polling source connectors will have their initial states overwritten in the returned server configuration. | No       |
| disableAlerts | If true, all alerts returned in the server configuration will be disabled.                                                                                                    | No       |

---

#### setServerConfiguration(deploy,overwriteConfigMap,serverConfiguration)

Summary: Updates all of the channels, alerts and properties stored on the Mirth Connect server.

Parameters:

| Name                | Description                                                                         | Required | Properties                                                                                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| deploy              | If true, all enabled channels will be deployed after the configuration is restored. | No       |
| overwriteConfigMap  | If true, overwrite the Configuration Map                                            | No       |
| serverConfiguration | object                                                                              | Yes      | {date,channelGroups,channels,channelTags,users,alerts,codeTemplateLibraries,serverSettings,updateSettings,globalScripts,pluginProperties,resourceProperties,channelDependencies,configurationMap} |

---

#### getPasswordRequirements()

Summary: Returns all password requirements for the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### sendTestEmail_1()

Summary: Sends a test e-mail.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### reloadResource(resourceId)

Summary: Reloads a resource and all libraries associated with it.

Parameters:

| Name       | Description                              | Required | Properties |
| ---------- | ---------------------------------------- | -------- | ---------- |
| resourceId | The unique ID of the resource to reload. | Yes      |

---

### Database Tasks

#### getDatabaseTasks()

Summary: Retrieves all current database tasks.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getDatabaseTask(databaseTaskId)

Summary: Retrieves a single database task.

Parameters:

| Name           | Description                  | Required | Properties |
| -------------- | ---------------------------- | -------- | ---------- |
| databaseTaskId | The ID of the database task. | Yes      |

---

#### runDatabaseTask(databaseTaskId)

Summary: Executes the specified database task.

Parameters:

| Name           | Description                  | Required | Properties |
| -------------- | ---------------------------- | -------- | ---------- |
| databaseTaskId | The ID of the database task. | Yes      |

---

#### cancelDatabaseTask(databaseTaskId)

Summary: Cancels execution of the specified database task.

Parameters:

| Name           | Description                  | Required | Properties |
| -------------- | ---------------------------- | -------- | ---------- |
| databaseTaskId | The ID of the database task. | Yes      |

---

### Channel Deployment Operations

#### deployChannel(returnErrors,debugOptions,channelId)

Summary: Deploys (or redeploys) a single channel.

Parameters:

| Name         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Required | Properties |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The ID of the channel to deploy.                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes      |
| returnErrors | If true, an error response code and the exception will be returned.                                                                                                                                                                                                                                                                                                                                                                                                                | No       |
| debugOptions | If present, the channel will deploy in debug mode and use these options. The input should be a comma-separated list of 't' and 'f' values that indicate whether to debug Deploy/Undeploy/Preprocessor/Postprocessor scripts, Attachment/Batch scripts, Source Connectors scripts, Source Filter/Transformer scripts, Destination Filter/Transformer scripts, Destination Connector scripts, and Destination Response Transformer scripts, in that order. Example: "f,f,f,f,f,f,f") | No       |

---

#### undeployChannel(returnErrors,channelId)

Summary: Undeploys a single channel.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The ID of the channel to undeploy.                                  | Yes      |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### deployChannels(returnErrors)

Summary: Deploys (or redeploys) selected channels.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### undeployChannels(returnErrors)

Summary: Undeploys selected channels.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

#### redeployAllChannels(returnErrors)

Summary: Redeploys all channels.

Parameters:

| Name         | Description                                                         | Required | Properties |
| ------------ | ------------------------------------------------------------------- | -------- | ---------- |
| returnErrors | If true, an error response code and the exception will be returned. | No       |

---

### Events

#### getEvent(eventId)

Summary: Retrieves an event by ID.

Parameters:

| Name    | Description          | Required | Properties |
| ------- | -------------------- | -------- | ---------- |
| eventId | The ID of the event. | Yes      |

---

#### getMaxEventId()

Summary: Returns the maximum event ID currently in the database.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getEvents( {maxEventId,minEventId,level,startDate,endDate,name,outcome,userId,attributeSearch,ipAddress,serverId,offset,limit})

Summary: Search for events by specific filter criteria.

Parameters:

| Name            | Description                                                                | Required | Properties |
| --------------- | -------------------------------------------------------------------------- | -------- | ---------- |
| maxEventId      | The maximum event ID to query.                                             | No       |
| minEventId      | The minimum event ID to query.                                             | No       |
| level           | The type of events to query.                                               | No       |
| startDate       | The earliest event date to query by. Example: 1985-10-26T09:00:00.000-0700 | No       |
| endDate         | The latest event date to query by. Example: 2015-10-21T07:28:00.000-0700   | No       |
| name            | Searches the event name for this string.                                   | No       |
| outcome         | Searches on whether the event outcome was successful or not.               | No       |
| userId          | The user ID to query events by.                                            | No       |
| attributeSearch | Searches the attributes for this string.                                   | No       |
| ipAddress       | The IP address that originated the event.                                  | No       |
| serverId        | The ID of the server that the event was created from.                      | No       |
| offset          | Used for pagination, determines where to start in the search results.      | No       |
| limit           | Used for pagination, determines the maximum number of results to return.   | No       |

---

#### removeAllEvents()

Summary: Remove all events.

Parameters:

| Name   | Description                                                                                                | Required | Properties |
| ------ | ---------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| export | If true, messages will be exported into the application data directory on the server before being removed. | No       |

---

#### getEvents_1(offset,limit,eventFilter)

Summary: Search for events by specific filter criteria.

Parameters:

| Name        | Description                                                              | Required | Properties                                                                                                 |
| ----------- | ------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------- |
| offset      | Used for pagination, determines where to start in the search results.    | No       |
| limit       | Used for pagination, determines the maximum number of results to return. | No       |
| eventFilter | object                                                                   | Yes      | {maxEventId,minEventId,id,levels,startDate,endDate,name,outcome,userId,attributeSearch,ipAddress,serverId} |

---

#### getEventCount(eventFilter)

Summary: Count number for events by specific filter criteria.

Parameters:

| Name        | Description | Required | Properties                                                                                                 |
| ----------- | ----------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| eventFilter | object      | Yes      | {maxEventId,minEventId,id,levels,startDate,endDate,name,outcome,userId,attributeSearch,ipAddress,serverId} |

---

#### getEventCount_1( {maxEventId,minEventId,level,startDate,endDate,name,outcome,userId,attributeSearch,ipAddress,serverId})

Summary: Count number for events by specific filter criteria.

Parameters:

| Name            | Description                                                                | Required | Properties |
| --------------- | -------------------------------------------------------------------------- | -------- | ---------- |
| maxEventId      | The maximum event ID to query.                                             | No       |
| minEventId      | The minimum event ID to query.                                             | No       |
| level           | The type of events to query.                                               | No       |
| startDate       | The earliest event date to query by. Example: 1985-10-26T09:00:00.000-0700 | No       |
| endDate         | The latest event date to query by. Example: 2015-10-21T07:28:00.000-0700   | No       |
| name            | Searches the event name for this string.                                   | No       |
| outcome         | Searches on whether the event outcome was successful or not.               | No       |
| userId          | The user ID to query events by.                                            | No       |
| attributeSearch | Searches the attributes for this string.                                   | No       |
| ipAddress       | The IP address that originated the event.                                  | No       |
| serverId        | The ID of the server that the event was created from.                      | No       |

---

#### exportAllEvents()

Summary: Exports all events to the application data directory on the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

### Extensions

#### installExtension()

Summary: Installs an extension.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### uninstallExtension()

Summary: Uninstalls an extension.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getExtensionMetaData(extensionName)

Summary: Returns extension metadata by name.

Parameters:

| Name          | Description                            | Required | Properties |
| ------------- | -------------------------------------- | -------- | ---------- |
| extensionName | The name of the extension to retrieve. | Yes      |

---

#### getPluginMetaData()

Summary: Returns all active plugin metadata.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getConnectorMetaData()

Summary: Returns all active connector metadata.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getPluginProperties(propertyKeys,extensionName)

Summary: Returns filtered properties for a specified extension.

Parameters:

| Name          | Description                            | Required | Properties |
| ------------- | -------------------------------------- | -------- | ---------- |
| extensionName | The name of the extension to retrieve. | Yes      |
| propertyKeys  | The set of properties to retrieve.     | No       |

---

#### setPluginProperties(mergeProperties,extensionName)

Summary: Sets properties for a specified extension.

Parameters:

| Name            | Description                                       | Required | Properties |
| --------------- | ------------------------------------------------- | -------- | ---------- |
| extensionName   | undefined                                         | Yes      |
| mergeProperties | Merge or replace properties. Defaults to replace. | No       |

---

#### isExtensionEnabled(extensionName)

Summary: Returns the enabled status of an extension.

Parameters:

| Name          | Description                            | Required | Properties |
| ------------- | -------------------------------------- | -------- | ---------- |
| extensionName | The name of the extension to retrieve. | Yes      |

---

#### setExtensionEnabled(enabled,extensionName)

Summary: Enables or disables an extension.

Parameters:

| Name          | Description                            | Required | Properties |
| ------------- | -------------------------------------- | -------- | ---------- |
| extensionName | The name of the extension to retrieve. | Yes      |
| enabled       | The new enabled status to set.         | Yes      |

---

### Messages

#### getMessages(includeContent,offset,limit,channelId,messageFilter)

Summary: Search for messages by specific filter criteria.

Parameters:

| Name           | Description                                                              | Required | Properties                                                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId      | The ID of the channel.                                                   | Yes      |
| includeContent | If true, message content will be returned with the results.              | No       |
| offset         | Used for pagination, determines where to start in the search results.    | No       |
| limit          | Used for pagination, determines the maximum number of results to return. | No       |
| messageFilter  | object                                                                   | Yes      | {maxMessageId,minMessageId,originalIdUpper,originalIdLower,importIdUpper,importIdLower,startDate,endDate,textSearch,textSearchRegex,statuses,includedMetaDataIds,excludedMetaDataIds,serverId,contentSearch,metaDataSearch,textSearchMetaDataColumns,sendAttemptsLower,sendAttemptsUpper,attachment,error} |

---

#### getMessages_1( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,includeContent,offset,limit,channelId})

Summary: Search for messages by specific filter criteria.

Parameters:

| Name                             | Description                                                                                                                                                                                                                                                 | Required | Properties |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId                        | The ID of the channel.                                                                                                                                                                                                                                      | Yes      |
| minMessageId                     | The minimum message ID to query.                                                                                                                                                                                                                            | No       |
| maxMessageId                     | The maximum message ID to query.                                                                                                                                                                                                                            | No       |
| minOriginalId                    | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| maxOriginalId                    | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| minImportId                      | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| maxImportId                      | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| startDate                        | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700                                                                                                                                                                      | No       |
| endDate                          | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700                                                                                                                                                                        | No       |
| textSearch                       | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable.                               | No       |
| textSearchRegex                  | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases.                                                                                                         | No       |
| status                           | Determines which message statuses to query by.                                                                                                                                                                                                              | No       |
| includedMetaDataId               | If present, only connector metadata IDs in this list will be queried.                                                                                                                                                                                       | No       |
| excludedMetaDataId               | If present, connector metadata IDs in this list will not be queried.                                                                                                                                                                                        | No       |
| serverId                         | The server ID associated with messages.                                                                                                                                                                                                                     | No       |
| rawContentSearch                 | Searches the raw content of messages.                                                                                                                                                                                                                       | No       |
| processedRawContentSearch        | Searches the processed raw content of messages.                                                                                                                                                                                                             | No       |
| transformedContentSearch         | Searches the transformed content of messages.                                                                                                                                                                                                               | No       |
| encodedContentSearch             | Searches the encoded content of messages.                                                                                                                                                                                                                   | No       |
| sentContentSearch                | Searches the sent content of messages.                                                                                                                                                                                                                      | No       |
| responseContentSearch            | Searches the response content of messages.                                                                                                                                                                                                                  | No       |
| responseTransformedContentSearch | Searches the response transformed content of messages.                                                                                                                                                                                                      | No       |
| processedResponseContentSearch   | Searches the processed response content of messages.                                                                                                                                                                                                        | No       |
| connectorMapContentSearch        | Searches the connector map content of messages.                                                                                                                                                                                                             | No       |
| channelMapContentSearch          | Searches the channel map content of messages.                                                                                                                                                                                                               | No       |
| sourceMapContentSearch           | Searches the source map content of messages.                                                                                                                                                                                                                | No       |
| responseMapContentSearch         | Searches the response map content of messages.                                                                                                                                                                                                              | No       |
| processingErrorContentSearch     | Searches the processing error content of messages.                                                                                                                                                                                                          | No       |
| postprocessorErrorContentSearch  | Searches the postprocessor error content of messages.                                                                                                                                                                                                       | No       |
| responseErrorContentSearch       | Searches the response error content of messages.                                                                                                                                                                                                            | No       |
| metaDataSearch                   | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No       |
| metaDataCaseInsensitiveSearch    | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value.                                                                                                                                          | No       |
| textSearchMetaDataColumn         | When using a text search, these custom metadata columns will also be searched.                                                                                                                                                                              | No       |
| minSendAttempts                  | The minimum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| maxSendAttempts                  | The maximum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| attachment                       | If true, only messages with attachments are included in the results.                                                                                                                                                                                        | No       |
| error                            | If true, only messages with errors are included in the results.                                                                                                                                                                                             | No       |
| includeContent                   | If true, message content will be returned with the results.                                                                                                                                                                                                 | No       |
| offset                           | Used for pagination, determines where to start in the search results.                                                                                                                                                                                       | No       |
| limit                            | Used for pagination, determines the maximum number of results to return.                                                                                                                                                                                    | No       |

---

#### processMessage( {destinationMetaDataId,sourceMapEntry,overwrite,imported,originalMessageId,channelId,textData})

Summary: Processes a new message through a channel.

Parameters:

| Name                  | Description                                                                                                                            | Required | Properties |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId             | The ID of the channel.                                                                                                                 | Yes      |
| destinationMetaDataId | Indicates which destinations to send the message to.                                                                                   | No       |
| sourceMapEntry        | These entries will be injected into the source map for the message. Value should be in the format: key=value                           | No       |
| overwrite             | If true and a valid original message ID is given, this message will overwrite the existing one.                                        | No       |
| imported              | If true, marks this message as being imported. If the message is overwriting an existing one, then statistics will not be decremented. | No       |
| originalMessageId     | The original message ID this message is associated with.                                                                               | No       |
| textData              | string                                                                                                                                 | Yes      |            |

---

#### removeMessages( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,channelId})

Summary: Remove messages by specific filter criteria.

Parameters:

| Name                             | Description                                                                                                                                                                                                                                                 | Required | Properties |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId                        | The ID of the channel.                                                                                                                                                                                                                                      | Yes      |
| minMessageId                     | The minimum message ID to query.                                                                                                                                                                                                                            | No       |
| maxMessageId                     | The maximum message ID to query.                                                                                                                                                                                                                            | No       |
| minOriginalId                    | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| maxOriginalId                    | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| minImportId                      | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| maxImportId                      | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| startDate                        | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700                                                                                                                                                                      | No       |
| endDate                          | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700                                                                                                                                                                        | No       |
| textSearch                       | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable.                               | No       |
| textSearchRegex                  | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases.                                                                                                         | No       |
| status                           | Determines which message statuses to query by.                                                                                                                                                                                                              | No       |
| includedMetaDataId               | If present, only connector metadata IDs in this list will be queried.                                                                                                                                                                                       | No       |
| excludedMetaDataId               | If present, connector metadata IDs in this list will not be queried.                                                                                                                                                                                        | No       |
| serverId                         | The server ID associated with messages.                                                                                                                                                                                                                     | No       |
| rawContentSearch                 | Searches the raw content of messages.                                                                                                                                                                                                                       | No       |
| processedRawContentSearch        | Searches the processed raw content of messages.                                                                                                                                                                                                             | No       |
| transformedContentSearch         | Searches the transformed content of messages.                                                                                                                                                                                                               | No       |
| encodedContentSearch             | Searches the encoded content of messages.                                                                                                                                                                                                                   | No       |
| sentContentSearch                | Searches the sent content of messages.                                                                                                                                                                                                                      | No       |
| responseContentSearch            | Searches the response content of messages.                                                                                                                                                                                                                  | No       |
| responseTransformedContentSearch | Searches the response transformed content of messages.                                                                                                                                                                                                      | No       |
| processedResponseContentSearch   | Searches the processed response content of messages.                                                                                                                                                                                                        | No       |
| connectorMapContentSearch        | Searches the connector map content of messages.                                                                                                                                                                                                             | No       |
| channelMapContentSearch          | Searches the channel map content of messages.                                                                                                                                                                                                               | No       |
| sourceMapContentSearch           | Searches the source map content of messages.                                                                                                                                                                                                                | No       |
| responseMapContentSearch         | Searches the response map content of messages.                                                                                                                                                                                                              | No       |
| processingErrorContentSearch     | Searches the processing error content of messages.                                                                                                                                                                                                          | No       |
| postprocessorErrorContentSearch  | Searches the postprocessor error content of messages.                                                                                                                                                                                                       | No       |
| responseErrorContentSearch       | Searches the response error content of messages.                                                                                                                                                                                                            | No       |
| metaDataSearch                   | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No       |
| metaDataCaseInsensitiveSearch    | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value.                                                                                                                                          | No       |
| textSearchMetaDataColumn         | When using a text search, these custom metadata columns will also be searched.                                                                                                                                                                              | No       |
| minSendAttempts                  | The minimum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| maxSendAttempts                  | The maximum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| attachment                       | If true, only messages with attachments are included in the results.                                                                                                                                                                                        | No       |
| error                            | If true, only messages with errors are included in the results.                                                                                                                                                                                             | No       |

---

#### processMessage_1(channelId,rawMessage)

Summary: Processes a new message through a channel, using the RawMessage object.

Parameters:

| Name       | Description            | Required | Properties                                                                                                  |
| ---------- | ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| channelId  | The ID of the channel. | Yes      |
| rawMessage | object                 | Yes      | {overwrite,imported,originalMessageId,rawData,rawBytes,destinationMetaDataIds,sourceMap,binary,attachments} |

---

#### getAttachmentsByMessageId(includeContent,channelId,messageId)

Summary: Retrieve a list of attachments by message ID.

Parameters:

| Name           | Description                                                 | Required | Properties |
| -------------- | ----------------------------------------------------------- | -------- | ---------- |
| channelId      | The ID of the channel.                                      | Yes      |
| messageId      | The ID of the message.                                      | Yes      |
| includeContent | If false, only the attachment ID and type will be returned. | No       |

---

#### getDICOMMessage(channelId,messageId,connectorMessage)

Summary: Given a ConnectorMessage object, reattaches any DICOM attachment data and returns the raw Base64 encoded message data.

Parameters:

| Name             | Description            | Required | Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| channelId        | The ID of the channel. | Yes      |
| messageId        | The ID of the message. | Yes      |
| connectorMessage | object                 | Yes      | {messageId,metaDataId,channelId,channelName,connectorName,serverId,receivedDate,status,raw,processedRaw,transformed,encoded,sent,response,responseTransformed,processedResponse,sourceMapContent,connectorMapContent,channelMapContent,responseMapContent,metaDataMap,processingErrorContent,postProcessorErrorContent,responseErrorContent,errorCode,sendAttempts,sendDate,responseDate,chainId,orderId,sentProperties,queueBucket,attemptedFirst,dispatcherId,responseMap,connectorMap,channelMap,responseError,processingError,sourceMap,messageContent,postProcessorError} |

---

#### getMessageCount(channelId,messageFilter)

Summary: Count number for messages by specific filter criteria.

Parameters:

| Name          | Description            | Required | Properties                                                                                                                                                                                                                                                                                                 |
| ------------- | ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId     | The ID of the channel. | Yes      |
| messageFilter | object                 | Yes      | {maxMessageId,minMessageId,originalIdUpper,originalIdLower,importIdUpper,importIdLower,startDate,endDate,textSearch,textSearchRegex,statuses,includedMetaDataIds,excludedMetaDataIds,serverId,contentSearch,metaDataSearch,textSearchMetaDataColumns,sendAttemptsLower,sendAttemptsUpper,attachment,error} |

---

#### getMessageCount_1( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,channelId})

Summary: Count number for messages by specific filter criteria.

Parameters:

| Name                             | Description                                                                                                                                                                                                                                                 | Required | Properties |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId                        | The ID of the channel.                                                                                                                                                                                                                                      | Yes      |
| minMessageId                     | The minimum message ID to query.                                                                                                                                                                                                                            | No       |
| maxMessageId                     | The maximum message ID to query.                                                                                                                                                                                                                            | No       |
| minOriginalId                    | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| maxOriginalId                    | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| minImportId                      | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| maxImportId                      | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| startDate                        | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700                                                                                                                                                                      | No       |
| endDate                          | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700                                                                                                                                                                        | No       |
| textSearch                       | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable.                               | No       |
| textSearchRegex                  | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases.                                                                                                         | No       |
| status                           | Determines which message statuses to query by.                                                                                                                                                                                                              | No       |
| includedMetaDataId               | If present, only connector metadata IDs in this list will be queried.                                                                                                                                                                                       | No       |
| excludedMetaDataId               | If present, connector metadata IDs in this list will not be queried.                                                                                                                                                                                        | No       |
| serverId                         | The server ID associated with messages.                                                                                                                                                                                                                     | No       |
| rawContentSearch                 | Searches the raw content of messages.                                                                                                                                                                                                                       | No       |
| processedRawContentSearch        | Searches the processed raw content of messages.                                                                                                                                                                                                             | No       |
| transformedContentSearch         | Searches the transformed content of messages.                                                                                                                                                                                                               | No       |
| encodedContentSearch             | Searches the encoded content of messages.                                                                                                                                                                                                                   | No       |
| sentContentSearch                | Searches the sent content of messages.                                                                                                                                                                                                                      | No       |
| responseContentSearch            | Searches the response content of messages.                                                                                                                                                                                                                  | No       |
| responseTransformedContentSearch | Searches the response transformed content of messages.                                                                                                                                                                                                      | No       |
| processedResponseContentSearch   | Searches the processed response content of messages.                                                                                                                                                                                                        | No       |
| connectorMapContentSearch        | Searches the connector map content of messages.                                                                                                                                                                                                             | No       |
| channelMapContentSearch          | Searches the channel map content of messages.                                                                                                                                                                                                               | No       |
| sourceMapContentSearch           | Searches the source map content of messages.                                                                                                                                                                                                                | No       |
| responseMapContentSearch         | Searches the response map content of messages.                                                                                                                                                                                                              | No       |
| processingErrorContentSearch     | Searches the processing error content of messages.                                                                                                                                                                                                          | No       |
| postprocessorErrorContentSearch  | Searches the postprocessor error content of messages.                                                                                                                                                                                                       | No       |
| responseErrorContentSearch       | Searches the response error content of messages.                                                                                                                                                                                                            | No       |
| metaDataSearch                   | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No       |
| metaDataCaseInsensitiveSearch    | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value.                                                                                                                                          | No       |
| textSearchMetaDataColumn         | When using a text search, these custom metadata columns will also be searched.                                                                                                                                                                              | No       |
| minSendAttempts                  | The minimum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| maxSendAttempts                  | The maximum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| attachment                       | If true, only messages with attachments are included in the results.                                                                                                                                                                                        | No       |
| error                            | If true, only messages with errors are included in the results.                                                                                                                                                                                             | No       |

---

#### reprocessMessages(replace,filterDestinations,metaDataId,channelId,messageFilter)

Summary: Reprocesses messages through a channel filtering with a MessageFilter.

Parameters:

| Name               | Description                                                                                                      | Required | Properties                                                                                                                                                                                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId          | The ID of the channel.                                                                                           | Yes      |
| replace            | If true, the message will overwrite the current one                                                              | No       |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No       |
| metaDataId         | Indicates which destinations to send the message to.                                                             | No       |
| messageFilter      | object                                                                                                           | Yes      | {maxMessageId,minMessageId,originalIdUpper,originalIdLower,importIdUpper,importIdLower,startDate,endDate,textSearch,textSearchRegex,statuses,includedMetaDataIds,excludedMetaDataIds,serverId,contentSearch,metaDataSearch,textSearchMetaDataColumns,sendAttemptsLower,sendAttemptsUpper,attachment,error} |

---

#### reprocessMessages_1( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,replace,filterDestinations,metaDataId,channelId})

Summary: Reprocesses messages through a channel by specific filter criteria.

Parameters:

| Name                             | Description                                                                                                                                                                                                                                                 | Required | Properties |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId                        | The ID of the channel.                                                                                                                                                                                                                                      | Yes      |
| minMessageId                     | The minimum message ID to query.                                                                                                                                                                                                                            | No       |
| maxMessageId                     | The maximum message ID to query.                                                                                                                                                                                                                            | No       |
| minOriginalId                    | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| maxOriginalId                    | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| minImportId                      | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| maxImportId                      | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| startDate                        | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700                                                                                                                                                                      | No       |
| endDate                          | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700                                                                                                                                                                        | No       |
| textSearch                       | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable.                               | No       |
| textSearchRegex                  | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases.                                                                                                         | No       |
| status                           | Determines which message statuses to query by.                                                                                                                                                                                                              | No       |
| includedMetaDataId               | If present, only connector metadata IDs in this list will be queried.                                                                                                                                                                                       | No       |
| excludedMetaDataId               | If present, connector metadata IDs in this list will not be queried.                                                                                                                                                                                        | No       |
| serverId                         | The server ID associated with messages.                                                                                                                                                                                                                     | No       |
| rawContentSearch                 | Searches the raw content of messages.                                                                                                                                                                                                                       | No       |
| processedRawContentSearch        | Searches the processed raw content of messages.                                                                                                                                                                                                             | No       |
| transformedContentSearch         | Searches the transformed content of messages.                                                                                                                                                                                                               | No       |
| encodedContentSearch             | Searches the encoded content of messages.                                                                                                                                                                                                                   | No       |
| sentContentSearch                | Searches the sent content of messages.                                                                                                                                                                                                                      | No       |
| responseContentSearch            | Searches the response content of messages.                                                                                                                                                                                                                  | No       |
| responseTransformedContentSearch | Searches the response transformed content of messages.                                                                                                                                                                                                      | No       |
| processedResponseContentSearch   | Searches the processed response content of messages.                                                                                                                                                                                                        | No       |
| connectorMapContentSearch        | Searches the connector map content of messages.                                                                                                                                                                                                             | No       |
| channelMapContentSearch          | Searches the channel map content of messages.                                                                                                                                                                                                               | No       |
| sourceMapContentSearch           | Searches the source map content of messages.                                                                                                                                                                                                                | No       |
| responseMapContentSearch         | Searches the response map content of messages.                                                                                                                                                                                                              | No       |
| processingErrorContentSearch     | Searches the processing error content of messages.                                                                                                                                                                                                          | No       |
| postprocessorErrorContentSearch  | Searches the postprocessor error content of messages.                                                                                                                                                                                                       | No       |
| responseErrorContentSearch       | Searches the response error content of messages.                                                                                                                                                                                                            | No       |
| metaDataSearch                   | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No       |
| metaDataCaseInsensitiveSearch    | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value.                                                                                                                                          | No       |
| textSearchMetaDataColumn         | When using a text search, these custom metadata columns will also be searched.                                                                                                                                                                              | No       |
| minSendAttempts                  | The minimum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| maxSendAttempts                  | The maximum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| attachment                       | If true, only messages with attachments are included in the results.                                                                                                                                                                                        | No       |
| error                            | If true, only messages with errors are included in the results.                                                                                                                                                                                             | No       |
| replace                          | If true, the message will overwrite the current one                                                                                                                                                                                                         | No       |
| filterDestinations               | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through.                                                                                                                                            | No       |
| metaDataId                       | Indicates which destinations to send the message to.                                                                                                                                                                                                        | No       |

---

#### reprocessMessage(replace,filterDestinations,metaDataId,channelId,messageId)

Summary: Reprocesses and overwrites a single message.

Parameters:

| Name               | Description                                                                                                      | Required | Properties |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId          | The ID of the channel.                                                                                           | Yes      |
| messageId          | The ID of the message.                                                                                           | Yes      |
| replace            | If true, the message will overwrite the current one                                                              | No       |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No       |
| metaDataId         | Indicates which destinations to send the message to.                                                             | No       |

---

#### getMessageContent(metaDataId,channelId,messageId)

Summary: Retrieve a message by ID.

Parameters:

| Name       | Description                         | Required | Properties |
| ---------- | ----------------------------------- | -------- | ---------- |
| channelId  | The ID of the channel.              | Yes      |
| messageId  | The ID of the message.              | Yes      |
| metaDataId | The metadata IDs of the connectors. | No       |

---

#### removeMessage(metaDataId,patient_id,channelId,messageId)

Summary: Remove a single message by ID.

Parameters:

| Name       | Description                                                                                                                   | Required | Properties |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId  | The ID of the channel.                                                                                                        | Yes      |
| messageId  | The ID of the message.                                                                                                        | Yes      |
| metaDataId | If present, only the specific connector message will be removed. If the metadata ID is 0, the entire message will be removed. | No       |
| patient_id | The patient ID of the channel message.                                                                                        | No       |

---

#### removeAllMessagesPost(restartRunningChannels,clearStatistics)

Summary: Removes all messages for multiple specified channels. This is a POST request alternative to DELETE /\_removeAllMessages that may be used when there are too many channel IDs to include in the query parameters.

Parameters:

| Name                   | Description                                                                                                                                                  | Required | Properties |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No       |
| clearStatistics        | If true, message statistics will also be cleared.                                                                                                            | No       |

---

#### importMessage(channelId,message)

Summary: Imports a Message object into a channel. The message will not actually be processed through the channel, only imported.

Parameters:

| Name      | Description            | Required | Properties                                                                                                                                     |
| --------- | ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId | The ID of the channel. | Yes      |
| message   | object                 | Yes      | {messageId,serverId,channelId,receivedDate,processed,originalId,importId,importChannelId,attachments,connectorMessages,mergedConnectorMessage} |

---

#### importMessagesServer(includeSubfolders,channelId,textData)

Summary: Imports messages into a channel from a path accessible by the server. The messages will not actually be processed through the channel, only imported.

Parameters:

| Name              | Description                                                         | Required | Properties |
| ----------------- | ------------------------------------------------------------------- | -------- | ---------- |
| channelId         | The ID of the channel.                                              | Yes      |
| includeSubfolders | If true, sub-folders will also be scanned recursively for messages. | No       |
| textData          | string                                                              | Yes      |            |

---

#### exportMessagesServer(pageSize,channelId)

Summary: Exports messages into a specific directory path accessible by the server. ("Try it out" doesn't work for this endpoint, but the descriptions are valid. Please use another tool for testing.)

Parameters:

| Name      | Description                                                    | Required | Properties |
| --------- | -------------------------------------------------------------- | -------- | ---------- |
| channelId | The ID of the channel.                                         | Yes      |
| pageSize  | The maximum number of messages that will be queried at a time. | No       |

---

#### exportMessagesServer_1( {minMessageId,maxMessageId,minOriginalId,maxOriginalId,minImportId,maxImportId,startDate,endDate,textSearch,textSearchRegex,status,includedMetaDataId,excludedMetaDataId,serverId,rawContentSearch,processedRawContentSearch,transformedContentSearch,encodedContentSearch,sentContentSearch,responseContentSearch,responseTransformedContentSearch,processedResponseContentSearch,connectorMapContentSearch,channelMapContentSearch,sourceMapContentSearch,responseMapContentSearch,processingErrorContentSearch,postprocessorErrorContentSearch,responseErrorContentSearch,metaDataSearch,metaDataCaseInsensitiveSearch,textSearchMetaDataColumn,minSendAttempts,maxSendAttempts,attachment,error,pageSize,contentType,destinationContent,encrypt,includeAttachments,baseFolder,rootFolder,filePattern,archiveFileName,archiveFormat,compressFormat,password,encryptionType,channelId})

Summary: Exports messages into a specific directory path accessible by the server.

Parameters:

| Name                             | Description                                                                                                                                                                                                                                                 | Required | Properties |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId                        | The ID of the channel.                                                                                                                                                                                                                                      | Yes      |
| minMessageId                     | The minimum message ID to query.                                                                                                                                                                                                                            | No       |
| maxMessageId                     | The maximum message ID to query.                                                                                                                                                                                                                            | No       |
| minOriginalId                    | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| maxOriginalId                    | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID.                                                                                                                                        | No       |
| minImportId                      | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| maxImportId                      | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value.                                                                                                                            | No       |
| startDate                        | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700                                                                                                                                                                      | No       |
| endDate                          | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700                                                                                                                                                                        | No       |
| textSearch                       | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable.                               | No       |
| textSearchRegex                  | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases.                                                                                                         | No       |
| status                           | Determines which message statuses to query by.                                                                                                                                                                                                              | No       |
| includedMetaDataId               | If present, only connector metadata IDs in this list will be queried.                                                                                                                                                                                       | No       |
| excludedMetaDataId               | If present, connector metadata IDs in this list will not be queried.                                                                                                                                                                                        | No       |
| serverId                         | The server ID associated with messages.                                                                                                                                                                                                                     | No       |
| rawContentSearch                 | Searches the raw content of messages.                                                                                                                                                                                                                       | No       |
| processedRawContentSearch        | Searches the processed raw content of messages.                                                                                                                                                                                                             | No       |
| transformedContentSearch         | Searches the transformed content of messages.                                                                                                                                                                                                               | No       |
| encodedContentSearch             | Searches the encoded content of messages.                                                                                                                                                                                                                   | No       |
| sentContentSearch                | Searches the sent content of messages.                                                                                                                                                                                                                      | No       |
| responseContentSearch            | Searches the response content of messages.                                                                                                                                                                                                                  | No       |
| responseTransformedContentSearch | Searches the response transformed content of messages.                                                                                                                                                                                                      | No       |
| processedResponseContentSearch   | Searches the processed response content of messages.                                                                                                                                                                                                        | No       |
| connectorMapContentSearch        | Searches the connector map content of messages.                                                                                                                                                                                                             | No       |
| channelMapContentSearch          | Searches the channel map content of messages.                                                                                                                                                                                                               | No       |
| sourceMapContentSearch           | Searches the source map content of messages.                                                                                                                                                                                                                | No       |
| responseMapContentSearch         | Searches the response map content of messages.                                                                                                                                                                                                              | No       |
| processingErrorContentSearch     | Searches the processing error content of messages.                                                                                                                                                                                                          | No       |
| postprocessorErrorContentSearch  | Searches the postprocessor error content of messages.                                                                                                                                                                                                       | No       |
| responseErrorContentSearch       | Searches the response error content of messages.                                                                                                                                                                                                            | No       |
| metaDataSearch                   | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No       |
| metaDataCaseInsensitiveSearch    | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value.                                                                                                                                          | No       |
| textSearchMetaDataColumn         | When using a text search, these custom metadata columns will also be searched.                                                                                                                                                                              | No       |
| minSendAttempts                  | The minimum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| maxSendAttempts                  | The maximum number of send attempts for connector messages.                                                                                                                                                                                                 | No       |
| attachment                       | If true, only messages with attachments are included in the results.                                                                                                                                                                                        | No       |
| error                            | If true, only messages with errors are included in the results.                                                                                                                                                                                             | No       |
| pageSize                         | The maximum number of messages that will be queried at a time.                                                                                                                                                                                              | No       |
| contentType                      | The ContentType that will be extracted from the message for writing. If null or not provided, the entire message will be written in serialized format.                                                                                                      | No       |
| destinationContent               | If true, the content to write will be extracted from the destination message(s), rather than the source message.                                                                                                                                            | No       |
| encrypt                          | If true, message content will be encrypted before writing.                                                                                                                                                                                                  | No       |
| includeAttachments               | Determines whether attachments will be included with messages.                                                                                                                                                                                              | No       |
| baseFolder                       | The base directory to use when resolving relative paths in the root folder.                                                                                                                                                                                 | No       |
| rootFolder                       | The root folder to contain the written messages/sub-folders.                                                                                                                                                                                                | No       |
| filePattern                      | A string defining the folder/filename(s) for writing messages. It may contain variables to be replaced.                                                                                                                                                     | No       |
| archiveFileName                  | The file name to use for archive exports.                                                                                                                                                                                                                   | No       |
| archiveFormat                    | The archiver format to use to archive messages/folders that are written to the root folder. Valid values: zip, tar                                                                                                                                          | No       |
| compressFormat                   | The compressor format to use to compress the archive file. Only valid when using the TAR archive format. Valid values: gz, bzip2                                                                                                                            | No       |
| password                         | The password used to protect the archive file. Only valid when using the ZIP archive format.                                                                                                                                                                | No       |
| encryptionType                   | The algorithm used to encrypt the password-protected archive file. Only valid when using the ZIP archive format. Valid values: STANDARD, AES128, AES256                                                                                                     | No       |

---

#### exportAttachmentServer(binary,channelId,messageId,attachmentId)

Summary: Exports a message attachment into a specific file path accessible by the server.

Parameters:

| Name         | Description                                                                                  | Required | Properties |
| ------------ | -------------------------------------------------------------------------------------------- | -------- | ---------- |
| channelId    | The ID of the channel.                                                                       | Yes      |
| messageId    | The ID of the message.                                                                       | Yes      |
| attachmentId | The ID of the attachment.                                                                    | Yes      |
| binary       | Indicates that the attachment is binary and should be Base64 decoded before writing to file. | No       |

---

#### auditAccessedPHIMessage()

Summary: Audit that the user has accessed a channel message that contains PHI.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### auditQueriedPHIMessage()

Summary: Audit that the user has queried the channel messages panel that contains PHI.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### removeMessages_1(channelId,messageFilter)

Summary: Remove messages by specific filter criteria.

Parameters:

| Name          | Description            | Required | Properties                                                                                                                                                                                                                                                                                                 |
| ------------- | ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId     | The ID of the channel. | Yes      |
| messageFilter | object                 | Yes      | {maxMessageId,minMessageId,originalIdUpper,originalIdLower,importIdUpper,importIdLower,startDate,endDate,textSearch,textSearchRegex,statuses,includedMetaDataIds,excludedMetaDataIds,serverId,contentSearch,metaDataSearch,textSearchMetaDataColumns,sendAttemptsLower,sendAttemptsUpper,attachment,error} |

---

#### removeAllMessages(restartRunningChannels,clearStatistics,channelId)

Summary: Removes all messages for the specified channel.

Parameters:

| Name                   | Description                                                                                                                                                  | Required | Properties |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| channelId              | The ID of the channel.                                                                                                                                       | Yes      |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No       |
| clearStatistics        | If true, message statistics will also be cleared.                                                                                                            | No       |

---

#### removeAllMessages_1(channelId,restartRunningChannels,clearStatistics)

Summary: Removes all messages for multiple specified channels.

Parameters:

| Name                   | Description                                                                                                                                                  | Required | Properties |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| channelId              | The IDs of the channels.                                                                                                                                     | Yes      |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No       |
| clearStatistics        | If true, message statistics will also be cleared.                                                                                                            | No       |

---

#### getMaxMessageId(channelId)

Summary: Returns the maximum message ID for the given channel.

Parameters:

| Name      | Description            | Required | Properties |
| --------- | ---------------------- | -------- | ---------- |
| channelId | The ID of the channel. | Yes      |

---

#### getAttachment(channelId,messageId,attachmentId)

Summary: Retrieve a message attachment by ID.

Parameters:

| Name         | Description               | Required | Properties |
| ------------ | ------------------------- | -------- | ---------- |
| channelId    | The ID of the channel.    | Yes      |
| messageId    | The ID of the message.    | Yes      |
| attachmentId | The ID of the attachment. | Yes      |

---

### System Information and Statistics

#### getStats()

Summary: Returns statistics for the underlying system.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getInfo()

Summary: Returns information about the underlying system.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

### Usage Data

#### getUsageData()

Summary: Generates usage document using data from both the client and server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

### Users

#### login(password,username)

Summary: Logs in to the Mirth Connect server using the specified name and password.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### logout()

Summary: Logs out of the server.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getCurrentUser()

Summary: Returns the current logged in user.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### setUserNotificationAcknowledged(userId)

Summary: User notification has been acknowledged.

Parameters:

| Name   | Description                | Required | Properties |
| ------ | -------------------------- | -------- | ---------- |
| userId | The unique ID of the user. | Yes      |

---

#### checkUserPassword(textData)

Summary: Checks the password against the configured password policies.

Parameters:

| Name     | Description | Required | Properties |
| -------- | ----------- | -------- | ---------- |
| textData | string      | Yes      |            |

---

#### updateUserPassword(userId,textData)

Summary: Updates a user's password.

Parameters:

| Name     | Description                                           | Required | Properties |
| -------- | ----------------------------------------------------- | -------- | ---------- |
| userId   | The unique ID of the user to update the password for. | Yes      |
| textData | string                                                | Yes      |            |

---

#### inactivityLogout()

Summary: User has been inactive and automatically logged out.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### getAllUsers()

Summary: Returns a List of all users.

Parameters:

| Name | Description | Required | Properties |
| ---- | ----------- | -------- | ---------- |

---

#### createUser(user)

Summary: Creates a new user.

Parameters:

| Name | Description | Required | Properties                                                                                                                                                                         |
| ---- | ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user | object      | Yes      | {id,username,email,firstName,lastName,organization,description,phoneNumber,industry,lastLogin,gracePeriodStart,strikeCount,lastStrikeTime,country,stateTerritory,role,userConsent} |

---

#### getUser(userIdOrName)

Summary: Returns a specific user by ID or username.

Parameters:

| Name         | Description                                        | Required | Properties |
| ------------ | -------------------------------------------------- | -------- | ---------- |
| userIdOrName | The unique ID or username of the user to retrieve. | Yes      |

---

#### updateUser(userId,user)

Summary: Updates a specified user.

Parameters:

| Name   | Description                          | Required | Properties                                                                                                                                                                         |
| ------ | ------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId | The unique ID of the user to update. | Yes      |
| user   | object                               | Yes      | {id,username,email,firstName,lastName,organization,description,phoneNumber,industry,lastLogin,gracePeriodStart,strikeCount,lastStrikeTime,country,stateTerritory,role,userConsent} |

---

#### removeUser(userId)

Summary: Removes a specific user.

Parameters:

| Name   | Description                          | Required | Properties |
| ------ | ------------------------------------ | -------- | ---------- |
| userId | The unique ID of the user to remove. | Yes      |

---

#### isUserLoggedIn(userId)

Summary: Returns a true if the specified user is logged in to the server.

Parameters:

| Name   | Description                | Required | Properties |
| ------ | -------------------------- | -------- | ---------- |
| userId | The unique ID of the user. | Yes      |

---

#### getUserPreferences(name,userId)

Summary: Returns a Map of user preferences, optionally filtered by a set of property names.

Parameters:

| Name   | Description                                     | Required | Properties |
| ------ | ----------------------------------------------- | -------- | ---------- |
| userId | The unique ID of the user.                      | Yes      |
| name   | An optional set of property names to filter by. | No       |

---

#### setUserPreferences(userId)

Summary: Updates multiple user preferences.

Parameters:

| Name   | Description                | Required | Properties |
| ------ | -------------------------- | -------- | ---------- |
| userId | The unique ID of the user. | Yes      |

---

#### getUserPreference(userId,name)

Summary: Returns a specific user preference.

Parameters:

| Name   | Description                                | Required | Properties |
| ------ | ------------------------------------------ | -------- | ---------- |
| userId | The unique ID of the user.                 | Yes      |
| name   | The name of the user property to retrieve. | Yes      |

---

#### setUserPreference(userId,name,textData)

Summary: Updates a user preference.

Parameters:

| Name     | Description                              | Required | Properties |
| -------- | ---------------------------------------- | -------- | ---------- |
| userId   | The unique ID of the user.               | Yes      |
| name     | The name of the user property to update. | Yes      |
| textData | string                                   | Yes      |            |

---
