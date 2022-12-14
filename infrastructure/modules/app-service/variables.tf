variable "resource_group" {
  type        = string
  description = "The resource group"
}

variable "application_name" {
  type        = string
  description = "The name of your application"
}

variable "environment" {
  type        = string
  description = "The environment (dev, test, prod...)"
  default     = "dev"
}

variable "location" {
  type        = string
  description = "The Azure region where all resources in this example should be created"
}

variable "azure_application_insights_instrumentation_key" {
  type        = string
  description = "The Azure Application Insights instrumentation key"
}

variable "azure_cosmosdb_mongodb_database" {
  type        = string
  description = "The Cosmos DB with MongoDB API database name"
}

variable "azure_cosmosdb_mongodb_uri" {
  type        = string
  description = "The Cosmos DB with MongoDB API database URI"
}
