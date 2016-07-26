@echo off

start C:\mongo\mongod --dbpath %~dp0 --httpinterface --rest
