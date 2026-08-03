---
id: note-aws-agentic-ai-stack-build-orchestrate-scale
title: "AWS Agentic AI Stack — Build, Orchestrate, Scale Intelligent Agents"
slug: aws-agentic-ai-stack-build-orchestrate-scale
date_captured: 2026-07-17
category: vendor-ecosystem
tags:
  - aws
  - bedrock
  - agentcore
  - agent-orchestration
  - vendor-ecosystem
entities:
  - AWS
  - Amazon Bedrock
  - AWS Step Functions
  - AWS Lambda
  - Brij Kishore Pandey
---

# AWS Agentic AI Stack — Build, Orchestrate, Scale Intelligent Agents

## Summary

A Brij Kishore Pandey infographic mapping the full AWS agentic AI stack across seven layers: User Interfaces, Agent Orchestration (Amazon Bedrock Agents, Step Functions, AgentCore, Lambda, EventBridge, plus five agent patterns including single/multi-agent/hierarchical/human-in-the-loop/evaluator), Foundation Models (Bedrock with Claude/Llama/Mistral/Titan plus fine-tuning and prompt optimization), Tools & Actions (AWS services, data/search, APIs/integrations like Slack/Jira/ServiceNow/Salesforce, and custom tools), Data Layer (ingestion through Glue/Kinesis to storage/catalog/quality via S3/DataZone), Operations (EKS, Fargate, Auto Scaling, CloudFormation, CodePipeline), plus side rails for Governance & Trust (IAM, Cognito, PrivateLink, KMS, guardrails, CloudTrail, compliance) and Memory & State / Observability & Monitoring.

## Key Points

- Seven-layer AWS agentic stack: Interfaces, Orchestration, Foundation Models, Tools & Actions, Data Layer, Operations, plus Governance and Memory side rails
- Agent Orchestration layer explicitly lists five agent patterns: single agent, multi-agent collaboration, hierarchical agents, human-in-the-loop, evaluator agent
- Foundation Models layer is multi-vendor even within AWS: Claude, Llama, Mistral, and Titan all served through Bedrock
- Memory & State layer separately lists Bedrock Knowledge Bases, DynamoDB, Aurora PostgreSQL, ElastiCache Redis, and S3 Vector Store
- Governance & Trust rail explicitly names HIPAA, SOC2, and ISO compliance alongside IAM/Cognito/PrivateLink/KMS
- Directly comparable structure to the Microsoft Azure agent ecosystem map captured in batch 2, useful for side-by-side vendor comparison

## Why Yaz Saved This

A direct AWS counterpart to the Azure agent ecosystem map from batch 2 — lets Yaz compare Bedrock/AgentCore against Azure AI Foundry/Agent 365 layer-by-layer for multi-cloud enterprise architecture decisions.

![AWS Agentic AI Stack — Build, Orchestrate, Scale Intelligent Agents](/img/notes/2026-07/aws-agentic-ai-stack-build-orchestrate-scale.png)
