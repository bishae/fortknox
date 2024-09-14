# FortKnox

## Overview

**FortKnox** is a comprehensive cybersecurity platform designed to provide businesses with advanced threat protection, secure data management, and real-time vulnerability monitoring. It focuses on end-to-end security for enterprises, helping them safeguard critical digital assets, ensure compliance, and prevent data breaches through a suite of features like encryption, intrusion detection, security audits, and AI-powered threat intelligence.

## Objective

The primary objective of FortKnox is to help organizations across various industries protect their digital infrastructure against cyber threats. The platform will deliver robust security mechanisms, advanced encryption, compliance management, and proactive security alerts, ultimately minimizing the risk of attacks and data loss.

## Target Audience

- **Enterprise Companies**: Large-scale organizations with complex IT infrastructures.
- **Small and Medium Businesses (SMBs)**: Companies looking for cost-effective security solutions.
- **Financial Institutions**: Banks and fintech companies requiring high levels of encryption and data security.
- **Healthcare Providers**: Clinics and hospitals needing to comply with strict regulations regarding patient data protection.
- **Government Agencies**: Entities needing to protect sensitive information against state-sponsored attacks.
- **Tech Startups**: Companies needing scalable cybersecurity solutions to manage digital products and services.

## Database Schema

Here's a conceptual database schema for the **FortKnox**. This schema is designed to store security events, user roles, vulnerabilities, incident reports, and more.

### 1. **Users Table**

Stores information about the users of the platform.

| Column Name     | Data Type    | Constraints                           | Description                                                |
| --------------- | ------------ | ------------------------------------- | ---------------------------------------------------------- |
| `user_id`       | INT          | PRIMARY KEY, AUTO_INCREMENT           | Unique identifier for each user.                           |
| `username`      | VARCHAR(50)  | UNIQUE, NOT NULL                      | Username for login.                                        |
| `email`         | VARCHAR(100) | UNIQUE, NOT NULL                      | User’s email address.                                      |
| `password_hash` | VARCHAR(255) | NOT NULL                              | Hashed password for authentication.                        |
| `role_id`       | INT          | FOREIGN KEY (roles.role_id), NOT NULL | Role assigned to the user (Admin, Security Analyst, etc.). |
| `created_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP             | Time of user creation.                                     |

---

### 2. **Roles Table**

Defines user roles (Admin, Security Analyst, IT Manager, Auditor, etc.).

| Column Name   | Data Type   | Constraints                 | Description                      |
| ------------- | ----------- | --------------------------- | -------------------------------- |
| `role_id`     | INT         | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each role. |
| `role_name`   | VARCHAR(50) | NOT NULL                    | Name of the role.                |
| `permissions` | TEXT        | NOT NULL                    | JSON or serialized permissions.  |

---

### 3. **Security Events Table**

Stores security events captured by the system.

| Column Name   | Data Type                                 | Constraints                 | Description                                 |
| ------------- | ----------------------------------------- | --------------------------- | ------------------------------------------- |
| `event_id`    | BIGINT                                    | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each event.           |
| `event_type`  | VARCHAR(100)                              | NOT NULL                    | Type of event (e.g., intrusion, threat).    |
| `source_ip`   | VARCHAR(45)                               | NOT NULL                    | IP address from where the event originated. |
| `target_ip`   | VARCHAR(45)                               | NOT NULL                    | IP address targeted by the event.           |
| `event_time`  | TIMESTAMP                                 | DEFAULT CURRENT_TIMESTAMP   | Time when the event was recorded.           |
| `severity`    | ENUM('Low', 'Medium', 'High', 'Critical') | NOT NULL                    | Severity level of the event.                |
| `description` | TEXT                                      |                             | Detailed description of the event.          |
| `user_id`     | INT                                       | FOREIGN KEY (users.user_id) | User who logged or identified the event.    |

---

### 4. **Vulnerabilities Table**

Stores information about discovered vulnerabilities.

| Column Name          | Data Type                                 | Constraints                 | Description                                 |
| -------------------- | ----------------------------------------- | --------------------------- | ------------------------------------------- |
| `vulnerability_id`   | BIGINT                                    | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each vulnerability.   |
| `vulnerability_name` | VARCHAR(255)                              | NOT NULL                    | Name or identifier of the vulnerability.    |
| `vulnerability_type` | VARCHAR(100)                              | NOT NULL                    | Type (e.g., SQL Injection, XSS).            |
| `severity`           | ENUM('Low', 'Medium', 'High', 'Critical') | NOT NULL                    | Severity level of the vulnerability.        |
| `discovered_date`    | TIMESTAMP                                 | DEFAULT CURRENT_TIMESTAMP   | Date when the vulnerability was discovered. |
| `description`        | TEXT                                      |                             | Description of the vulnerability.           |
| `patch_status`       | ENUM('Unpatched', 'Patched')              | DEFAULT 'Unpatched'         | Patch status.                               |
| `system_affected`    | VARCHAR(255)                              | NOT NULL                    | The system or service affected.             |

---

### 5. **Incidents Table**

Stores information about security incidents.

| Column Name     | Data Type                               | Constraints                            | Description                                  |
| --------------- | --------------------------------------- | -------------------------------------- | -------------------------------------------- |
| `incident_id`   | BIGINT                                  | PRIMARY KEY, AUTO_INCREMENT            | Unique identifier for each incident.         |
| `incident_type` | VARCHAR(100)                            | NOT NULL                               | Type of incident (e.g., data breach).        |
| `event_id`      | BIGINT                                  | FOREIGN KEY (security_events.event_id) | Associated security event.                   |
| `detected_by`   | INT                                     | FOREIGN KEY (users.user_id)            | User who detected the incident.              |
| `description`   | TEXT                                    |                                        | Detailed description of the incident.        |
| `status`        | ENUM('Open', 'In Progress', 'Resolved') | DEFAULT 'Open'                         | Status of the incident.                      |
| `created_at`    | TIMESTAMP                               | DEFAULT CURRENT_TIMESTAMP              | Date and time when the incident was created. |
| `resolved_at`   | TIMESTAMP                               |                                        | Time when the incident was resolved.         |

---

### 6. **Incident Response Table**

Logs the actions taken in response to incidents.

| Column Name    | Data Type | Constraints                         | Description                                 |
| -------------- | --------- | ----------------------------------- | ------------------------------------------- |
| `response_id`  | BIGINT    | PRIMARY KEY, AUTO_INCREMENT         | Unique identifier for each response action. |
| `incident_id`  | BIGINT    | FOREIGN KEY (incidents.incident_id) | Incident to which this response belongs.    |
| `action_taken` | TEXT      | NOT NULL                            | Description of the action taken.            |
| `action_time`  | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP           | Time when the action was executed.          |
| `user_id`      | INT       | FOREIGN KEY (users.user_id)         | User who took the action.                   |

---

### 7. **Access Logs Table**

Tracks user login attempts, both successful and unsuccessful.

| Column Name  | Data Type   | Constraints                 | Description                                     |
| ------------ | ----------- | --------------------------- | ----------------------------------------------- |
| `log_id`     | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each log entry.           |
| `user_id`    | INT         | FOREIGN KEY (users.user_id) | User attempting the login.                      |
| `login_time` | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP   | Time of the login attempt.                      |
| `success`    | BOOLEAN     | NOT NULL                    | Whether the login attempt was successful.       |
| `ip_address` | VARCHAR(45) | NOT NULL                    | IP address from which the login was made.       |
| `method`     | VARCHAR(50) | NOT NULL                    | Method used for authentication (password, MFA). |

---

### 8. **Audit Logs Table**

Stores audit logs for compliance and security purposes.

| Column Name       | Data Type    | Constraints                 | Description                                               |
| ----------------- | ------------ | --------------------------- | --------------------------------------------------------- |
| `audit_id`        | BIGINT       | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each audit entry.                   |
| `user_id`         | INT          | FOREIGN KEY (users.user_id) | User performing the action.                               |
| `action`          | VARCHAR(255) | NOT NULL                    | Description of the action (e.g., login, update settings). |
| `target_resource` | VARCHAR(255) |                             | The resource that was affected by the action.             |
| `timestamp`       | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP   | When the action occurred.                                 |
| `ip_address`      | VARCHAR(45)  | NOT NULL                    | IP address of the user performing the action.             |

---

### 9. **Compliance Table**

Stores information about compliance scans and their results.

| Column Name       | Data Type                          | Constraints                 | Description                                  |
| ----------------- | ---------------------------------- | --------------------------- | -------------------------------------------- |
| `compliance_id`   | BIGINT                             | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each compliance scan.  |
| `scan_date`       | TIMESTAMP                          | DEFAULT CURRENT_TIMESTAMP   | Date when the compliance scan was conducted. |
| `compliance_type` | VARCHAR(100)                       | NOT NULL                    | Type of compliance (e.g., GDPR, HIPAA).      |
| `status`          | ENUM('Compliant', 'Non-Compliant') | NOT NULL                    | Compliance status.                           |
| `report_link`     | VARCHAR(255)                       |                             | Link to the generated compliance report.     |
| `scanned_by`      | INT                                | FOREIGN KEY (users.user_id) | User who performed the compliance scan.      |

---

### 10. **Notifications Table**

Stores notifications sent to users about security events and incidents.

| Column Name       | Data Type | Constraints                            | Description                              |
| ----------------- | --------- | -------------------------------------- | ---------------------------------------- |
| `notification_id` | BIGINT    | PRIMARY KEY, AUTO_INCREMENT            | Unique identifier for each notification. |
| `user_id`         | INT       | FOREIGN KEY (users.user_id)            | User receiving the notification.         |
| `event_id`        | BIGINT    | FOREIGN KEY (security_events.event_id) | Event related to the notification.       |
| `message`         | TEXT      | NOT NULL                               | Notification message content.            |
| `sent_at`         | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP              | Time when the notification was sent.     |

---

### Relationships Between Tables

- **Users** can have one **Role** (

Roles table), but roles can apply to many users.

- Each **Security Event** can lead to one or more **Incidents**, and each incident can have multiple **Incident Responses**.
- **Compliance** scans and reports are conducted by users and are related to different **Compliance Types**.
- **Audit Logs** and **Access Logs** track all user actions and login attempts, respectively.
- **Vulnerabilities** may be linked to multiple **Security Events** when exploited.
- **Notifications** are sent to users based on **Security Events** and **Incidents**.

---
