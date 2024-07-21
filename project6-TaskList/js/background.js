chrome.runtime.onInstalled.addListener(details => {
    let initConfig = {
        'extension_background': '#EDF775',
        'list_task_show': 'progress'
    } 

    chrome.storage.local.set({ config: initConfig });
  
    // if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    //   chrome.runtime.setUninstallURL('https://example.com/extension-survey');
    // }
  });