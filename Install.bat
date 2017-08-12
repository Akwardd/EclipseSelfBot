@echo off
ECHO <----EclipseSelfBot Installer and Updater Script---->

cd %~dp0

where /q node
IF ERRORLEVEL 1 (
    ECHO Node is missing. Ensure it is installed using the default options. If this error persists, please ask for help from Akward_.
    PAUSE
    EXIT /B
) ELSE (
    REM Node found, good to go.
)

where /q yarn
IF ERRORLEVEL 1 (
    ECHO Yarn is missing. Ensure it is installed using the default options. If this error persists, please ask for help from Akward_.
    PAUSE
    EXIT /B
) ELSE (
    REM Yarn found, good to go.
)

yarn install

PAUSE
