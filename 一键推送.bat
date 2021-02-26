PowerShell -Command "& {git add *}"
echo.
PowerShell -Command "& {git commit -m"%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%"}"
echo.
PowerShell -Command "& {git push}"
pause