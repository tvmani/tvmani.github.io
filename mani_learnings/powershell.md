# powershell notes

## scripts

1. Find folder size in windows

    ```powershell
    Install-Module -Name PSFolderSize -RequiredVersion 1.0 -Scope CurrentUser
    ```

    get-help Get-FolderSize -examples
    Get-Help Get-FolderSize -Detailed

    https://gallery.technet.microsoft.com/scriptcenter/Outputs-directory-size-964d07ff

2. what?

3. Would the application run as administrator user or normal user?
    * Normal user, would not have rights to query the HKLM registry keys
    
4. 