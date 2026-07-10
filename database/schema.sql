-- Joyce Coem Portfolio Database Schema
-- Target: Microsoft SQL Server

IF DB_ID('JoycePortfolioDb') IS NULL
BEGIN
    CREATE DATABASE JoycePortfolioDb;
END
GO

USE JoycePortfolioDb;
GO

IF OBJECT_ID('dbo.Projects', 'U') IS NOT NULL DROP TABLE dbo.Projects;
CREATE TABLE dbo.Projects (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Slug NVARCHAR(100) NOT NULL UNIQUE,
    Title NVARCHAR(200) NOT NULL,
    Subtitle NVARCHAR(300) NULL,
    Problem NVARCHAR(MAX) NULL,
    Solution NVARCHAR(MAX) NULL,
    Architecture NVARCHAR(MAX) NULL,
    MyRole NVARCHAR(MAX) NULL,
    Technologies NVARCHAR(500) NULL,
    Outcome NVARCHAR(MAX) NULL,
    LessonsLearned NVARCHAR(MAX) NULL,
    GitHubUrl NVARCHAR(300) NULL,
    DemoUrl NVARCHAR(300) NULL,
    DisplayOrder INT NOT NULL DEFAULT 0
);
GO

IF OBJECT_ID('dbo.Achievements', 'U') IS NOT NULL DROP TABLE dbo.Achievements;
CREATE TABLE dbo.Achievements (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX) NULL,
    Category NVARCHAR(100) NULL,
    DateLabel NVARCHAR(100) NULL,
    DisplayOrder INT NOT NULL DEFAULT 0
);
GO

IF OBJECT_ID('dbo.ResearchProjects', 'U') IS NOT NULL DROP TABLE dbo.ResearchProjects;
CREATE TABLE dbo.ResearchProjects (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Slug NVARCHAR(100) NOT NULL UNIQUE,
    Title NVARCHAR(300) NOT NULL,
    Context NVARCHAR(300) NULL,
    Supervisor NVARCHAR(200) NULL,
    [Abstract] NVARCHAR(MAX) NULL,
    Objectives NVARCHAR(MAX) NULL,
    Methodology NVARCHAR(MAX) NULL,
    Technologies NVARCHAR(500) NULL,
    KeyFindings NVARCHAR(MAX) NULL,
    DisplayOrder INT NOT NULL DEFAULT 0
);
GO

IF OBJECT_ID('dbo.Certifications', 'U') IS NOT NULL DROP TABLE dbo.Certifications;
CREATE TABLE dbo.Certifications (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    Issuer NVARCHAR(200) NULL,
    CredentialUrl NVARCHAR(300) NULL,
    InProgress BIT NOT NULL DEFAULT 0,
    DisplayOrder INT NOT NULL DEFAULT 0
);
GO

IF OBJECT_ID('dbo.ContactMessages', 'U') IS NOT NULL DROP TABLE dbo.ContactMessages;
CREATE TABLE dbo.ContactMessages (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(200) NOT NULL,
    Email NVARCHAR(200) NOT NULL,
    Message NVARCHAR(MAX) NOT NULL,
    SubmittedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
GO
